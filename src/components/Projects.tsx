import { projects } from 'data';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const scrollAnimation = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0.4 },
};

const Projects = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <motion.section
      className='projects'
      ref={ref}
      variants={scrollAnimation}
      initial='hidden'
      animate={control}
    >
      <SectionTitle subtitle='Here are some of my best works'>
        Projects
      </SectionTitle>
      <div className='grid grid-cols-1 gap-x-[140px] gap-y-20 pt-10 lg:grid-cols-2 '>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
