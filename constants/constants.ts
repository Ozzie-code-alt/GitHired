import { title } from 'process';

export const LEFTNAV_CONSTANTS = [
  {
    title: 'Justin',
    value: '1',
    bgColor: 'bg-[rgba(255,0,247,.3)]',
    borderColor: 'border-[rgba(255,0,246,.8)]',
    textColor: 'text-[#680045]',
    px: 'px-10',
    py: 'py-2'
  },
  {
    title: 'Menu',
    value: '2',
    bgColor: 'bg-[rgba(0,208,255,.1)]',
    borderColor: 'border-[#00eaff]',
    textColor: 'text-[#005f68]',
    px: 'px-10',
    py: 'py-2'
  },
  {
    title: 'Projects',
    value: '3',
    bgColor: 'bg-[rgba(0,255,17,.1)]',
    borderColor: 'border-[#0f1]',
    textColor: 'text-[#005205]',
    px: 'px-10',
    py: 'py-2'
  }
];

export const CHECKBOXES_CONSTANTS = [
  {
    title: 'Next JS',
    value: '1'
  },
  {
    title: 'Astro',
    value: '2'
  },
  {
    title: 'Prisma',
    value: '3'
  },
  {
    title: 'MongoDB',
    value: '4'
  },
  {
    title: 'React',
    value: '5'
  },
  {
    title: 'Tailwind',
    value: '6'
  },
  {
    title: 'Framer',
    value: '7'
  },
  {
    title: 'Wordpress',
    value: '1'
  },
  {
    title: 'Elementor',
    value: '2'
  }
];

export const FOOTER_CONSTANTS = [
  {
    title: 'About'
  },
  {
    title: 'Contact'
  },
  {
    title: 'PDF'
  }
];

export const PROJECTS_CONSTANTS = [
  {
    title: 'JCI Regatta Origanization',
    img: '/Projects/JCI.webp',
    tags: ['Astro', 'Tailwind'],
    value: '2',
    route: 'https://jci-regatta-iloilo-astro.vercel.app/',
    transition: 'Effect2'
  },
  {
    title: 'Apple Iphone 15 Web Clone ',
    img: '/Projects/AppleWebclone.webp',
    tags: ['React', 'GSAP', 'Tailwind'],
    value: '3',
    route: 'https://apple-webclone-beta.vercel.app/',
    transition: 'red-box'
  },
  {
    title: 'PurrfectCompanions',
    img: '/Projects/Purrfect.webp',
    tags: ['Wordpress', 'Elementor'],
    value: '1',
    route: 'https://adopt-a-cat.wordpress.com/',
    transition: 'red-box'
  },
  {
    title: 'Putok Truno Camp',
    img: '/Projects/PutokCamp.webp',
    tags: ['React', 'Tailwind'],
    value: '4',
    route: 'https://starlight-six.vercel.app/',
    transition: 'red-box'
  },
  {
    title: 'Wedding - Promises',
    img: '/Projects/Promises.webp',
    tags: ['NextJs', 'Framer', 'MongoDB'],
    value: '3',
    route: 'https://promises-3.vercel.app/',
    transition: 'red-box'
  },
  {
    title: 'HooBank - Landing Page',
    img: '/Projects/BankApp.webp',
    tags: ['NextJs', 'Framer', 'Tailwind'],
    value: '2',
    route: 'https://blue-horizon-xi.vercel.app/',
    transition: 'red-box'
  },
  {
    title: 'Lakbay',
    img: '/Projects/Lakbay.webp',
    tags: ['React', 'CSS'],
    value: '2',
    route: '/project4',
    transition: 'red-box'
  },
  {
    title: 'Open Bible',
    img: '/Projects/openBible.webp',
    tags: ['HTML', 'CSS', 'JS'],
    value: '3',
    route: 'https://hackathon-website-gilt.vercel.app/',
    transition: 'red-box'
  }
];

