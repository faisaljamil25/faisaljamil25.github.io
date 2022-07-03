import { projects } from 'data';
import React from 'react';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section>
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
    </section>
  );
};

export default Projects;
