import IconCloud from './sub-components/icon-cloud';
const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma'
];

export function IconCloudDemo() {
  return (
    <div className='relative flex  w-full max-w-[24rem] items-center justify-center overflow-hidden rounded-lg bg-background   '>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
