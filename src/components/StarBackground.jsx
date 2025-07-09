import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 3 + 2,
    }));

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3,
    }));

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Stars */}
      {stars.map((star) => (
        <div
  key={star.id}
  className="absolute rounded-full bg-white animate-pulse-subtle"
  style={{
    width: `${star.size}px`,
    height: `${star.size}px`,
    left: `${star.x}%`,
    top: `${star.y}%`,
    opacity: star.opacity,
    animationDuration: `${star.animationDuration}s`,
  }}
/>
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
       <div
  key={meteor.id}
  className="absolute bg-gradient-to-r from-white to-transparent animate-meteor"
  style={{
    width: meteor.size * 50 + "px",
    height: meteor.size * 2 + "px",
    left: meteor.x + "%",
    top: meteor.y + "%",
    animationDelay: meteor.delay + "s",
    animationDuration: meteor.animationDuration + "s",
  }}
/>
      ))}
    </div>
  );
};
