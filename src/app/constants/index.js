import IconAPI from "@/components/icons/api";
import IconDatabase from "@/components/icons/db";
import IconExternal from "@/components/icons/external";
import IconMobileDevelopment from "@/components/icons/mobile";
import IconQRCode from "@/components/icons/qrcode";
import IconTesting from "@/components/icons/testing";
import IconWebDevelopment from "@/components/icons/web";

export const navLinks = [
  {
    id: 1,
    name: "About",
    href: "#about",
  },
  {
    id: 2,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 3,
    name: "Award",
    href: "#awards",
  },
  {
    id: 4,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const cards = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
        <IconWebDevelopment />
      </span>
    ),
    title: "Web Development",
    children: (
      <>
        Develop responsive high performance web applications using modern
        frameworks like React, Vue for frontend and Node.js, Laravel for backend
      </>
    ),
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
        <IconMobileDevelopment />
      </span>
    ),
    title: "Mobile Application Development",
    children: (
      <>
        Build cross-platform mobile applications using React Native, delivering
        smooth and consistent user experiences on both iOS and Android
      </>
    ),
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
        <IconDatabase />
      </span>
    ),
    title: "Database Management",
    children: (
      <>
        Design, implement, and optimize relational and NoSQL databases to ensure
        data integrity, security, and high performance for web and mobile
        applications.
      </>
    ),
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
        <IconAPI />
      </span>
    ),
    title: "API Development & Integration",
    children: (
      <>
        Develop robust RESTful and GraphQL APIs, and seamlessly integrate
        third-party services to enable efficient communication between frontend
        and backend systems.
      </>
    ),
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600/20">
        <IconTesting />
      </span>
    ),
    title: "Software Testing & Quality Assurance",
    children: (
      <>
        Apply automated and manual testing strategies to ensure software
        reliability, maintainability, and a smooth user experience across
        platforms.
      </>
    ),
  },
];

export const projects = [
  {
    id: 1,
    image: "/portfolio.png",
    title: "My Portfolio",
    description:
      "A modern, responsive portfolio showing my skills, projects as a software developer.",
    languages: ["ThreeJS", "React", "Tailwind CSS", "JavaScript"],
    linkIcon: <IconExternal />,
    url: "https://p-v1-three.vercel.app/",
    githubUrl: "https://github.com/YePhone-Kyaw/p-v2",
  },
  {
    id: 2,
    image: "/z-recipes.png",
    title: "Z Recipes",
    description:
      "A production level platform for people who love to cook, share, and search homemade recipes",
    languages: [
      "React & Vite",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Express.js",
      "Axios",
      "RESTfulAPIs",
    ],
    linkIcon: <IconExternal />,
    url: "https://yephonekyaw.com",
    githubUrl: "https://github.com/YePhone-Kyaw/Z-Recipes",
  },
  {
    id: 3,
    image: "/music-app1.png",
    title: "Muzic",
    description:
      "A sleek cross-platform music player that delivers a smooth listening experience",
    languages: [
      "React Native",
      "Tailwind CSS",
      "TypeScript",
      "Expo",
      "Axios",
      "DeezerAPI",
    ],
    linkIcon: <IconQRCode />,
    url: "/muzic.png",
    githubUrl: "https://github.com/YePhone-Kyaw/music-app",
  },
  {
    id: 4,
    image: "/petcare.png",
    title: "Pet Care",
    description:
      "A pet adoption platform for dog and cat lovers.",
    languages: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Firebase", "Firestore Authentications", "The dog&cat APIs"],
    linkIcon: <IconExternal />,
    url: "https://pet-care-iota-bay.vercel.app/",
    githubUrl: "https://github.com/YePhone-Kyaw/p-v2",
  },
  {
    id: 5,
    image: "/powershift.png",
    title: "PowerShift Scheduler",
    description: "A react scheduler mainly aimed for restaurant scheduling system.",
    languages: [
      "React + Vite",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "RESTful APIs",
    ],
    linkIcon: <IconExternal />,
    githubUrl: "https://github.com/YePhone-Kyaw/React-Scheduler",
  },
];

export const skills = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "TypeScript",
  },
  {
    id: 4,
    name: "HTML",
  },
  {
    id: 5,
    name: "CSS",
  },
  {
    id: 6,
    name: "Python",
  },
  {
    id: 7,
    name: "Java",
  },
  {
    id: 8,
    name: "C#",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/YePhone-Kyaw",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ye-phone-kyaw-george-1161a7223/",
  },
  {
    id: 3,
    name: "Facebook",
    href: "https://www.facebook.com/yair.yint.92798/",
  },
  {
    id: 4,
    name: "Instagram",
    href: "https://www.instagram.com/yair2202/",
  },
  {
    id: 5,
    name: "CodePen",
    href: "https://codepen.io/YePhone-Kyaw-the-flexboxer",
  },
];

export const resume = "./Resume.pdf";

export const email = "yephonekyaw920@gmail.com";
