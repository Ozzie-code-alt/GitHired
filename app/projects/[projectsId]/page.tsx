import { ProjectData } from '@/constants/constants';
import { ProjectParallaxContent } from '@/components/ProjectContent';
export default function Projects({ params }: { params: { projectsId: string } }) {
  const { projectsId } = params;
  const project = ProjectData.find((value) => value.id === projectsId);

  return (
    <div className='overflow-y-auto'>
      <ProjectParallaxContent projectData={project} />
    </div>
  );
}
