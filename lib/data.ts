import { Terminal, Code2, Boxes, ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiMysql,
  SiNetlify,
  SiNamecheap,
  SiChakraui,
  SiRender,
  SiSupabase,
  SiPrisma,
  SiDrizzle,
  SiBun,
  SiClerk,
  SiCloudinary,
  SiPaypal,
  SiElasticsearch,
  SiGodaddy,
  SiSanity,
  SiCloudflare,
  SiZoho,
  SiMailchimp,
  SiShadcnui,
  SiTmux,
  SiUpstash,
  SiOpenai,
} from "react-icons/si";

import {
  HeroContent,
  NavItem,
  AboutContent,
  SkillsContent,
  ExperienceContent,
  ContactContent,
  ProjectSection,
  ProjectData,
} from "./types";

export const navigationItems: NavItem[] = [
  {
    name: "About",
    href: "/#about",
    label: "About section",
  },
  {
    name: "Projects",
    href: "/#projects",
    label: "Projects section",
  },
  {
    name: "Skills",
    href: "/#skills",
    label: "Skills section",
  },
  {
    name: "Experience",
    href: "/#experience",
    label: "Experience section",
  },
] as const;

export const heroContent: HeroContent = {
  intro: " EAT • CODE • SLEEP • REPEAT ",
  description:
    "I'm a full Stack Developer who enjoys building things for the web. Whether it's a full website or a specific feature, I create solutions that work well and look good. Discover my portfolio and explore my work.",
  personal: {
    name: "Emediong Udoh",
    nickname: "Emy",
  },
  currentRole: {
    title: "Web Developer",
    filename: "current_role.tsx",
  },
  roles: [
    { icon: Terminal, label: "Software Engineer" },
    { icon: Code2, label: "Frontend Developer" },
    { icon: Boxes, label: "Full Stack Developer" },
    { icon: ArrowRight, label: "Freelancer" },
  ],
  cta: {
    primary: {
      href: "#projects",
    },
    secondary: {
      href: "/resume.pdf",
    },
  },
  social: {
    github: "https://github.com/emediongudoh",
    linkedin: "https://linkedin.com/in/emediongudoh",
  },
};

export const aboutContent: AboutContent = {
  title: "About Me",
  subtitle: "hello",
  terminalInfo: {
    command: "whoami",
    flag: "info",
    content: "Web developer bringing ideas to life",
  },
  image: {
    src: "/images/emediongudoh.jpg",
    alt: "Emediong Udoh",
  },
  description: {
    details: [
      "My name is Emediong and I am a full Stack JavaScript developer with over 4 years of experience.",

      "I've always been passionate about programming and feel lucky to have turned that passion into a career.",

      "While I've learned a lot over the years, I'm always looking for ways to grow and keep improving.",
    ],
  },
  interests: [
    {
      type: "Beyond Coding",
      items: [
        "I love playing chess",
        "Listening to Tech Podcasts",
        "Learning New Technologies",
      ],
    },
    {
      type: "What Drives Me",
      items: [
        "Passion for Programming",
        "Solving complex problems",
        "Need to grow and improve",
      ],
    },
  ],
};

export const skillsContent: SkillsContent = {
  title: "Skills",
  subtitle: "tech stack",
  terminalInfo: {
    command: "skill",
    flag: "list",
    content:
      "Some few technologies and tools I work with to bring ideas to life",
  },
  groups: [
    {
      title: "Core Technologies",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Typescript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Prisma", icon: SiPrisma },
        { name: "Drizzle", icon: SiDrizzle },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Bun", icon: SiBun },
        { name: "Netlify", icon: SiNetlify },
        { name: "Vercel", icon: SiVercel },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "Supabase", icon: SiSupabase },
        { name: "Render", icon: SiRender },
      ],
    },
  ],
};

export const projectsSection: ProjectSection = {
  title: "Projects",
  subtitle: "portfolio",
  terminalInfo: {
    command: "projects",
    flag: "list",
    content: "A collection of my selected works & key projects",
  },
};

