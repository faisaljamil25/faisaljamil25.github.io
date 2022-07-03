import { useTheme } from 'next-themes';
import React from 'react';
import { BsMoon } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';
import { useIsMounted } from '@/hooks/useIsMounted';
import ThemeToggleButton from '@/components/ThemeToggleButton';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <header className=' nav'>
      <nav className='flex items-center justify-between flex-1 max-w-[1920px]'>
        <div>
          <h4 className='text-current text-black no-underline dark:text-white hover:text-current'>
            <span className='font-bold text-2xl'>FJ.</span>
          </h4>
        </div>
        <div>
          {isMounted &&
            (theme === 'light' ? (
              <ThemeToggleButton
                onClick={() => setTheme('dark')}
                aria-label='Dark mode toggle'
              >
                <BsMoon size='1.25rem' />
              </ThemeToggleButton>
            ) : (
              <ThemeToggleButton onClick={() => setTheme('light')}>
                <HiSun
                  size='1.25rem'
                  className='text-white'
                  aria-label='Light mode toggle'
                />
              </ThemeToggleButton>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
