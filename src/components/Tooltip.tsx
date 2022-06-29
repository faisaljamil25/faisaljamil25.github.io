import React from 'react';
import { ReactNode } from 'react';

export const Tooltip = ({
  tooltipText,
  children,
}: {
  tooltipText: string;
  children: ReactNode;
}) => {
  const tipRef = React.createRef<HTMLElement>();
  const handleMouseEnter = () => {
    if (!tipRef.current) return;
    tipRef.current.style.opacity = '1';
    tipRef.current.style.marginLeft = '20px';
  };
  const handleMouseLeave = () => {
    if (!tipRef.current) return;
    tipRef.current.style.opacity = '0';
    tipRef.current.style.marginLeft = '10px';
  };
  return (
    <div
      className='relative flex items-center'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        role='tooltip'
        className='z-20 absolute -left-10 mt-28 w-28 transition duration-150 ease-in-out ml-8 shadow-lg bg-white p-2 rounded'
        style={{ opacity: 0 }}
        //@ts-ignore
        ref={tipRef}
      >
        <svg
          className='absolute -top-5 left-12 rotate-90 h-full'
          width='9px'
          height='16px'
          viewBox='0 0 9 16'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <g
            id='Page-1'
            stroke='none'
            strokeWidth={1}
            fill='none'
            fillRule='evenodd'
          >
            <g
              id='Tooltips-'
              transform='translate(-874.000000, -1029.000000)'
              fill='#FFFFFF'
            >
              <g
                id='Group-3-Copy-16'
                transform='translate(850.000000, 975.000000)'
              >
                <g id='Group-2' transform='translate(24.000000, 0.000000)'>
                  <polygon
                    id='Triangle'
                    transform='translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) '
                    points='4.5 57.5 12.5 66.5 -3.5 66.5'
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <p className='text-sm font-bold text-gray-800 text-center'>
          {tooltipText}
        </p>
      </div>
      {children}
    </div>
  );
};
