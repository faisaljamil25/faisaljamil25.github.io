import Navbar from '@/components/Navbar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='grid grid-cols-1 px-5 lg:px-28 justify-items-center'>
        <main className='grid items-center grid-cols-1 max-w-[1200px] w-full'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
