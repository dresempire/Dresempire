import Image from "next/image";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";

import { useEagerConnect, useInactiveListener } from "../hooks";
import { injected, network, walletconnect, walletlink } from "../connectors";

import {
  Header,
  Layout,
  WelcomeBar,
  LineDivider,
  TeamMember,
  Footer,
} from "components";
import Logo from "../public/assets/images/logo_big.png";
import CitizenShipPass from "../public/assets/images/citizenship_pass.gif";
import VIPPass from "../public/assets/images/vip_pass.gif";
import { Button } from "components/Button";
import App from "./_app";

enum ConnectorNames {
  Injected = "Injected",
  Network = "Network",
  WalletConnect = "WalletConnect",
  WalletLink = "WalletLink",
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletlink,
};

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect ||
    error instanceof UserRejectedRequestErrorFrame
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    console.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }
}

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const Home = () => (
  <Layout title='Dre'>
    <Header />
    {/* Hero Section */}
    <div className='py-60 px-20 flex flex-col items-center bg-black'>
      <h1
        className='stroke-black text-[6.25rem] font-extrabold'
        style={{
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#FDC03A",
        }}
      >
        Welcome To
      </h1>
      <div className='-mt-20'>
        <Image src={Logo} alt='Dre' width={476} height={214} />
      </div>
    </div>
    <WelcomeBar />
    {/* About Dre */}
    <div className='px-20 py-16 bg-white' id='about'>
      <div className='w-[40rem]'>
        <div className='flex mb-6'>
          <h1 className='text-third text-5xl font-extrabold'>ABOUT</h1>
          <h1 className='text-black text-5xl font-extrabold'>&nbsp;DRE</h1>
        </div>
        <LineDivider widthClass='w-60' bgClass='bg-gradient' />
        <div className='mt-6'>
          <p className='text-primary text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className='mt-12 text-primary text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='mt-9'>
          <p className='text-fourth text-base font-bold'>
            We are the #1 free alpha space,
          </p>
          <p className='text-primary text-base font-bold'>
            and we’re just getting started.
          </p>
        </div>
      </div>
    </div>
    <WelcomeBar />
    {/* Citizenship Pass */}
    <div className='px-20 py-24 bg-black flex justify-between items-center gap-5'>
      <div className='w-[40rem]'>
        <h1 className='text-5xl font-extrabold text-white mb-6'>
          CITIZENSHIP PASS
        </h1>
        <LineDivider widthClass='w-60' bgClass='bg-gradient' />
        <div className='mt-8'>
          <h2 className='text-secondary text-2xl font-extrabold'>UTILITY 1</h2>
          <p className='text-white text-base mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2 className='text-secondary text-2xl font-extrabold mt-8'>
            UTILITY 2
          </h2>
          <p className='text-white text-base mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className=''>
        <Image src={CitizenShipPass} width={400} height={310} />
      </div>
    </div>
    {/* VIP Pass */}
    <div className='px-20 py-24 bg-gradient flex justify-between items-center gap-5'>
      <div className=''>
        <Image src={VIPPass} width={400} height={310} />
      </div>
      <div className='w-[40rem]'>
        <h1 className='text-5xl font-extrabold text-black mb-6'>VIP PASS</h1>
        <LineDivider widthClass='w-60' bgClass='bg-white' />
        <div className='mt-8'>
          <h2 className='text-white text-2xl font-extrabold'>UTILITY 1</h2>
          <p className='text-primary text-base mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2 className='text-white text-2xl font-extrabold mt-8'>UTILITY 2</h2>
          <p className='text-primary text-base mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    <WelcomeBar />
    {/* MINT dre’s empire */}
    <div className='py-36 bg-black'>
      <div className='w-[50rem] m-auto'>
        <h1 className='text-5xl text-third font-extrabold mb-6 uppercase text-center'>
          MINT dre’s empire
        </h1>
        <h2 className='text-white mt-1 text-[2rem] text-center'>
          JUNE 25, 8 PM
        </h2>
        <div className='mt-20 mx-auto flex gap-20 justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <Image src={CitizenShipPass} width={300} height={234} />
            <Button
              label='MINT CITIZENSHIP PASS'
              type='SECONDARY'
              className='mt-5'
            />
            <div className='mt-5 text-center text-white font-extrabold text-base leading-9'>
              OG MINT
            </div>
            <div className='text-center text-white font-extrabold text-base leading-9'>
              00/00/22 00:00:00
            </div>
            <div className='text-center text-third font-extrabold text-base leading-9'>
              OG MINT
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image src={VIPPass} width={300} height={234} />
            <Button label='MINT VIP PASS' type='PRIMARY' className='mt-5' />
            <div className='mt-5 text-center text-white font-extrabold text-base leading-9'>
              OG MINT
            </div>
            <div className='text-center text-white font-extrabold text-base leading-9'>
              00/00/22 00:00:00
            </div>
            <div className='text-center text-third font-extrabold text-base leading-9'>
              OG MINT
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <LineDivider widthClass='w-full' bgClass='bg-gradient' />
        </div>
      </div>
    </div>
    <WelcomeBar />
    {/* MEET THE TEAM  */}
    <div className='px-20 py-16 pb-52 bg-black' id='team'>
      <h1 className='text-white text-5xl font-extrabold'>
        MEET THE <span className='text-secondary'>&nbsp;TEAM</span>
      </h1>
      <div className='grid grid-cols-4 gap-10 mt-20'>
        <div />
        <TeamMember avatar={VIPPass} name='DRE' role='Founder' twitter='' />
        <TeamMember
          avatar={VIPPass}
          name='Satanity'
          role='Founders Assistant'
          twitter=''
        />
        <div />
        <TeamMember avatar={VIPPass} name='Breezy' role='Mod' twitter='' />
        <TeamMember avatar={VIPPass} name='Greystache' role='Mod' twitter='' />
        <TeamMember avatar={VIPPass} name='CryptoJaks' role='Mod' twitter='' />
        <TeamMember avatar={VIPPass} name='BlueWolfRT' role='Mod' twitter='' />
        <TeamMember avatar={VIPPass} name='JMC' role='Mod' twitter='' />
        <TeamMember
          avatar={VIPPass}
          name='Syrup'
          role='Collab Manager'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='Web3Crusader'
          role='Collab Manager'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='Pauluz'
          role='Collab Manager'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='Tma420.eth'
          role='Collab Manager'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='Sevester'
          role='Collab Manager'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='Wilson'
          role='Shotcaller'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='D8taFlash'
          role='Shotcaller'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='Davey'
          role='Shotcaller'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='Saltylollipop69'
          role='Shotcaller'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='HairyMert'
          role='Chat Mod'
          twitter=''
        />
        <TeamMember
          avatar={VIPPass}
          name='Triplec'
          role='Chat Mod'
          twitter=''
        />
      </div>
    </div>
    <Footer />
  </Layout>
);

export default Home;
