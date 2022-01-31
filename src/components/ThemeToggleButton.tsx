const ThemeToggleButton = ({
  onClick,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className='p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 dark:focus:ring-gray-500 dark:hover:bg-gray-700'
      {...rest}
    >
      {children}
    </button>
  );
};

export default ThemeToggleButton;
