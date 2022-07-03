import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import { scrollAnimation } from '@/lib/animation';

const About: React.FC = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <motion.section
      className='projects'
      ref={ref}
      variants={scrollAnimation}
      initial='hidden'
      animate={control}
    >
      <SectionTitle subtitle=''>About Me</SectionTitle>
      <div className='px-6 2xl:px-0 w-full flex justify-center items-center py-4 '>
        <div className='mx-auto container'>
          <div className='grid grid-cols-1 gap-x-[50px] lg:grid-cols-2'>
            <Image
              src='/icons/animate.svg'
              alt='about'
              width={500}
              height={500}
            />
            <div className='pb-10 pt-2'>
              <p className='md:text-xl sm:text-lg dark:text-white font-light'>
                Hi, I&apos;m Faisal. I&apos;m a final year Computer Science
                student at Maulana Azad National Institute of Technology
                (MANIT).
                <br />
                <br />I am a programming enthusiast who loves solving problems.
                I&apos;m very much passionate about building products from
                scratch that solves real life problems.
                <br />
                <br />
                Currently I&apos;m Head of Web Operations at ISTE, a technical
                society of MANIT.
                <br />
                <br />
                Apart from coding, I love to play football and huge fan of
                thriller movies and web series.
              </p>
              <div className='py-4'>
                <a
                  href='https://drive.google.com/drive/u/0/folders/13W6dZM69-PXQQO8HbeszcvOjN0DmBWyh'
                  target='_'
                >
                  <button className='button mt-5' type='button'>
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
