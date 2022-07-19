import Image from "next/image";
import { ethers, utils } from "ethers";
import { useWeb3React } from "@web3-react/core";
import detectEthereumProvider from "@metamask/detect-provider";

import { Header, Footer, Layout, LineDivider, Button } from "components";
import { ADDRESSES, MERKLE } from "../constants";
import VIPMinterABI from "../ABI/VIPMinter.json";
import CitizenShipPass from "../public/assets/images/citizenship.png";
import VIPPass from "../public/assets/images/vip.png";
import EthereumIcon from "../public/assets/images/ethereum.png";

const Citizenship = () => {
  const { account, library, chainId } = useWeb3React();

  const mintVip = async () => {
    try {
      if (!account) {
        alert("Connect your metamask");
        return;
      }
      const detectedProvider = await detectEthereumProvider({
        mustBeMetaMask: true,
      });
      const provider = (detectedProvider as any).providers
        ? (detectedProvider as any).providers.find(
            providerData => providerData.isMetaMask
          )
        : detectedProvider;

      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();

      const contract = new ethers.Contract(
        ADDRESSES[chainId].vipMinter,
        VIPMinterABI,
        signer
      );
      const paused = await contract.paused();
      if (paused) {
        alert("Mint is paused");
        return;
      }
      const mintFee = await contract.mintingFee();
      const mintRound = await contract.mintRound();
      const isOGAndEarlyMint = await contract.isOGAndEarlyMint();

      let proofs: any = [];

      if (isOGAndEarlyMint) {
        proofs = [...MERKLE[0].proofs, ...MERKLE[1].proofs].find(
          p => p.address.toLowerCase() === account.toLowerCase()
        );
      } else
        proofs = MERKLE[mintRound].proofs.find(
          p => p.address.toLowerCase() === account.toLowerCase()
        );
      if (!proofs) {
        alert("Not whitelisted");
        return;
      }
      const proof = proofs.proofs.split(",");
      const tx = await contract.mint(proof, { value: mintFee });
      await tx.wait();
    } catch (e) {
      alert("Mint failed");
      console.error("err - ", e);
      return;
    }
  };

  return (
    <div className='flex flex-col justify-between bg-black md:h-screen'>
      <div className='md:mt-28 mt-10 md:px-20 px-8 pb-8 flex md:flex-row flex-col gap-10 justify-center'>
        <Image src={VIPPass} width={510} height={462} />
        <div>
          <h1 className='text-5xl font-extrabold text-third mb-6'>VIP PASS</h1>
          <LineDivider widthClass='w-60' bgClass='bg-gradient' />
          <div className='mt-16 grid grid-cols-2 gap-12'>
            <div>
              <h2 className='text-white text-2xl font-extrabold'>OG</h2>
              <div className='mt-3 flex gap-2'>
                <h2 className='text-third font-extrabold'>0.85</h2>
                <Image src={EthereumIcon} width={16} height={20} />
              </div>
            </div>
            <div>
              <h2 className='text-white text-2xl font-extrabold'>WHITELIST</h2>
              <div className='mt-3 flex gap-2'>
                <h2 className='text-third font-extrabold'>0.9</h2>
                <Image src={EthereumIcon} width={16} height={20} />
              </div>
            </div>
            <div>
              <h2 className='text-white text-2xl font-extrabold'>EARLY bird</h2>
              <div className='mt-3 flex gap-2'>
                <h2 className='text-third font-extrabold'>0.85</h2>
                <Image src={EthereumIcon} width={16} height={20} />
              </div>
            </div>
          </div>
          <div className='mt-16'>
            <Button
              className='w-full text-2xl'
              type='PRIMARY'
              label='MINT VIP PASS'
              onClick={mintVip}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citizenship;