export const projectsData: ProjectData[] = [
  {
    id: "project-1",
    title: "GoShop",
    description: "Multi-Vendor Ecommerce Platform.",
    featured: true,
    cover: {
      url: "/projects/goshop.png",
      alt: "GoShop",
    },
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Clerk", icon: SiClerk },
      { name: "Prisma", icon: SiPrisma },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Paypal", icon: SiPaypal },
      { name: "Elasticsearch", icon: SiElasticsearch },
      { name: "Vercel", icon: SiVercel },
    ],
    links: {
      github: "https://github.com/emediongudoh/goshop",
      live: "https://goshop-app.vercel.app/",
    },
    details: {
      challenge:
        "Building a scalable e-commerce platform with real-time inventory management and fast checkout process.",
      solution:
        "Implemented Next.js for optimal performance, MongoDB for flexible data structure, and integrated real-time features.",
      keyFeatures: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Responsive admin dashboard",
        "Advanced search and filtering",
      ],
    },
  },
  {
    id: "project-2",
    title: "Reeb",
    description: "Video Sharing Platform.",
    featured: true,
    cover: {
      url: "/projects/syncbyte.png",
      alt: "Syncbyte",
    },
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Clerk", icon: SiClerk },
      { name: "Prisma", icon: SiPrisma },
      { name: "Mux", icon: SiTmux },
      { name: "Upstash", icon: SiUpstash },
      { name: "Open AI", icon: SiOpenai },
      { name: "Vercel", icon: SiVercel },
    ],
    links: {
      github: "https://github.com/emediongudoh/syncbyte",
      live: "https://syncbyte.vercel.app/",
    },
  },
  {
    id: "project-3",
    title: "Syncbyte",
    description: "Task Management Platform.",
    featured: true,
    cover: {
      url: "/projects/goshop.png",
      alt: "Syncbyte",
    },
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Clerk", icon: SiClerk },
      { name: "Prisma", icon: SiPrisma },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Paypal", icon: SiPaypal },
      { name: "Elasticsearch", icon: SiElasticsearch },
      { name: "Vercel", icon: SiVercel },
    ],
    links: {
      github: "https://github.com/emediongudoh/syncbyte",
      live: "https://syncbyte.vercel.app/",
    },
  },
  {
    id: "project-4",
    title: "GetProsperi",
    description: "Business Management Platform.",
    featured: true,
    cover: {
      url: "/projects/getprosperi.png",
      alt: "GetProsperi",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender },
      { name: "Godaddy", icon: SiGodaddy },
    ],
    links: {
      live: "https://getprosperi.com/",
    },
  },
  {
    id: "project-5",
    title: "CarryCome ",
    description: "P2P Courier Service.",
    featured: true,
    cover: {
      url: "/projects/carrycome.png",
      alt: "CarryCome",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Firebase", icon: SiFirebase },
      { name: "Mailchimp", icon: SiMailchimp },
      { name: "Sanity", icon: SiSanity },
      { name: "Netlify", icon: SiNetlify },
      { name: "Godaddy", icon: SiGodaddy },
    ],
    links: {
      live: "https://carrycometrip.com/",
    },
  },
  {
    id: "project-6",
    title: "Powerlabs",
    description: "Solar Company Website.",
    featured: true,
    cover: {
      url: "/projects/powerlabs.png",
      alt: "Powerlabs",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Sanity", icon: SiSanity },
      { name: "Netlify", icon: SiNetlify },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "Zoho", icon: SiZoho },
    ],
    links: {
      github: "https://github.com/emediongudoh/powerlabsenergy",
      live: "https://powerlabsenergy.com/",
    },
  },
  {
    id: "project-7",
    title: "CEDEN Nigeria",
    description: "Multi-sector investment and export promotion organization.",
    featured: true,
    cover: {
      url: "/projects/cedennaija.png",
      alt: "CEDEN Naija",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Netlify", icon: SiNetlify },
      { name: "Namecheap", icon: SiNamecheap },
    ],
    links: {
      github: "https://github.com/emediongudoh/cedennaija",
      live: "https://cedennaija.netlify.app/",
    },
  },
  {
    id: "project-8",
    title: "Usepays",
    description: "Topup with cash and airtime platform.",
    featured: true,
    cover: {
      url: "/projects/usepays.png",
      alt: "Usepays",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Vercel", icon: SiVercel },
    ],
    links: {
      live: "https://usepays.co/",
    },
  },
  {
    id: "project-9",
    title: "Unizonn",
    description: "Social media platform for students, lecturers, and alumnis.",
    featured: true,
    cover: {
      url: "/projects/unizonn.png",
      alt: "Unizonn",
    },
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Chakra", icon: SiChakraui },
      { name: "Vercel", icon: SiVercel },
    ],
    links: {
      live: "https://www.unizonn.com/",
    },
  },
];

