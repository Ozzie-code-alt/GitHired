import { ProjectData } from '@/constants/constants';

export default function Projects({ params }: { params: { projectsId: string } }) {
  const { projectsId } = params;
  const project = ProjectData.find((value) => value.id === projectsId);
  return (
    <>
      {project && (
        <div>
          <p>this is project Data {JSON.stringify(project.title)}</p>
        </div>
      )}
    </>
  );
}
