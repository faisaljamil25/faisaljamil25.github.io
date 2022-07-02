import React, { useEffect, useState } from 'react';
import { RoughNotationGroup, RoughNotation } from 'react-rough-notation';
import { HIGHLIGHT_COLORS } from '@/lib/colors';
import { useIsFontReady } from '@/hooks/useIsFontReady';
import { shuffleArray } from '@/lib/shuffleArray';

const Landing: React.FC<{ scrollToContact: () => void }> = ({
  scrollToContact,
}) => {
  const isFontReady = useIsFontReady();
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(shuffleArray(HIGHLIGHT_COLORS));
  }, []);

  return (
    <section className='flex items-center justify-center min-h-screen'>
      <RoughNotationGroup show={isFontReady}>
        <div className='mb-48 space-y-3'>
          <h1 className='heading text-4xl lg:text-6xl dark:text-white leading-tight'>
            Hey, I&apos;m{' '}
            <span className='whitespace-nowrap'>
              <RoughNotation
                type='underline'
                padding={[0, 1, -8, 1]}
                strokeWidth={2}
                color={colors[0]}
                animationDuration={800}
              >
                Faisal Jamil
              </RoughNotation>
            </span>
          </h1>
          <h2 className='heading main text-xl text-gray-400 leading-loose'>
            I like making cool stuff
          </h2>
          <p className='max-w-2xl md:text-xl sm:text-lg dark:text-white'>
            I’m a full stack web developer experienced in React, Nextjs,
            Typescript, Nodejs and Express.
          </p>
          <div>
            <button
              className='button mt-5'
              type='button'
              onClick={scrollToContact}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </RoughNotationGroup>
    </section>
  );
};

export default Landing;
