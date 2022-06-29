import Image from 'next/image';
import React from 'react';
import SectionTitle from './SectionTitle';
import icons from '../socials';
import { useTheme } from 'next-themes';

const Skills = () => {
  const { theme } = useTheme();
  return (
    <section>
      <SectionTitle subtitle='Here are some of my best works.'>
        Skills
      </SectionTitle>
      <div className='px-6 2xl:px-0 w-full flex justify-center items-center py-10 md:py-16 '>
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
                icons.js,
                icons.git,
                icons.figma,
                icons.postman,
                icons.solidity,
                icons.ethereum,
              ].map((image, index) => (
                <div
                  className='pt-6 lg:pt-0 flex justify-center'
                  key={`image ${index}`}
                >
                  <Image
                    src={image}
                    key={index}
                    objectFit='contain'
                    width={50}
                    height={50}
                    alt='social'
                    className={
                      theme === 'dark' &&
                      (image === icons.nextjs ||
                        image === icons.express ||
                        image === icons.solidity)
                        ? 'filter invert'
                        : undefined
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
