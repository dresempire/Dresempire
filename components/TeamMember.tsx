import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

type ITeamMemberProps = {
  avatar: any;
  name: string;
  role: string;
  twitter: string;
};

export const TeamMember: React.FC<ITeamMemberProps> = ({
  avatar,
  name,
  role,
  twitter,
}) => {
  return (
    <div className='flex flex-col items-center'>
      <img
        src={`/assets/images/team/${name.toLowerCase()}.png`}
        className='lg:w-[290px] lg:h-[290px] md:w-[200px] md:h-[200px]'
      />
      <h1 className='mt-4 text-2xl font-extrabold text-white'>{name}</h1>
      <h2 className='mt-1 text-third text-base font-bold'>{role}</h2>
      <div className='w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center mt-1'>
        <a href={twitter} target='_blank' className='text-white'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};
