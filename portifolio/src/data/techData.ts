import type { ElementType } from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiPrisma, SiPostgresql, SiMongodb, SiDocker, SiGit, SiGithub, SiTailwindcss, SiMui, SiFigma, SiJest, SiVite, SiExpo, SiLinux, SiVercel, SiLangchain, SiPython, SiOpenai, SiGooglegemini, SiPhp, SiDjango, SiSpringboot } from "react-icons/si";
import { FaGolang, FaJava } from "react-icons/fa6";
import { BiVector } from "react-icons/bi";

// Categorias suportadas
export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "DevOps"
  | "Testing"
  | "Design"
  | "Tools"
  | "Outros";

export type SkillItem = {
  name: string,
  icon: ElementType,
  color: string,
  bg: string,
  ariaLabel: string
  category: SkillCategory;
};

const gray100 = "#F5F5F5";
const gray200 = "#EEEEEE";

export const skills: SkillItem[] = [
  // Frontend
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    bg: "#0B2C3C",
    ariaLabel: "React",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    bg: gray200,
    ariaLabel: "Next.js",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    bg: "#E3F2FD",
    ariaLabel: "TypeScript",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    bg: "#FFF9C4",
    ariaLabel: "JavaScript",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    bg: "#E0F7FA",
    ariaLabel: "Tailwind CSS",
    category: "Frontend",
  },

  // Backend
  {
    name: "PHP",
    icon: SiPhp,
    color: "#777BB3",
    bg: "#E3F2FD",
    ariaLabel: "PHP",
    category: "Backend",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#0072B5",
    bg: "#E3F2FD",
    ariaLabel: "Java",
    category: "Backend",
  },

  {
    name: "SpringBoot",
    icon: SiSpringboot,
    color: "#6DB33F",
    bg: "#E3F2FD",
    ariaLabel: "SpringBoot",
    category: "Backend",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
    bg: "#E8F5E9",
    ariaLabel: "Node.js",
    category: "Backend",
  },

  // Database
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    bg: "#E3F2FD",
    ariaLabel: "PostgreSQL",
    category: "Database",
  },

  // Mobile
  {
    name: "React Native",
    icon: SiReact,
    color: "#61DAFB",
    bg: "#0B2C3C",
    ariaLabel: "React Native",
    category: "Mobile",
  },
  {
    name: "Expo",
    icon: SiExpo,
    color: "#000000",
    bg: gray200,
    ariaLabel: "Expo",
    category: "Mobile",
  },

  // Design
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    bg: "#FFF3E0",
    ariaLabel: "Figma",
    category: "Design",
  },

  // Tools
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    bg: "#FBE9E7",
    ariaLabel: "Git",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
    bg: gray200,
    ariaLabel: "GitHub",
    category: "Tools",
  },

  // Build
  {
    name: "Vite",
    icon: SiVite,
    color: "#646CFF",
    bg: "#EDE7F6",
    ariaLabel: "Vite",
    category: "Tools",
  },
];