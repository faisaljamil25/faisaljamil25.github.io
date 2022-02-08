import clsx from 'clsx';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  const linkClassName = clsx(
    'hover:text-gray-800 dark:hover:text-gray-200 no-underline text-current'
  );

  return (
    <div className='mt-auto'>
      <footer
        className='flex justify-center w-full px-4 py-8 lg:px-28'
        id='footer'
      >
        <div className={clsx('footer', className)}>
          <div className='grid grid-flow-col items-center gap-4 text-gray-600'>
            <a
              className={clsx('link', linkClassName)}
              href='https://github.com/faisaljamil25'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FiGithub size={20} />
            </a>
            <a
              className={clsx('link', linkClassName)}
              href='https://www.linkedin.com/in/faisaljamil25/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <RiLinkedinLine size={25} />
            </a>
            <a
              className={clsx('link', linkClassName)}
              href='https://leetcode.com/faisaljamil25/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
