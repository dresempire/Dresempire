import Image from "next/image";
import { useRouter } from "next/router";

import {
  Header,
  Layout,
  WelcomeBar,
  LineDivider,
  TeamMember,
  Footer,
} from "components";
import Logo from "../public/assets/images/logo_big.png";
import CitizenShipPass from "../public/assets/images/citizenship.png";
import VIPPass from "../public/assets/images/vip.png";
import { Button } from "components/Button";
import EthereumIcon from "../public/assets/images/ethereum.png";

const Home = () => {
  const router = useRouter();
  return (
    <>
      {/* Hero Section */}
      <div className='lg:py-60 py-20 lg:md:px-20 px-8 px-8 bg-black'>
        <div className='max-w-[90rem] m-auto flex flex-col items-center'>
          <h1
            className='stroke-black lg:text-[6.25rem] md:text-[4rem] text-[3rem] font-extrabold'
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#FDC03A",
            }}
          >
            Welcome To
          </h1>
          <div className='md:-mt-20 -mt-10'>
            <img
              src='/assets/images/logo_big.png'
              alt='Dre'
              className='lg:w-[476px] lg:h-[214px] w-[150px]'
            />
          </div>
        </div>
      </div>
      <WelcomeBar />
      {/* About Dre */}
      <div className='md:px-20 px-8 md:py-16 py-8 bg-white' id='about'>
        <div className='max-w-[90rem] flex items-center  m-auto'>
          <div className='lg:w-[40rem]'>
            <div className='flex mb-6'>
              <h1 className='text-third text-5xl font-extrabold'>ABOUT</h1>
              <h1 className='text-black text-5xl font-extrabold'>&nbsp;DRE</h1>
            </div>
            <LineDivider widthClass='w-60' bgClass='bg-gradient' />
            <div className='mt-6'>
              <p className='text-primary text-base'>
                Dre’s Empire is the biggest free alpha group in the space,
                constantly bringing Its members the best value possible. We have
                been free for over 6 months and now finally becoming exclusive
                with out own passes. The Citizenship (950 supply) and VIP pass
                (200 supply). Both passes come with insane value for holders
                however the VIP pass is the superior one. These passes will come
                with guides, giveaways, shot calls and all the tools you need to
                dominate the NFT space. Partnering with Just Cubes, Alphasharks,
                Compass.art, Nft Nerds and NFT sensei to give holders the best
                value any pass has ever given them.
              </p>
              <p className='mt-12 text-primary text-base'>
                Holding both passes will also grant massive benefits to holders.
                We know how to treat out greatest supporters well. More info on
                our discord about this You will use this pass as your key to
                success in this space. As many say, Dre’s Empire is “the all you
                need alpha”. So are you ready to join the #1 alpha in the space?
                Not giving financial advice and remember. Always do your own
                research!
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
      </div>
      <WelcomeBar />
      {/* Citizenship Pass */}
      <div className='md:px-20 px-8 py-24 bg-black'>
        <div className='max-w-[90rem] m-auto lg:flex lg:flex-row-reverse justify-between items-center gap-5'>
          <div className='flex justify-center items-center lg:mb-0 mb-5'>
            <Image src={CitizenShipPass} width={400} height={310} />
          </div>
          <div className='lg:w-[40rem]'>
            <h1 className='text-5xl font-extrabold text-white mb-6'>
              CITIZENSHIP PASS
            </h1>
            <LineDivider widthClass='w-60' bgClass='bg-gradient' />
            <div className='mt-8'>
              <h2 className='text-secondary text-2xl font-extrabold'>
                UTILITY 1
              </h2>
              <p className='text-white text-base mt-4'>
                - Access to almost all channels
                <br /> - Ping bots e.g. whale alerts, rug pull finder, certain
                nft people in the space.
                <br /> - Tools Channel
                <br /> - Icy tools, nft calendar, moby alerts
                <br /> - Wl marketplace
                <br /> - Access to calls and giveaways
                <br /> - All holders get access to alpha sharks extention
              </p>
              <h2 className='text-secondary text-2xl font-extrabold mt-8'>
                UTILITY 2
              </h2>
              <p className='text-white text-base mt-4'>
                - Access to Dre Node (trippy mate)
                <br /> - Free <br />
                - Discounted NFTnerds
                <br /> - 30% off of 6mo & 40% off of 12mo <br />
                - Discounted Compass.art
                <br /> - 30% off 1 month, 40% off 6 months and 50% off 1 year{" "}
                <br />
                - Discounted NFT Hud
                <br /> - 40% off 1 month, <br />- Exclusive guides on how and
                when to buy, flip and practically how to make money in this
                space with small amounts to almost zero risk. <br />
                - Access to future projects that we may create/partner with.
                <br /> - Getting early calls, then we share it to the rest of
                the alpha group 60000+ members. Imagine being in there before
                all the others. That’s true alpha
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* VIP Pass */}
      <div className='md:px-20 px-8 py-24 bg-gradient'>
        <div className='max-w-[90rem] m-auto flex lg:flex-row flex-col justify-between items-center gap-5'>
          <div className='flex justify-center items-center lg:mb-0 mb-5'>
            <Image src={VIPPass} width={400} height={310} />
          </div>
          <div className='lg:w-[40rem]'>
            <h1 className='text-5xl font-extrabold text-black mb-6'>
              VIP PASS
            </h1>
            <LineDivider widthClass='w-60' bgClass='bg-white' />
            <div className='mt-8'>
              <h2 className='text-white text-2xl font-extrabold'>UTILITY 1</h2>
              <p className='text-primary text-base mt-4'>
                - Everything from above ^^ + more
                <br />- A total of 6 months free NFT Sensei – Full access to
                their tool set. 3 months once we launch and another 3 months at
                a later time when they have more features!
                <br />- Access to all channels
                <br />- VIP exclusive chat
              </p>
              <h2 className='text-white text-2xl font-extrabold mt-8'>
                UTILITY 2
              </h2>
              <p className='text-primary text-base mt-4'>
                - 3x entries to every giveaway <br />- Exclusive VIP giveaways
                <br />- Unclaimed wl spots will be raffled to VIP holders <br />
                - Mystery Box's that contain things such as NFTs, Eth, Wl and
                more!
                <br />- I wonder what this role gets you when we create our own
                future project
                <br />- First hand beta testers for new partnerships
                <br />- Direct contact to Dre and his team
                <br />- Owning this pass will get you free wl for some projects
                . Just like how scavengers did for flippr.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WelcomeBar />
      {/* MINT dre’s empire */}
      <div className='py-36 bg-black'>
        <div className='max-w-[90rem] m-auto'>
          <div className='lg:w-[50rem] m-auto'>
            <h1 className='text-5xl text-third font-extrabold mb-6 uppercase text-center'>
              PUBLIC SALE
            </h1>
            {/* <h2 className='text-white mt-1 text-[2rem] text-center'>
              JULY 22, 9 am EST
            </h2> */}
            <div className='mt-20 mx-auto flex lg:flex-row flex-col gap-20 justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <Image src={CitizenShipPass} width={300} height={234} />
                <Button
                  label='MINT CITIZENSHIP PASS'
                  type='SECONDARY'
                  className='mt-5'
                  onClick={() => router.push("citizenship")}
                />
                {/* <div className='mt-5 text-center text-white font-extrabold text-base leading-9 invisible'>
                  PUBLIC
                </div>
                <div className='text-center text-white font-extrabold text-base leading-9 invisible'>
                  00/00/22 00:00:00
                </div> */}
                <div className='mt-4 text-center text-third font-extrabold text-base leading-9 flex items-center'>
                  PUBLIC &nbsp;
                  <div className='flex gap-2'>
                    <h2 className='text-third font-extrabold'>0.4</h2>
                    <Image src={EthereumIcon} width={16} height={26} />
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <Image src={VIPPass} width={300} height={234} />
                <Button
                  label='MINT VIP PASS'
                  type='PRIMARY'
                  className='mt-5'
                  onClick={() => router.push("vip")}
                />
                {/* <div className='mt-5 text-center text-white font-extrabold text-base leading-9 invisible'>
                  OG MINT
                </div>
                <div className='text-center text-white font-extrabold text-base leading-9 invisible'>
                  07/22/22 9:00:00
                </div>
                <div className='text-center text-third font-extrabold text-base leading-9 invisible'>
                  OG MINT
                </div> */}
              </div>
            </div>
            <div className='mt-20'>
              <LineDivider widthClass='w-full' bgClass='bg-gradient' />
            </div>
          </div>
        </div>
      </div>
      <WelcomeBar />
      {/* MEET THE TEAM  */}
      <div className='md:px-20 px-8 md:py-16 py-8 pb-52 bg-black' id='team'>
        <div className='max-w-[90rem] m-auto'>
          <h1 className='text-white text-5xl font-extrabold'>
            MEET THE <span className='text-secondary'>&nbsp;TEAM</span>
          </h1>
          <div className='grid lg:grid-cols-4 grid-cols-2 gap-10 mt-20'>
            <div className='lg:block hidden' />
            <TeamMember
              avatar={VIPPass}
              name='DRE'
              role='Founder'
              twitter='https://twitter.com/Dres_Empire'
            />
            <TeamMember
              avatar={VIPPass}
              name='Satanity'
              role='Founders Assistant'
              twitter='https://twitter.com/satanityeth'
            />
            <div className='lg:block hidden' />
            <TeamMember
              avatar={VIPPass}
              name='Breezy'
              role='Mod'
              twitter='https://twitter.com/breezy_ether'
            />
            <TeamMember
              avatar={VIPPass}
              name='Greystache'
              role='Mod'
              twitter='https://twitter.com/Greystache_1'
            />
            <TeamMember
              avatar={VIPPass}
              name='CryptoJaks'
              role='Mod'
              twitter='https://twitter.com/Cryptojaks87'
            />
            <TeamMember
              avatar={VIPPass}
              name='BlueWolfRT'
              role='Mod'
              twitter='https://twitter.com/BlueWolfRT1'
            />
            <TeamMember
              avatar={VIPPass}
              name='JMC'
              role='Mod'
              twitter='https://twitter.com/jmcdoesnfts'
            />
            <TeamMember
              avatar={VIPPass}
              name='Syrup'
              role='Collab Manager'
              twitter='https://twitter.com/HELPIGOTRUGGED'
            />
            <TeamMember
              avatar={VIPPass}
              name='Web3Crusader'
              role='Collab Manager'
              twitter='https://twitter.com/Web3Crusader'
            />
            <TeamMember
              avatar={VIPPass}
              name='Pauluz'
              role='Collab Manager'
              twitter='https://twitter.com/Pauluz94'
            />
            <TeamMember
              avatar={VIPPass}
              name='Tma420.eth'
              role='Collab Manager'
              twitter='https://twitter.com/Tma_420'
            />
            <TeamMember
              avatar={VIPPass}
              name='Sevester'
              role='Collab Manager'
              twitter='https://twitter.com/Sevesternft'
            />
            <TeamMember
              avatar={VIPPass}
              name='Wilson'
              role='Shotcaller'
              twitter='https://twitter.com/_Wilson_H'
            />
            <TeamMember
              avatar={VIPPass}
              name='D8taFlash'
              role='Shotcaller'
              twitter='https://twitter.com/D8taFlash_4U'
            />
            <TeamMember
              avatar={VIPPass}
              name='Davey'
              role='Shotcaller'
              twitter='https://twitter.com/davideanda_?s=21'
            />
            <TeamMember
              avatar={VIPPass}
              name='Saltylollipop69'
              role='Shotcaller'
              twitter='https://twitter.com/saltylollipop69'
            />
            <TeamMember
              avatar={VIPPass}
              name='HairyMert'
              role='Chat Mod'
              twitter='https://twitter.com/HairyMert'
            />
            <TeamMember
              avatar={VIPPass}
              name='Triplec'
              role='Chat Mod'
              twitter='https://twitter.com/thepaddock1892'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
