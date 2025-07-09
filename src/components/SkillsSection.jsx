import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const skills = [
  
  // 🌐 Frontend
  {
    name: "HTML",
    level: 95,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
   {
    name: "CSS",
    level: 95,
    category: "frontend",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    level: 90,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Redux Toolkit",
    level: 75,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
   icon: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg",
  },
  {
    name: "Framer Motion",
    level: 80,
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  // 🔧 Backend
  {
    name: "Node.js",
    level: 90,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    level: 80,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    level: 90,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    level: 75,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "GraphQL",
    level: 60,
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "RESTful APIs",
    level: 85,
    category: "api",
    icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
  },

  // 🧑‍💻 Languages (Coding)
  {
    name: "C++",
    level: 85,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Python",
    level: 90,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "SQL",
    level: 70,
    category: "languages",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  // ⚙️ Tools
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    level: 50,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Figma",
    level: 70,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },

  // 🧠 Soft Skills
  { name: "Problem Solving", level: 92, category: "soft-skills" },
  { name: "Team Collaboration", level: 88, category: "soft-skills" },
  { name: "Communication", level: 85, category: "soft-skills" },
  { name: "Time Management", level: 87, category: "soft-skills" },
  { name: "Adaptability", level: 84, category: "soft-skills" },
];

const categories = ["all", "languages","frontend", "backend",  "tools", "soft-skills"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="relative bg-card p-6 rounded-lg shadow-xs card-hover group"
            >
              {/* Floating Icon with Zig-Zag Animation */}
              {skill.icon && (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
    whileInView={{
      opacity: 1,
      rotateY: 360,   
      scale: 3,

      
    }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="absolute -top-[50%] left-[45%]  hidden group-hover:block"
  >
    <img
      src={skill.icon}
      alt={`${skill.name} icon`}
      className="w-10 h-10"
    />
  </motion.div>
)}


              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
