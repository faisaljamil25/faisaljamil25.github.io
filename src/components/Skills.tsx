import Image from 'next/image';
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import icons from '../icons';
import { Tooltip } from './Tooltip';
import { scrollAnimation } from '@/lib/animation';

const Skills = () => {
  const { theme } = useTheme();
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
      <SectionTitle subtitle="Technologies I've worked on">Skills</SectionTitle>
      <div className='px-6 2xl:px-0 w-full flex justify-center items-center py-10 pb-16'>
        <div className='mx-auto container'>
          <div>
            <div className='container mx-auto grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 pt-6 gap-10 justify-center'>
              {[
                icons.react,
                icons.nextjs,
                icons.ts,
                icons.nodejs,
                icons.express,
                icons.mongodb,
                icons.mui,
                icons.tailwind,
                icons.firebase,
                icons.html,
                icons.css,
                icons.sass,
                icons.js,
                icons.reactQuery,
                icons.git,
                icons.figma,
                icons.postman,
                icons.solidity,
                icons.ethereum,
              ].map((icon, index) => (
                <div
                  className='pt-6 lg:pt-0 flex justify-center'
                  key={`image ${index}`}
                >
                  <Tooltip tooltipText={icon.name}>
                    <Image
                      src={icon.path}
                      key={index}
                      objectFit='contain'
                      width={50}
                      height={50}
                      alt='social'
                      className={`cursor-pointer ${
                        theme === 'light' &&
                        (icon === icons.nextjs ||
                          icon === icons.express ||
                          icon === icons.solidity)
                          ? 'filter invert'
                          : undefined
                      }`}
                    />
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
