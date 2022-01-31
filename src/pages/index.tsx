import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';
import Landing from '@/components/Landing';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Landing />
    </MainLayout>
  );
};

export default Home;
