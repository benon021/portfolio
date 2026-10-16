// All your portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Benon Papa",
  roles: [
    "Software Engineering Student",
    "Full-Stack Web Developer",
    "AI Technology Enthusiast",
  ],
  intro:
    "I'm a third-year Software Engineering student at Zetech University in Kenya. I build practical web applications with React, Next.js, TypeScript, PHP and Supabase.",
  location: "Kenya",
  phone: "+254 729 250 833",
  email: "papsiiseme@gmail.com",
  linkedin: "https://www.linkedin.com/in/benon-seme-a46138380/",
  github: "https://github.com/benon021",
  photo: "/profile.jpg", // put your photo at public/profile.jpg
};

export const about = [
  "I am Benon Papa, a third-year Bachelor of Science in Software Engineering student at Zetech University in Kenya. I am passionate about software development, web technologies, artificial intelligence, database systems, and building practical digital solutions to real-world problems.",
  "My technical interests include frontend and backend development, API integration, database design, responsive user interfaces, software architecture, and AI-powered applications. I enjoy learning new technologies, debugging applications, and turning ideas into working software.",
  "My goal is to grow into a skilled software engineer, contribute to meaningful technology projects, collaborate with experienced developers, and gain practical industry experience.",
];

export const facts = [
  { label: "Name", value: "Benon Papa" },
  { label: "Location", value: "Kenya" },
  { label: "Degree", value: "BSc Software Engineering (Year 3)" },
  { label: "University", value: "Zetech University" },
  { label: "Email", value: "papsiiseme@gmail.com" },
  { label: "Open to", value: "Internships, junior roles, freelance" },
];

export const education = [
  {
    school: "Zetech University",
    detail: "Bachelor of Science in Software Engineering, currently in third year",
  },
  { school: "St. Anthony Boys' High School, Kitale", detail: "Secondary education" },
  { school: "Central Primary School", detail: "Primary education" },
];

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP", "HTML5", "CSS3", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Vite", "Tailwind CSS", "Responsive design"],
  },
  {
    group: "Backend and data",
    items: ["PHP", "Supabase", "REST APIs", "PostgreSQL", "Prisma ORM", "Schema design", "CRUD"],
  },
  {
    group: "Tools",
    items: ["VS Code", "Git", "GitHub", "npm", "Node.js", "XAMPP", "Android Studio", "PowerShell"],
  },
];

export const services = [
  {
    icon: "web",
    title: "Frontend development",
    text: "Responsive, component-based interfaces built with React, Next.js and Tailwind CSS.",
  },
  {
    icon: "server",
    title: "Backend and APIs",
    text: "API integration, authentication concepts and server-side logic with PHP and Supabase.",
  },
  {
    icon: "db",
    title: "Database design",
    text: "Relational schemas, SQL queries and ORM setup using PostgreSQL, MySQL and Prisma.",
  },
  {
    icon: "ai",
    title: "AI-assisted apps",
    text: "Study and productivity tools with AI features, plus AI response evaluation and data annotation work.",
  },
  {
    icon: "test",
    title: "Testing and debugging",
    text: "Troubleshooting, software testing and quality assurance with close attention to detail.",
  },
  {
    icon: "doc",
    title: "Technical writing",
    text: "Clear software documentation and careful work to technical specifications.",
  },
];

export const projects = [
  {
    title: "Mt. Elgon Academy - School Website & Admissions Portal",
    category: "Web",
    featured: true,
    tags: ["React", "Vite", "TypeScript", "Supabase", "Admissions Portal", "CBC Curriculum"],
    text: "Official website and digital admissions portal for Mt. Elgon Academy Primary School in Kitale, Trans Nzoia County, Kenya. Features a comprehensive online admissions workflow, CBC curriculum guide, school bus transit scheduler, notice circulars, and a Supabase-backed administrative CMS.",
    github: "https://github.com/benon021/schoolmanagementsystem",
    live: "https://school-website-six-sable.vercel.app/#admissions",
    admissionsUrl: "https://school-website-six-sable.vercel.app/#admissions",
    highlights: [
      "Online Student Admissions (#admissions): Multi-step application submission, entry grade selection (Playgroup to Grade 8), boarding vs. day scholar options, and required document checklist.",
      "Competency-Based Curriculum (CBC): Core learning pathways across Early Years (PP1–PP2), Primary (Grades 1–6), and Junior Secondary (Grades 7–9).",
      "School Bus Route Logistics: 4 daily corridors covering Kitale Town, Milimani, Saboti, Kiminini, and Endebess with stop-by-stop timings and seat reservation requests.",
      "Boarding & Pastoral Care: Dormitory life overview, wholesome nutrition schedules, round-the-clock infirmary care, and structured routines.",
      "Supabase Cloud CMS: Custom admin dashboard for real-time circular announcements, school info editing, and media bucket storage.",
    ],
  },
  {
    title: "MMax.Stream",
    category: "Web",
    tags: ["React", "JavaScript", "Vite", "CSS", "TMDB API"],
    text: "A movie discovery interface inspired by streaming platforms: hero banner, categorized movie rows, detail modals and API-driven data. Built as a responsive, component-based app with PWA capabilities.",
    github: "https://github.com/benon021/mmax.stream",
    live: "https://mmax-stream.vercel.app/#/movies",
  },
  {
    title: "Lumiaxy AI",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    text: "A study platform for students and teachers: role-based accounts, assignments with documents, text and video links, teacher following, enrollment, notifications, and an AI study coach concept.",
    github: "https://github.com/benon021/lumiaxy.study",
    live: "https://lumiaxy.study",
  },
  {
    title: "Pharmacy Management System and POS",
    category: "Business",
    tags: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    text: "A pharmacy system covering inventory, point of sale, stock, procurement, admin and seller workflows, and laboratory orders and results, with M-Pesa payment and barcode identification concepts.",
  },
  {
    title: "Android Secure Notes",
    category: "Mobile",
    tags: ["Kotlin", "Android Studio", "XML"],
    text: "An Android note-taking app focused on organizing personal notes, built with Kotlin and XML layouts.",
  },
];

export const nav = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/about", label: "About", icon: "user" },
  { to: "/services", label: "Services", icon: "list" },
  { to: "/portfolio", label: "Portfolio", icon: "briefcase" },
  { to: "/contact", label: "Contact", icon: "chat" },
];
