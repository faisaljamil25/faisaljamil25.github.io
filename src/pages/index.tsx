import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import SocialLinks from '@/components/SocialLinks';
import Contact from '@/components/Contact';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Landing />
      <Projects />
      <SocialLinks />
      <Contact />
    </MainLayout>
  );
};

export default Home;
