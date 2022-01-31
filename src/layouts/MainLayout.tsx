import Navbar from '@/components/Navbar';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
