import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  return (
    <section className='pt-10'>
      <SectionTitle
        subtitle={`If you have a question or just want to say hi, don’t hesitate to reach out!`}
      >
        Contact
      </SectionTitle>
      <div className='pt-4'>
        <a
          href='mailto: faisalmanit23@gmail.com'
          className='pb-[2px] text-lg font-bold border-b-2 border-black dark:border-white dark:border-opacity-0  border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 hover:transition dark:text-white'
        >
          faisalmanit23@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
