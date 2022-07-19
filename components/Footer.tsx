import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

import Logo from "../public/assets/images/logo.png";

export const Footer = () => {
  return (
    <div className='md:px-20 px-4 py-6 flex justify-between items-center bg-black'>
      <img
        src='/assets/images/logo.png'
        className='md:w-[81px] w-[60px]'
        alt='Dre'
      />
      <p className='md:text-sm text-xs text-white'>
        © 2022 Dre’s Empire. All rights reserved
      </p>
      <div className='flex md:gap-4 gap-2'>
        <div className='w-6 h-6 rounded-full bg-white bg-opacity-10 flex items-center justify-center mt-1'>
          <a
            href='https://discord.gg/dresempire'
            target='_blank'
            className='text-white'
          >
            <FontAwesomeIcon icon={faDiscord} size='xs' />
          </a>
        </div>
        <div className='w-6 h-6 rounded-full bg-white bg-opacity-10 flex items-center justify-center mt-1'>
          <a
            href='https://twitter.com/Dres_Empire'
            target='_blank'
            className='text-white'
          >
            <FontAwesomeIcon icon={faTwitter} size='xs' />
          </a>
        </div>
      </div>
    </div>
  );
};
