import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "MovieFlow Web App",
    description:
      "Movie Flow is a sleek, responsive movie browser built using React.js. Users can explore trending movies, search, and view details.",
    image: "/projects/project-ii.png",
    tags: ["React", "TailwindCSS", "Redux"],
    demoUrl: "https://movie-flow-major-project.vercel.app/",
    githubUrl: "https://github.com/Kalash930/movie-flow-major-project",
  },
  {
    id: 2,
    title: "Refocus Animations",
    description:
      "Beautiful frontend clone of the Refocus site with smooth animations. UI focused with no routing or data fetching.",
    image: "/projects/project-i.png",
    tags: ["React", "Framer-motion", "TailwindCSS"],
    demoUrl: "https://kalash930.github.io/refocus-clone-react/",
    githubUrl: "https://github.com/Kalash930/refocus-clone-react",
  },
  {
    id: 3,
    title: "Obys Inspired Site",
    description:
      "Minimal animated website with GSAP, ScrollTrigger, and custom animations. Clean, modern, scroll-based UI.",
    image: "/projects/project-iii.png",
    tags: ["GSAP", "Javascript", "ScrollTrigger"],
    demoUrl: "#",
    githubUrl: "#",
  },
 
  // Add more if needed
];

export const ProjectsSection = () => {
  const containerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".horizontal-item");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => containerRef.current.scrollWidth - containerRef.current.clientWidth
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-8">
        Featured <span className="text-primary">Projects</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects. Each was carefully crafted with attention to detail and performance.
      </p>

      {/* Horizontal Scroll Projects */}
      <div
       ref={containerRef}
       className="flex space-x-10 px-10 overflow-visible"
      style={{ width: `${projects.length * 100}vw`, height: "100vh" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="horizontal-item flex-shrink-0 w-[70vw] md:w-[40vw] bg-card rounded-xl shadow-md p-6"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-64 overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

            <div className="flex space-x-4">
              <a href={project.demoUrl} target="_blank" className="text-muted-foreground hover:text-primary">
                <ExternalLink size={20} />
              </a>
              <a href={project.githubUrl} target="_blank" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(true)}
          className="cosmic-button flex items-center gap-2 mx-auto"
        >
          View All Projects <ArrowRight size={16} />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-background rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8"
            >
              <button
                onClick={() => setShowAll(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-bold mb-6 text-center">All Projects</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl shadow-md p-4"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.description}
                    </p>
                    <div className="flex space-x-3">
                      <a href={project.demoUrl} target="_blank" className="hover:text-primary">
                        <ExternalLink size={18} />
                      </a>
                      <a href={project.githubUrl} target="_blank" className="hover:text-primary">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
