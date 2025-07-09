import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const headingRefs = useRef([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let tl = gsap.timeline({
      onComplete: () => {
        // Slide up loader after count
        gsap.to(loaderRef.current, {
          y: "-100%",
          duration: 1.5,
          ease: "power4.inOut",
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    // Count animation
    gsap.to({}, {
      duration: 1.5,
      onUpdate: function () {
        const progress = Math.floor(this.progress() * 100);
        setCount(progress);
      },
      onComplete: function () {
        setCount(100);
        tl.play();
      },
    });

    tl.pause();

    // Animate headings one by one
    gsap.from(headingRefs.current, {
      opacity: 0,
      y: 50,
      duration: 0.45,
      stagger: 0.2,
      ease: "",
      delay: 0.2,
    });
    gsap.to(headingRefs.current, {
      opacity: 0.65,
      y: 0,
      duration: 0.45,
      stagger: 0.2,
      ease: "",
      delay: 0.2,
    });

  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="min-h-screen bg-zinc-300 text-black flex flex-col justify-center items-start px-6 md:px-24 gap-4"
    >
      {/* Count */}
      <p className="text-3xl font-semibold italic text-black">
        {count} – 100°
      </p>

      {/* Animated Headings */}
      <div className="leading-none">
        <h1
          ref={(el) => (headingRefs.current[0] = el)}
          className="text-[2.8rem] md:text-[5rem] font-bold italic text-black tracking-tight"
        >
          THANKS
        </h1>
        <h1
          ref={(el) => (headingRefs.current[1] = el)}
          className="text-[2.8rem] md:text-[5rem] font-bold italic text-black tracking-tight"
        >
          FOR VISITING , WEBSITE
        </h1>
        <h1
          ref={(el) => (headingRefs.current[2] = el)}
          className="text-[2.8rem] md:text-[5rem] font-bold italic text-black tracking-tight"
        >
          IS LOADING RIGHT{" "}
          <span className="italic font-thin px-2 text-black animate-blink">NOW</span>
        </h1>
      </div>

      {/* Subtext */}
      <p className="text-gray-700 text-sm mt-8 ml-1">
        Please wait <br /> a few seconds.
      </p>
    </div>
  );
};

export default Loader;
