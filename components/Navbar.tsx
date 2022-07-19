import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import OutsideClickHandler from "react-outside-click-handler";

const NAVS = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT",
    href: "/#about",
  },
  {
    label: "TEAM",
    href: "/#team",
  },
  {
    label: "CITIZENSHIP",
    href: "/citizenship",
  },
  {
    label: "VIP",
    href: "/vip",
  },
];

export const Navbar = () => {
  const router = useRouter();

  // const activeMenu = useMemo(() => {
  //   if (router.pathname === "/") {
  //     if (router.asPath && router.asPath === "/") {
  //       return "home";
  //     } else {
  //       return router.asPath.split("#")[1];
  //     }
  //   } else if (router.pathname && router.pathname.length >= 2) {
  //     return router.pathname.slice(1);
  //   }
  // }, [router]);
  // console.log({ router });
  // console.log({ activeMenu });

  const [activeMenu, setActiveMenu] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") {
      if (router.asPath && router.asPath === "/") {
        setActiveMenu("home");
      } else {
        setActiveMenu(router.asPath.split("#")[1]);
      }
    } else if (router.pathname && router.pathname.length >= 2) {
      setActiveMenu(router.pathname.slice(1));
    }
  }, [router]);

  return (
    <>
      <nav className='hidden md:flex items-center gap-8'>
        {NAVS.map(({ label, href }) => (
          <a
            href={href}
            key={label}
            className={`text-white px-2 py-[0.375rem] hover:text-secondary text-base font-bold uppercase ${
              activeMenu === label.toLowerCase()
                ? "bg-gradient rounded text-black"
                : ""
            }`}
            onClick={() => setActiveMenu(label.toLowerCase())}
          >
            {label}
          </a>
        ))}
        <div className='flex gap-6'>
          <a
            href='https://discord.gg/dresempire'
            target='_blank'
            className='bg-white bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-full text-white'
          >
            <FontAwesomeIcon icon={faDiscord} size='lg' />
          </a>
          <a
            href='https://twitter.com/Dres_Empire'
            target='_blank'
            className='bg-white bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-full text-white'
          >
            <FontAwesomeIcon icon={faTwitter} size='lg' />
          </a>
        </div>
      </nav>
      <div className='block md:hidden ml-auto'>
        <OutsideClickHandler onOutsideClick={() => setMobileMenu(false)}>
          <FontAwesomeIcon
            icon={faBars}
            className='text-white'
            onClick={() => setMobileMenu(true)}
          />
          {mobileMenu ? (
            <nav className='flex flex-col items-center gap-8 absolute bg-black w-[200px] rounded-lg p-4 z-10'>
              {NAVS.map(({ label, href }) => (
                <a
                  href={href}
                  key={label}
                  className={`text-white px-2 py-[0.375rem] hover:text-secondary text-base font-bold uppercase ${
                    activeMenu === label.toLowerCase()
                      ? "bg-gradient rounded text-black"
                      : ""
                  }`}
                  onClick={() => setActiveMenu(label.toLowerCase())}
                >
                  {label}
                </a>
              ))}
              <div className='flex gap-6'>
                <a
                  href='https://discord.gg/dresempire'
                  target='_blank'
                  className='bg-white bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-full text-white'
                >
                  <FontAwesomeIcon icon={faDiscord} size='lg' />
                </a>
                <a
                  href='https://twitter.com/Dres_Empire'
                  target='_blank'
                  className='bg-white bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-full text-white'
                >
                  <FontAwesomeIcon icon={faTwitter} size='lg' />
                </a>
              </div>
            </nav>
          ) : null}
        </OutsideClickHandler>
      </div>
    </>
  );
};
