import { useState, useEffect } from "react";
import { Menu, X, Moon, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ showStars, setShowStars }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 bg-background",
        isScrolled ? "shadow-md py-3" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-[150px] flex items-center justify-between ">
        {/* Logo */}
        <a
          href="#hero"
          className="text-4xl font-bold flex items-center text-foreground"
        >
          Kalash <span className="text-violet-500 font-medium ml-1">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="hover:text-violet-500 text-xl transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          {/* 🌟 Star Toggle */}
         
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 text-lg font-medium transition-all duration-300",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-violet-500"
            >
              {item.name}
            </a>
          ))}
          <button className="text-gray-800 hover:text-violet-500">
            <Moon size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
