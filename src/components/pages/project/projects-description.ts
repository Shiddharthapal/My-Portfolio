export type ProjectData = {
  id: number;
  slug: string;
  title: string;
  description: string;

  link: string;
  featured: boolean;
  highlights?: string[];
};

export const projectData: ProjectData[] = [
  {
    id: 1,
    slug: "medicare-plus",
    title: "MediCare+",
    description: `

  Project Details (Purpose + Role)
MediCare+ is a full‑stack healthcare platform that brings patients, doctors, and administrators into one secure, role‑based system. The purpose is to reduce friction in everyday healthcare: booking appointments, managing prescriptions, sharing reports, and having real‑time doctor‑patient communication.
The application’s role is to act as a trusted digital bridge between care and convenience—patients can manage their entire health journey, doctors can streamline consultations and reports, and admins can keep the system safe, organized, and compliant. It blends core healthcare workflows (appointments, records, prescriptions) with modern services like AI‑assisted diagnosis, report analysis, personalized treatment plans, and health monitoring.

A Short Story About MediCare+
Imagine you’re a patient who just got a new prescription after a long day. Instead of hunting for a pharmacy, you open MediCare+. In minutes you upload your prescription, check your upcoming appointment, and see your entire health record in one place. A reminder pops up—your doctor is available for a quick video follow‑up.
On the other side, the doctor sees your report instantly, reviews AI‑assisted insights, and finalizes a treatment plan. Everything is documented, organized, and ready for the next step. The medication is verified by licensed professionals and scheduled for delivery. No endless calls. No confusion. Just care that moves at your pace.
That’s the world MediCare+ creates: a calm, connected healthcare experience where patients feel supported, doctors feel empowered, and the system feels human again. It’s not just software—it’s a story of trust, speed, and better health, built into every screen.

Features
- Patient, doctor, and admin authentication with JWT
- Role-specific dashboards and profile management
- Appointment booking, rescheduling, and cancellation flows
- Document uploads and retrieval backed by BunnyCDN storage
- Prescriptions and report views
- Real-time chat and WebRTC video rooms using Socket.IO

Tech Stack
- Astro (server output) with React Router
- React 19, Redux Toolkit, Redux Persist
- Tailwind CSS + Radix UI components
- Node/Express + Socket.IO for realtime
- MongoDB + Mongoose
- BunnyCDN storage integration

Project Structure
- src/components: React UI, pages, and layouts
- src/layouts: Astro and React layout shells
- src/pages: Astro entry + API routes
- src/pages/api: REST-style API endpoints
- src/lib: DB connection, BunnyCDN helpers
- src/model: Mongoose schemas
- src/redux: Store and slices
- src/server: Socket.IO server

Getting Started
Prerequisites:
- Node.js 18+
- pnpm

Install dependencies:
- pnpm install

Run the Astro dev server:
- pnpm dev

Run the Socket.IO server (separate process):
- pnpm socket:dev

Environment Variables
Create a .env file based on .env.example. Key values include:
- MONGODB_URI or PUBLIC_MONGODB_URI
- JWT_SECRET or PUBLIC_JWT_SECRET
- BUNNY_STORAGE_ZONE_NAME
- BUNNY_STORAGE_REGION_HOSTNAME
- BUNNY_STORAGE_API_KEY
- SOCKET_HOST
- SOCKET_PORT
- CLIENT_URL
- PUBLIC_SOCKET_URL

Scripts
- pnpm dev: start Astro dev server
- pnpm build: build for production
- pnpm preview: preview the production build
- pnpm socket:dev: run the Socket.IO server

Deployment
The project is configured for Netlify (astro.config.mjs) with server output. Make sure the same environment variables are set in your hosting provider and for the Socket.IO server.

Notes
The app is rendered via src/pages/[...index].astro which mounts the React app and uses React Router for client-side routing.
API routes live under src/pages/api and run on the server.`,
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
    link: "https://drive.google.com/drive/folders/1tpMSZa72x5wwZ4W79UjPbVEgezsRb9Tw?usp=sharing",
    featured: true,
    highlights: [
      "Creator-friendly upload pipeline",
      "Playback with comments and subscriptions",
      "Responsive, media-first UI",
    ],
  },
];
