import React from 'react';
import CardLink from './CardLink';

interface Props {
  imgSrc: string;
  title: string;
  description: string;
  liveLink: string;
  repoLink: string;
}

const ProjectCard: React.FC<Props> = ({
  imgSrc,
  title,
  description,
  liveLink,
  repoLink,
}: Props) => {
  return (
    <div className='flex flex-col w-full'>
      <div
        className='w-full h-[280px] sm:h-[350px] md:h-[250px] xl:h-[350px] bg-cover rounded bg-center '
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <div className='pt-8'>
        <h3 className='text-3xl font-medium dark:text-white'>{title}</h3>
        <p className='pt-2 leading-7 text-subtext'>{description}</p>
      </div>
      <div className='pt-4 mt-auto space-x-4'>
        <CardLink href={liveLink}>Live Project</CardLink>
        <CardLink href={repoLink}>Github Repo</CardLink>
      </div>
    </div>
  );
};

export default ProjectCard;
