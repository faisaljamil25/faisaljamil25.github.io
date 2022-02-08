import React from 'react';

const CardLink = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'a'>) => {
  return (
    <a
      {...props}
      className='hover:underline dark:text-white'
      target='_blank'
      rel='noreferrer noopener'
    >
      {children}
    </a>
  );
};

export default CardLink;
