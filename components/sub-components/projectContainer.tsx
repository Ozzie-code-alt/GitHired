import React from 'react';
import BoxReveal from './animatedBoxtext';
type ProjectContainerProps = {
  title: string;
  description: string;
  link: string;
};
const ProjectContainer = ({ title, description, link }: ProjectContainerProps) => {
  return (
    <section>
      <BoxReveal boxColor={'gray'} duration={0.5}>
        <a href={link} target='_blank'>
          <p className=' font-sans font-bold text-[2rem] cursor-pointer '>
            {title}
            <span className='text-black'>.</span>
          </p>
        </a>
      </BoxReveal>
      <div>
        <BoxReveal boxColor={'gray'} duration={0.5}>
          <p className=' font-sans text-[1rem] ml-5 font-semibold'>
            - {description}
            <span className='text-black'>.</span>
          </p>
        </BoxReveal>
      </div>
    </section>
  );
};

export default ProjectContainer;
