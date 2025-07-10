import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const paraRef = useRef(null);

  useEffect(() => {
    const el = paraRef.current;
    if (!el) return;

    // Get original paragraph text
    const text = el.textContent;

    // Replace text with span-wrapped characters
    el.innerHTML = text
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="inline-block w-1">&nbsp;</span>`
          : `<span class="inline-block">${char}</span>`
      )
      .join("");

    const spans = el.querySelectorAll("span");

    // Set all letters to invisible and gray initially
    gsap.set(spans, {
      opacity: 0,
      color: "##494949", // Tailwind's text-zinc-800
    });

    // Scroll animation
    gsap.to(spans, {
      opacity: 1,
      color: "#494949", // You can replace with var(--primary-color) if using CSS variable
      duration: 0.3,
      stagger: 0.015,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",      // Only starts when paragraph is mostly in view
        end: "bottom 40%",
        scrub: false,          // No jumpy animation
        toggleActions: "play none none none", // Only plays once
      },
    });

    // Floating animation (optional)
    gsap.to(el, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 text-center"
    >
      <div className="max-w-4xl z-10 space-y-8">
        <h1 className="text-4xl md:text-6xl pt-8 font-bold tracking-tight text-primary">
          <TypeAnimation
            sequence={[
              "I'm Kalash Verma",
              2000,
              "I'm a Web Developer",
              2000,
              "I'm a MERN Expert",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        {/* Scroll-animated paragraph */}
        <p
          ref={paraRef}
          className="text-lg md:text-2xl max-w-5xl italic mx-auto pt-10 font-medium leading-relaxed"
        >
          Versatile Full-Stack Developer passionate about crafting intuitive,
          high-performance web applications with seamless user experiences. From
          pixel-perfect front-end designs to robust back-end architecture, I
          merge creativity with modern technologies to build scalable, secure,
          and impactful digital solutions.
        </p>

        <div className="pt-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
