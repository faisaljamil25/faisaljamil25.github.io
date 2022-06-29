import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import SocialLinks from '@/components/SocialLinks';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Landing />
      <Skills />
      <Projects />
      <SocialLinks />
      <Contact />
    </MainLayout>
  );
};

export default Home;