export const ProjectData = [
  {
    id: '0',
    title: 'JCI Regatta Organization',
    imgroute1: '/PROJECTASSET/JCI/JCI_1.webp',
    imgroute2: '/PROJECTASSET/JCI/JCI_2.webp',
    imgroute3: '/PROJECTASSET/JCI/JCI_3.webp',
    Heading: ['What is JCI', 'How Did i Make it', 'What i Learned'],
    subHeading: '',
    ContentTitle: '',
    ContentDescription1: [
      "The JCI Regatta Iloilo website provides information about the organization's mission, history, and activities.",
      'I built this website for JCI Regatta Iloilo using Astro for its robust static site generation, Tailwind CSS for efficient and responsive styling, and EmailJS for seamless email integration',
      'Through this project, I learned to effectively use Astro for static site generation, Tailwind CSS for responsive design, and EmailJS for integrating email functionality. '
    ],
    ContentDescription2: [
      ' Established in 2009, JCI Regatta aims to develop leaders through various programs focused on community impact, personal development, and cultural heritage preservation. Key programs include The Outstanding Students of Iloilo Awards, Balangaw (for persons with special needs), and Panublion (cultural affairs).',
      'This combination allowed me to create a dynamic, visually appealing, and functional site that effectively showcases the organizations mission, programs, and achievements.',
      'I enhanced my skills in creating dynamic and engaging websites. This experience also deepened my understanding of building websites for community organizations like JCI Regatta Iloilo.'
    ]
  },
  {
    id: '1',
    title: 'Iphone 15 Web Design',
    imgroute1: '/PROJECTASSET/IPHONE/Iphone1.webp',
    imgroute2: '/PROJECTASSET/IPHONE/Iphone2.webp',
    imgroute3: '/PROJECTASSET/IPHONE/Iphone3.webp',
    Heading: ['What is This Project About ?', 'How Did i Make it', 'What i Learned'],
    subHeading: '',
    ContentTitle: '',
    ContentDescription1: [
      'This project is a clone of the Apple website, designed to replicate its sleek design and user interface. It showcases various Apple products and features a responsive layout, demonstrating web development skills and attention to detail.',
      'I built this project using Next.js for server-side rendering and routing, GSAP for advanced animations and smooth transitions, and Tailwind CSS for responsive and efficient styling',
      'Through this project, I learned to use Next.js for server-side rendering, GSAP for creating smooth animations, and Tailwind CSS for responsive design. '
    ],
    ContentDescription2: [
      'The clone highlights proficiency in modern web technologies and design principles.',
      'This combination allowed me to create a visually appealing and interactive clone of the Apple website. The project demonstrates my ability to use modern web technologies to replicate complex designs and functionalities.',
      'This enhanced my ability to replicate complex web interfaces and improved my skills with modern web development tools.'
    ]
  },
  {
    id: '2',
    title: 'PurfectCompanions',
    imgroute1: '/PROJECTASSET/purrFect/cat1.webp',
    imgroute2: '/PROJECTASSET/purrFect/cat2.webp',
    imgroute3: '/PROJECTASSET/purrFect/cat3.webp',
    Heading: ['What is This Project About ?', 'How Did i Make it', 'What i Learned'],
    subHeading: '',
    ContentTitle: '',
    ContentDescription1: [
      'This project focuses on rescuing cats, rehabilitating them, and finding them loving homes. It emphasizes responsible pet ownership and community education while showcasing cats available for adoption. ',
      'I created this project using WordPress. It focuses on rescuing, rehabilitating, and rehoming cats, while promoting responsible pet ownership.',
      'From creating this project using WordPress, I learned how to effectively design and manage a website. '
    ],
    ContentDescription2: [
      'Their blog highlights the joys and benefits of adopting a cat.',
      'The blog highlights the benefits of adopting a cat and features cats ready for adoption.',
      'I gained skills in community engagement and education about pet adoption. Additionally, I improved my ability to showcase and promote the adoption of cats through engaging blog content.'
    ]
  },
  {
    id: '3',
    title: 'Putok Truno Camp Area',
    imgroute1: '/PROJECTASSET/camp/camp1.webp',
    imgroute2: '/PROJECTASSET/camp/camp2.webp',
    imgroute3: '/PROJECTASSET/camp/camp3.webp',
    Heading: ['What is This Project About ?', 'How Did i Make it', 'What i Learned'],
    subHeading: '',
    ContentTitle: '',
    ContentDescription1: [
      'The "Starlight Six" website is designed to enhance adventure travel experiences around the world.',
      'I created the website using Next.js and Framer Motion for the front end.',
      'From creating this website, I learned how to leverage Next.js and Framer Motion for building dynamic and interactive front-end applications.'
    ],
    ContentDescription2: [
      'It offers offline maps, augmented reality guides, and adventure scheduling through a mobile app. This platform helps travelers find and navigate new destinations, even without an internet connection.',
      'This combination enabled me to build an interactive and visually appealing platform.',
      'Additionally, I improved my ability to create a seamless and engaging user experience for travelers.'
    ]
  }
];