export const experienceData: ExperienceContent = {
  title: "Experience",
  subtitle: "journey",
  terminalInfo: {
    command: "career",
    flag: "experiences",
    content: "Discover my career journey and work experience",
  },
  experiences: [
    {
      id: "exp-1",
      role: "Next.js Developer",
      company: "GoShop",
      companyUrl: "https://goshop-app.vercel.app",
      location: "Uyo, Nigeria",
      type: "Full-time",
      dates: {
        start: "Feb 2025",
        end: "May 2025",
      },
      description: "Multi-vendor Ecommerce platform.",
      achievements: [
        "Worked in modern web technologies (Next.js, Clerk, Prisma).",
        "Developed and maintained the frontend of GoShop's web-based platform, ensuring a smooth and intuitive user experience.",
        "Collaborated with cross-functional teams, including designers, and backend engineers, to implement new features and functionality.",
        "Contributed to the development of GoShop's design system, including defining and documenting practices for reusable UI components.",
        "Developed robust product pages with variant management, live watcher counts, and customizable shipping details by country.",
        "Implemented advanced features like seller-specific shipping fees, quantity-based shipping rates, and weight-based calculations.",
        "Learned to manage global settings like categories, offers, and admin-level store approvals.",
        "Designed and implemented user-friendly admin, seller, and store dashboards for seamless management.",
      ],
    },
    {
      id: "exp-2",
      role: "Lead Developer",
      company: "GetProsperi",
      companyUrl: "https://getprosperi.com",
      location: "Capetown, South Africa",
      type: "Full-time",
      dates: {
        start: "Oct 2024",
        end: "Jan 2025",
      },
      description:
        "As the lead developer, I understood the company's requirements and executed a plan to develop and design  the frontend UI, backend setup with database, and APIs.",
      achievements: [
        "Worked closely with a Senior Developer and contributed to the smooth backend migration from Firebase to Supabase by duplicating user data and syncing systems with zero user disruption.",
        "Delivered training in Supabase, and Firebase to Junior Developers.",
        "High involvement with Product Manager from product design, to performance iterations.",
        "Built a REST-based Financial Services API (https://api.getprosperi.com/api-docs/#/) and managed API deployment on render and domain configuration on BlueHost.",
        "Managed web deployment on Netlify and domain configurations on BlueHost.",
      ],
    },
    {
      id: "exp-3",
      role: "Full Stack Developer",
      company: "CarryCome",
      companyUrl: "https://carrycometrip.com/",
      location: "Capetown, South Africa",
      type: "Full-time",
      dates: {
        start: "Aug 2024",
        end: "Oct 2024",
      },
      description:
        "I strategically developed both frontend and backend components, collaborated closely with the Product Manager and UI/UX Designer to deliver complete features from start to finish.",
      achievements: [
        "Developed both backend (Firebase) and frontend (React) components.",
        "Collaborated closely with the Product Manager, UI/UX Designer and a Senior Mobile Developer to deliver complete features from start to finish.",
        "Maintained a balance between writing robust, tested code and quickly iterating to meet deadlines.",
        "Handled Mailchimp newsletter subscription for the prelaunch using a Netlify function (https://prelaunch.carrycometrip.com)",
        "Wrote a bunch of Firebase functions to send welcome emails, broadcast notifications, fetch existing users from Firebase and sync them to Mailchimp for newsletter subscription.",
        "Wrote and deployed Firebase functions to handle in-app notifications for the mobile apps.",
        "Managed web deployment on Netlify and domain configurations on GoDaddy.",
      ],
    },
    {
      id: "exp-4",
      role: "Frontend Developer",
      company: "Powerlabs",
      companyUrl: "https://powerlabsenergy.com",
      location: "Uyo, Nigeria",
      type: "Freelance",
      dates: {
        start: "Jul 2024",
        end: "Aug 2025",
      },
      description: "Solar company website.",
      achievements: [
        "Worked with modern web technologies (React.js, TypeScript, and TailwindCSS for styling) to build the solar company website.",
        "Closely communicated with the Clients, and Designers.",
        "Integrated data fetching from Sanity CMS.",
        "Managed web deployment on Netlify and domain configurations on Cloudflare.",
      ],
    },
    {
      id: "exp-5",
      role: "Frontend Developer",
      company: "CEDEN Nigeria",
      companyUrl: "https://cedennaija.netlify.app/",
      location: "Lagos, Nigeria",
      type: "Freelance",
      dates: {
        start: "May 2024",
        end: "",
      },
      description: "Multi-sector investment and export promotion organization.",
      achievements: [
        "Built the user-facing site for a multi-sector investment organization from scratch using React, and TailwindCSS for styling.",
        "Managed web deployment on Netlify and domain configurations on Namecheap.",
      ],
    },
    {
      id: "exp-6",
      role: "Frontend Developer",
      company: "Usepays",
      companyUrl: "https://usepays.co/",
      location: "Lagos, Nigeria",
      type: "Full-time",
      dates: {
        start: "Apr 2024",
        end: "Jun 2024",
      },
      description: "Top-up with cash and airtime platform.",
      achievements: [
        "Developed a top-up with cash and airtime platform with authentication, and payment integration via flutterwave.",
        "Developed and maintained the frontend part.",
        "Worked closely with the Node.js backend engineers to integrate voucher recharge, and payment related APIs. The voucher platform was built using React.",
        "Worked closely with the Product Manager and the Lead Frontend Developer to deliver features end-to-end.",
        "Actively participated in code reviews and better code quality.",
        "Balanced the need for tested and resilient code against the need to move fast and iterate.",
      ],
    },
  ],
};

export const contactData: ContactContent = {
  title: "Get in Touch",
  subtitle: "connect",
  terminalInfo: {
    command: "contact",
    flag: "send",
    content: "Let's collaborate on something amazing",
  },
  description:
    "Have a project in mind or want to discuss opportunities? Feel free to reach out!",
  email: "emediong5135@gmail.com",
  socials: {
    github: "https://github.com/emediongudoh",
    linkedin: "https://linkedin.com/in/emediongudoh",
    twitter: "https://twitter.com/emediong5135",
  },
};
