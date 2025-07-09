import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { PortfolioChatbot } from "../components/PortfolioChatbot";
import { ChatbotWidget } from "../components/ChatbotWidget";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background  text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <PortfolioChatbot/>
        <ChatbotWidget/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
