import type { NextPage } from 'next';
import { RefObject, useRef } from 'react';
import MainLayout from '../layouts/MainLayout';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import SocialLinks from '@/components/SocialLinks';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import About from '@/components/About';

const scrollToRef = (ref: RefObject<HTMLElement>) => {
  if (ref.current) window.scrollTo(0, ref.current.offsetTop);
};

const Home: NextPage = () => {
  const contactRef = useRef<HTMLElement>(null);
  const scrollToContact = () => scrollToRef(contactRef);
  return (
    <MainLayout>
      <Landing scrollToContact={scrollToContact} />
      <About />
      <Skills />
      <Projects />
      <SocialLinks />
      <Contact contactRef={contactRef} />
    </MainLayout>
  );
};

export default Home;
