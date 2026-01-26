export type ProjectData = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  tags: string[];
  link: string;
  featured: boolean;
  highlights?: string[];
};

export const projects: ProjectData[] = [
  {
    id: 1,
    slug: "medicare-plus",
    title: "MediCare+",
    description:
      "MediCare+ is a modern, responsive, and interactive Medical Center Fullstack web application. This platform is built for ",
    longDescription:
      "MediCare+ is a fullstack medical center platform designed to streamline patient discovery, appointment workflows, and clinic operations. The app focuses on clean UX, fast navigation, and role-based features for patients and staff. It integrates realtime communication and scalable media delivery to keep performance smooth under load.",
    image: "/MediCare+.png",
    alt: "MediCare+",
    tags: [
      "Node.js",
      "React",
      "REST APIs",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Web RTC",
      "Bunny CDN",
      "Astro",
    ],
    link: "https://github.com/Shiddharthapal/MediCare-",
    featured: true,
    highlights: [
      "Role-based dashboards for patients and staff",
      "Appointment scheduling with realtime updates",
      "Media delivery optimized with CDN",
    ],
  },
  {
    id: 2,
    slug: "contest-tracker",
    title: "Contest Tracker",
    description:
      "Contest Tracker is a responsive, and interactive contest tracking Fullstack web application. It's built for users to explore their details that are merge from different platform like codeforces (api available).",
    longDescription:
      "Contest Tracker aggregates contest and user data across competitive programming platforms, with a focus on Codeforces. It provides dashboards, contest discovery, and merged profile insights to help users track progress and plan practice.",
    image: "/ContestTracker.png",
    alt: "Contest Tracker",
    tags: [
      "React",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "Tailwind CSS",
      "Astro",
    ],
    link: "https://github.com/Shiddharthapal/Codeforces-Portfolio",
    featured: true,
    highlights: [
      "Cross-platform user profile aggregation",
      "Contest discovery with filters",
      "Clean dashboards for progress tracking",
    ],
  },
  {
    id: 3,
    slug: "ant-tube",
    title: "Ant-Tube",
    description:
      "A modern video streaming platform featuring video uploads, playback, comments, and user subscriptions. Built with Node.js, React, Astro for seamless performance and engaging user experience.",
    longDescription:
      "Ant-Tube is a video streaming platform that supports uploads, subscriptions, comments, and responsive playback. The project focuses on performance, smooth browsing, and a creator-friendly workflow while keeping the UI lightweight.",
    image: "/image.png",
    alt: "Ant-Tube",
    tags: ["Astro", "React", "Node.js", "TypeScript", "Tailwind CSS"],
    link: "https://drive.google.com/drive/folders/1tpMSZa72x5wwZ4W79UjPbVEgezsRb9Tw?usp=sharing",
    featured: true,
    highlights: [
      "Creator-friendly upload pipeline",
      "Playback with comments and subscriptions",
      "Responsive, media-first UI",
    ],
  },
];
