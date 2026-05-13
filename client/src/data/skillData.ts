import type { SkillGroup } from "../types/skillType";

const Skills: SkillGroup[] = [
  {
    role: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "GSAP Animation", level: 65 },
      { name: "Responsive Design", level: 90 },
      { name: "Phaser", level: 65 },
    ],
  },
  {
    role: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 75 },
      { name: "REST API", level: 80 },
      { name: "JWT Auth", level: 70 },
    ],
  },
  {
    role: "Real Time",
    skills: [
      { name: "Socket.io", level: 70 },
      { name: "Live Chat Systems", level: 70 },
    ],
  },
  {
    role: "Database",
    skills: [
      { name: "PostgreSQL", level: 65 },
      { name: "SQL", level: 80 },
      { name: "Database Design", level: 60 },
    ],
  },
  {
    role: "Others",
    skills: [
      { name: "Figma", level: 50 },
      { name: "Canvas", level: 55 },
    ],
  },
];

export default Skills;
