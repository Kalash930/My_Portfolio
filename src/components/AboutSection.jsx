import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.7, ease: "easeOut" },
  }),
};

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-br from-background to-muted/50 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* 🔥 Avatar with glow + depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] rounded-full p-[6px] bg-gradient-to-tr from-primary to-purple-600 shadow-2xl">
              <img
                src={avatar}
                alt="Kalash Avatar"
                className="rounded-full w-full h-full object-cover object-top border-4 border-background shadow-lg"
              />
              <div className="absolute inset-0 rounded-full animate-pulse ring-4 ring-primary/20"></div>
            </div>
          </motion.div>

          {/* ✨ Text & Highlight Cards */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            >
              Hi, I'm <span className="text-primary">Kalash</span>
              <br />
              <span className="text-muted-foreground text-xl font-medium">
                Passionate Web Developer
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground mb-10 text-base md:text-lg leading-relaxed"
            >
              A B.Tech student and self-driven tech enthusiast who crafts
              beautiful, fast, and responsive web experiences using modern
              frameworks. I enjoy solving real-world problems through innovative
              UI/UX and collaborating with creative minds.
            </motion.p>

            {/* 💡 Feature Cards */}
            <div className="grid grid-cols-1 gap-5">
              {[
                {
                  icon: <Code className="h-6 w-6 text-primary" />,
                  title: "Frontend Developer",
                  desc: "I build pixel-perfect, responsive UIs with React, Tailwind, and Framer Motion.",
                },
                {
                  icon: <User className="h-6 w-6 text-primary" />,
                  title: "Creative Thinker",
                  desc: "I turn clean ideas into elegant designs, keeping interfaces minimal and modern.",
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-primary" />,
                  title: "Team Player",
                  desc: "I work effectively in teams using Git, agile tools, and clean workflows.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ once: true }}
                  className="rounded-xl backdrop-blur-md border border-border bg-card/70 p-6 flex items-start gap-4 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-full">{card.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground text-sm">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
