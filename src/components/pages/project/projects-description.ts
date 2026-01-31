export type ProjectData = {
  id: number;
  slug: string;
  title: string;
  description: string;

  link: string;
  featured: boolean;
  tags: string[];
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
    tags: [
      "Node.js",
      "React.js",
      "Astro",
      "REST APIs",
      "MongoDB",
      "TypeScript",
      "SOCKET.IO",
      "Web RTC",
      "Cloud(Bunny CDN)",
      
    ],
  },
  {
    id: 2,
    slug: "contest-tracker",
    title: "Contest Tracker",
    description: `
    Project Details (Purpose)
Contest Tracker is a personal and team portfolio for competitive programmers. It brings Codeforces activity into one focused space so you can track progress, compare with teammates, and stay ready for upcoming contests.
Role of the application
Personal hub for Codeforces performance and growth
Team awareness: see who’s active, improving, or leading
Contest readiness: upcoming contests with countdowns
Identity + portfolio: profile with academic info and Codeforces handle
Motivation: visuals and rankings to keep momentum

A Short Story About Contest Tracker
You open the app the way you open Codeforces: to compete. But instead of a blank dashboard, you see the people you practice with, the contests that are about to start, and the numbers that tell your story as a coder. It feels like a team room: who is active, who is climbing, who needs a nudge. Your profile becomes your identity card, your stats become a map, and the upcoming contests become your next checkpoints. It is built for that small but powerful moment between practice and performance.



Key Features

- Secure auth flow with register, login, and OTP-based password reset
- Profile creation with name, username, university, department, and Codeforces link
- Codeforces data aggregation (solved count, rating, contest participation, success rate)
- Dashboard with top performers, highest rated, and most active contestants
- Upcoming contest list with countdowns and formatted times
- Personal stats graph and quick summary cards
- Dark and light mode toggles
- Protected routes for the dashboard and profile

Tech Stack

- Astro (server routes + static output)
- React + React Router (client-only SPA shell)
- Redux Toolkit + redux-persist (auth state)
- Tailwind CSS + shadcn/ui components
- MongoDB + Mongoose (users and profiles)
- JWT authentication
- Nodemailer + OTP flow for password resets
- D3 for stats visualization
- Codeforces API for contests and user stats

App Flow
-  Register or login
-  Create your profile and attach your Codeforces handle
-  View your dashboard with stats, graph, and upcoming contests
-  Explore teammates and compare performance

API Routes (Astro)

Auth
- POST /api/register
- POST /api/login
- POST /api/auth/send-otp
- POST /api/auth/verify-otp

User
- GET /api/userApi/allUser
- GET /api/userApi/[id]
- POST /api/userApi/profileCreate
- GET /api/userApi/codeforces?handle=...
- GET /api/userApi/upComingContest

Project Structure
- -- public/
- -- src/
- +-- components/
- �   �   +-- pages/         # login, register, profile, home
- �   �   +-- ui/            # shared UI primitives
- �   +-- pages/             # Astro pages + API routes
- �   +-- lib/               # DB connection, Codeforces API helpers
- �   +-- model/             # Mongoose schemas
- �   +-- redux/             # auth store and slices
- �   +-- styles/
- +-- astro.config.mjs
- +-- package.json


Environment Variables
Create a .env file (see .env.example) and set:

- MONGODB_URI=...
- JWT_SECRET=...

Email (OTP flow)
- EMAIL_HOST=smtp.gmail.com
- EMAIL_PORT=587
- EMAIL_SECURE=false
- EMAIL_USER=...
- EMAIL_PASSWORD=...
- EMAIL_FROM="Contest Tracker <noreply@yourapp.com>"



Getting Started
- pnpm install
- pnpm dev



Scripts
- pnpm dev - start the dev server
- pnpm build - build to dist/
- pnpm preview - preview production build

Deployment
This project ships well on Netlify, Vercel, or any Node-compatible platform that supports Astro server routes.


`,
      
    link: "https://github.com/Shiddharthapal/Codeforces-Portfolio",
    featured: true,
    highlights: [
      "Cross-platform user profile aggregation",
      "Contest discovery with filters",
      "Clean dashboards for progress tracking",
    ],
    tags: [
      "Node.js",
        "React.js",
        "REST APIs",
        "Astro",
        "External APIs",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
      ],
  },
  {
    id: 3,
    slug: "diu_course_tube",
    title: "DIU Course Tube",
    description:
      `
      DIU Course Tube is a modern, YouTube‑style web app built for creators who want a clean, focused place to publish videos and grow a community.
      
      Purpose
      Make video publishing feel effortless, while keeping ownership and performance in the creator’s hands. Users can register, upload videos with resumable, reliable progress tracking, publish instantly to a fast CDN, and build a channel where viewers can watch, comment, and subscribe.
      At its core, DIU Course Tube plays two roles:
      For creators: it’s a lightweight studio—upload, manage, and showcase your videos without the noise.
      For viewers: it’s a smooth, distraction‑free theater—discover content, watch in high quality, and connect through comments and subscriptions.

      A Short Story About DIU Course Tube
      Imagine a place where videos don’t get buried. Where your upload doesn’t fail at 98%, and your first viewer feels like a real human connection—not a metric. That’s DIU Course Tube.
      It begins with a simple upload screen: pick a file, name your story, and watch the progress bar climb. Behind the scenes, DIU Course Tube talks to Bunny CDN for fast delivery and stores your video metadata in MongoDB—so every upload becomes a living, shareable page. The moment it’s ready, 
      your video has a home: a clean watch page with a subscribe button, a comment thread, and a player that just works.
      Creators get their own dashboard to manage their videos. Viewers get a familiar home feed and an easy way to follow channels they care about. No clutter. No guesswork. Just a platform designed for momentum—so the next upload feels easier than the last.

      DIU Course Tube is built for people who want to build a channel, not a fight with a platform.

      Key features
- User authentication with JWT
- Video uploads via Bunny Stream + TUS resumable uploads
- Public home feed listing all videos
- Creator dashboard and “My Videos” library
- Watch page with embedded Bunny player
- Subscribe/unsubscribe to channels
- Commenting system (supports threaded replies via parentId)


Tech stack
- Frontend: React + TypeScript, React Router, Redux Toolkit, Tailwind CSS
- Backend: Astro API routes
- Storage/Streaming: Bunny Stream (Bunny CDN)
- Database: MongoDB + Mongoose
- Auth: JWT
- Uploads: tus-js-client

Architecture overview
- Astro serves a single React app (src/components/App.tsx) and exposes API routes under src/pages/api.
- Video metadata is stored in MongoDB.
- Videos are created in Bunny Stream and uploaded with TUS to https://video.bunnycdn.com/tusupload.
- Watch pages use Bunny’s iframe embed for playback.

Getting started
Prerequisites

- Node.js 18+ (recommended)
- MongoDB instance
- Bunny Stream account (API key + library ID)


Install
bash

- npm install


Configure environment variables
bash

- cp .env.example .env


Update .env with your values:
- MONGODB_URI=...
- JWT_SECRET=...
- BUNNY_STREAM_API_KEY=...
- BUNNY_STREAM_LIBRARY_ID=...
- BUNNY_STREAM_HOSTNAME=...

Run locally
bash

- npm run dev




Scripts
bash

- npm run dev       # start dev server
- npm run build     # build for production
- npm run preview   # preview the production build
- npm run prettier  # format files

Frontend routes
- / Home feed (all videos)
- /login Login
- /register Register
- /watch_video/:_id Watch page
- /user User dashboard (protected)
- /user/my_videos Creator library (protected)
- /user/upload_videos Upload page (protected)

API routes
- POST /api/register Create a new user
- POST /api/login Authenticate and return JWT
- POST /api/subscribe?userId=... Subscribe/unsubscribe to a channel
- GET /api/video/my_videos List all videos (public)
- GET /api/video/my_videos_user List current user’s videos (auth)
- POST /api/video/upload Initialize Bunny video + return TUS headers (auth)
- GET /api/video/get-video-details?_id=... Fetch video + channel + comments
- POST /api/video/comment Add a comment (auth)

Upload flow
- Client calls POST /api/video/upload with title + file type.
- Server creates a Bunny video entry and returns TUS upload headers.
- Client uploads the file directly to Bunny via TUS.
- Metadata is stored in MongoDB, and the video becomes available for playback.

Data models (MongoDB)
User:

- email, password, name
- subscribes (array of channel IDs)
- subscribeCount

Video:

- title, description, userId
- guid, libraryId, thumbnailUrl, duration, status
- comments (userId, comment, parentId, createdAt)


Project structure

src/
 - components/        React UI + pages
 - layouts/           Astro + app layouts
 - pages/
 -   -api/             Astro API routes
 - lib/               Bunny CDN + DB utilities
 - model/             Mongoose schemas
 - redux/             Redux store and slices
 - styles/            Global styles


Notes
- Authentication state is stored in Redux and persisted for user data and auth status.
- The UploadCard component includes drag-and-drop and client-side validation (size/format) and can be reused if needed.
      `,
    link: "https://drive.google.com/drive/folders/1tpMSZa72x5wwZ4W79UjPbVEgezsRb9Tw?usp=sharing",
    featured: true,
    highlights: [
      "Creator-friendly upload pipeline",
      "Playback with comments and subscriptions",
      "Responsive, media-first UI",
    ],
    tags: ["Node.js","React.js","Astro","TypeScript", "MongoDB","Cloud(BunnyCDN)", "Tailwind CSS"],
  },
];
