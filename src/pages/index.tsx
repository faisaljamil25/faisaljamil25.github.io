import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Landing />
      <Projects />
    </MainLayout>
  );
};

export default Home;
