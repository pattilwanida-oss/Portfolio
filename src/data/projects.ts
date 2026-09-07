export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string; // Used in case study
  categories: string[]; // Used for filters
  description: string;
  overview: string;
  role: string[];
  tags: string[];
  features: { title: string; description: string }[];
  challenges: string;
  solutions: string;
  result: string;
  links: {
    demo: string;
    github: string;
  };
  images: {
    hero: string;
    screenshot: string;
    wireframe: string;
    uiDesign: string;
    systemFlow: string;
    finalResult: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'css-files',
    title: 'CSS FILES',
    subtitle: 'Online Multiplayer Mystery Card Game',
    category: 'Web Development / Game Development',
    categories: ['WEB DEVELOPMENT', 'UI/UX'],
    description: 'Developed a web-based multiplayer mystery card game prototype.',
    overview: 'CSS FILES is an interactive web-based multiplayer mystery card game. It was created to explore real-time web technologies and provide an engaging social gaming experience online. The project addresses the lack of easily accessible, browser-based card games that require no installation while offering robust real-time synchronization.',
    role: [
      'Designed user flows and interactive interfaces using Figma',
      'Planned frontend architecture',
      'Designed game-room features'
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    features: [
      { title: 'Real-time Multiplayer', description: 'Synchronized game state across multiple clients seamlessly.' },
      { title: 'Game Rooms', description: 'Create and join private rooms with friends.' },
      { title: 'Interactive UI', description: 'Responsive and intuitive drag-and-drop card mechanics.' }
    ],
    challenges: 'One of the main challenges was managing the real-time game state across multiple clients, ensuring that every action (like drawing or playing a card) was instantly and accurately reflected for all players without race conditions.',
    solutions: 'Implemented a robust state management system paired with WebSockets to handle real-time events. Employed optimistic UI updates to make actions feel instantaneous while resolving the source of truth on the server.',
    result: 'Successfully developed a functional and engaging prototype that handles concurrent players in real-time, demonstrating solid understanding of complex state management and full-stack integration.',
    links: {
      demo: '#', // [INSERT CSS FILES LIVE DEMO URL]
      github: '#', // [INSERT CSS FILES GITHUB URL]
    },
    images: {
      hero: 'CSS FILES - Hero Image Placeholder',
      screenshot: 'CSS FILES - Project Screenshot Placeholder',
      wireframe: 'CSS FILES - Wireframe Placeholder',
      uiDesign: 'CSS FILES - UI Design Placeholder',
      systemFlow: 'CSS FILES - System Flow Placeholder',
      finalResult: 'CSS FILES - Final Result Placeholder',
    }
  },
  {
    id: 'integrated-task-management',
    title: 'Integrated Task Management',
    subtitle: 'Full-Stack To-Do List Application',
    category: 'Full-Stack Web Development',
    categories: ['WEB DEVELOPMENT', 'FULL-STACK'],
    description: 'Developed a full-stack To-Do List web application with login, CRUD operations, dashboard and drag-and-drop task management.',
    overview: 'A comprehensive task management platform designed to help users organize their daily activities efficiently. Created to solve the problem of fragmented workflows, it provides a centralized dashboard for task tracking with intuitive drag-and-drop mechanics.',
    role: [
      'Full-stack development',
      'Database schema design',
      'Authentication implementation',
      'UI/UX implementation'
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      { title: 'Authentication', description: 'Secure user login and registration.' },
      { title: 'CRUD Operations', description: 'Create, read, update, and delete tasks effortlessly.' },
      { title: 'Interactive Dashboard', description: 'Visual overview of pending and completed tasks.' },
      { title: 'Drag & Drop', description: 'Intuitive task reordering and status updates.' }
    ],
    challenges: 'Integrating secure authentication while maintaining a seamless user experience, and building a responsive drag-and-drop interface that works flawlessly across both desktop and mobile devices.',
    solutions: 'Utilized Supabase for robust authentication and PostgreSQL for reliable data storage. Implemented specialized React libraries for accessible and performant drag-and-drop functionality that supports touch devices.',
    result: 'Delivered a polished, production-ready application with protected user data and a smooth, interactive user interface that significantly improves task management efficiency.',
    links: {
      demo: '#', // [INSERT TODO LIST LIVE DEMO URL]
      github: '#', // [INSERT TODO LIST GITHUB URL]
    },
    images: {
      hero: 'Integrated Task Management - Hero Image Placeholder',
      screenshot: 'Integrated Task Management - Project Screenshot Placeholder',
      wireframe: 'Integrated Task Management - Wireframe Placeholder',
      uiDesign: 'Integrated Task Management - UI Design Placeholder',
      systemFlow: 'Integrated Task Management - System Flow Placeholder',
      finalResult: 'Integrated Task Management - Final Result Placeholder',
    }
  }
];
