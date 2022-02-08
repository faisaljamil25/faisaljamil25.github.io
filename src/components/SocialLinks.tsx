import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { RiLinkedinLine } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';
import { useIsMounted } from '@/hooks/useIsMounted';
import clsx from 'clsx';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}
const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <li className='last:mb-4'>
      <a
        href={href}
        className='block p-3 group '
        target='_blank'
        rel='noreferrer noopener'
      >
        {icon}
      </a>
    </li>
  );
};

const SocialLinks: React.FC = () => {
  const isMounted = useIsMounted();
  return (
    <ul
      className={clsx(
        'fixed bottom-0 hidden left-7 lg:block after:bg-black dark:after:bg-white',
        'socials-line'
      )}
    >
      {isMounted && (
        <IconContext.Provider
          value={{
            size: '1.25rem',
            className:
              'group-hover:transform group-hover:-translate-y-1 group-hover:text-accent group-hover:duration-400 duration-[.1s] dark:text-white',
          }}
        >
          <SocialLink
            href='https://github.com/faisaljamil25'
            icon={<FiGithub />}
          />
          <SocialLink
            href='https://www.linkedin.com/in/faisaljamil25/'
            icon={<RiLinkedinLine />}
          />
          <SocialLink
            href='https://leetcode.com/faisaljamil25/'
            icon={<SiLeetcode />}
          />
        </IconContext.Provider>
      )}
    </ul>
  );
};

export default SocialLinks;
