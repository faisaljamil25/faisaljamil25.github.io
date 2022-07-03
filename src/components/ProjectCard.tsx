import React from 'react';
import CardLink from './CardLink';
import Modal from './Modal';

interface Props {
  imgSrc: string;
  title: string;
  description: string;
  techStack: string;
  liveLink: string;
  repoLink: string;
}

const ProjectCard: React.FC<Props> = ({
  imgSrc,
  title,
  description,
  techStack,
  liveLink,
  repoLink,
}: Props) => {
  const [imageModal, setImageModal] = React.useState<boolean>(false);
  return (
    <>
      <div className='flex flex-col w-full'>
        <div
          className='w-full h-[280px] sm:h-[350px] md:h-[250px] xl:h-[350px] bg-cover rounded bg-center '
          style={{ backgroundImage: `url(${imgSrc})` }}
          onClick={() => setImageModal(true)}
        />
        <div className='pt-8'>
          <h3 className='text-3xl font-medium dark:text-white'>{title}</h3>
          <p className='pt-2 leading-7 text-md text-sky-300'>{techStack}</p>
          <p className='pt-2 leading-7 text-subtext'>{description}</p>
        </div>
        <div className='pt-4 mt-auto space-x-4'>
          <CardLink href={liveLink}>Live Project</CardLink>
          <CardLink href={repoLink}>Github Repo</CardLink>
        </div>
      </div>
      {imageModal && <Modal imgSrc={imgSrc} setImageModal={setImageModal} />}
    </>
  );
};

export default ProjectCard;
