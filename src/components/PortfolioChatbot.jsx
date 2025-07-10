import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const responses = {
  "What tech stack do you use?":
    "I use React.js, Tailwind CSS, GSAP, and Framer Motion for frontend. Backend skills include Node.js, Express, and MongoDB.",

  "Tell me about your latest project.":
    "My latest project is MovieFlow – a React-based movie browsing app with Redux and responsive design.",

  "Do you have experience with React?":
    "Yes, I’ve built multiple projects using React including routing, state management, and component design.",

  "Are you open to internships?":
    "Absolutely! I'm actively looking for frontend development internship opportunities.",

  "Where can I see your GitHub?":
    "You can view my projects at 👉 github.com/Kalash930",

  "What inspired you to become a developer?":
    "I’ve always been fascinated by how websites work. Turning ideas into interactive apps drives my passion!",

  "Do you have experience with animations?":
    "Yes! I use GSAP and Framer Motion to create smooth UI animations and scroll-based effects.",

  "Do you work with APIs?":
    "Yes, I'm confident with REST APIs, and I’ve also started exploring GraphQL for advanced data handling.",

  "How do you manage state in large apps?":
    "I use Redux Toolkit and Context API for scalable state management in React apps.",

  "Can I contact you for freelance work?":
    "Sure! I’m open to exciting freelance projects. Use the Contact section below or reach out via LinkedIn.",

  "What's your biggest strength as a developer?":
    "Problem-solving, clean UI/UX thinking, and attention to detail are my core strengths.",

  "What tools do you use?":
    "I use VS Code, Git/GitHub, Postman, Figma, and sometimes Docker for containerized setups.",

  "Do you follow any coding principles?":
    "Yes, I follow DRY (Don't Repeat Yourself), KISS (Keep It Simple), and write reusable components.",

  "What's your favorite project so far?":
    "MovieFlow is one of my favorites because of its full-stack integration, animations, and UI polish.",

  "What are you currently learning?":
    "I'm currently exploring system design, testing with Jest, and improving backend logic with Node/Express.",
};


export const PortfolioChatbot = () => {
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  const handleQuestion = (question) => {
    setChat((prev) => [...prev, { sender: "user", text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: responses[question] },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const clearChat = () => {
    setChat([]);
    setIsTyping(false);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat, isTyping]);

  return (
    <section id="chatbot" className="bg-background py-16 px-6">
      <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary  ">
            🤖 Ask Me Anything
             <span className="dot-loader ml-1">
    <span className="dot delay-0">.</span>
    <span className="dot delay-1">.</span>
    <span className="dot delay-2">.</span>
  </span>
          </h2>

          {/* 🧹 Clear Chat Button */}
          {chat.length > 0 && (
            <button
              onClick={clearChat}
              className="text-sm text-red-500 border border-red-400 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              Clear Chat
            </button>
          )}
        </div>

        {/* 💬 Chat Area */}
        <div
          ref={chatRef}
          className="space-y-3 mb-6 max-h-72 overflow-y-auto pr-2 scroll-smooth"
        >
          {chat.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`px-4 py-2 rounded-lg  text-sm w-fit ${
                msg.sender === "user"
                  ? "bg-primary text-white ml-auto"
                  : "bg-secondary text-foreground"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}

          {isTyping && (
            <div className="bg-secondary text-foreground px-4 py-2 rounded-lg text-sm w-fit animate-pulse">
              Typing...
            </div>
          )}
        </div>

        {/* 📌 Question Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {Object.keys(responses).map((question, i) => (
            <button
              key={i}
              onClick={() => handleQuestion(question)}
              className="px-4 py-2 text-sm bg-muted hover:bg-primary text-muted-foreground hover:text-white rounded-full transition"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
