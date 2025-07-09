import { useState, useRef, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";

const responses = {
  "What tech stack do you use?":
    "I use React.js, Tailwind CSS, GSAP, and Framer Motion for frontend.",
  "Tell me about your latest project.":
    "MovieFlow is a responsive React app where users can browse trending movies.",
  "Do you work with APIs?": "Yes! I work with REST APIs and GraphQL.",
  "What's your favorite project so far?": "Definitely MovieFlow – it combines great UI, animations, and API integration.",
};

const questions = Object.keys(responses);

export const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef();

  const handleQuestionClick = (question) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: question },
      { sender: "bot", text: responses[question] || "I'll learn that soon!" },
    ]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const clearChat = () => setMessages([]);

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <MessageSquare />}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-20 right-10 w-80 bg-background border border-border rounded-xl shadow-2xl p-4 z-50">
          <h3 className="text-lg font-semibold mb-2">💬 Ask Me Anything!</h3>

          {/* Messages */}
          <div className="max-h-64 overflow-y-auto space-y-2 mb-4 pr-1 scrollbar-thin">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-primary text-white self-end ml-auto text-right"
                    : "bg-muted text-foreground"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Question Suggestions */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {questions.slice(0, 4).map((q, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(q)}
                className="text-xs px-3 py-2 rounded-lg bg-secondary hover:bg-primary hover:text-white transition"
              >
                {q}
              </button>
            ))}
          </div>

          <button
            onClick={clearChat}
            className="text-xs underline text-muted-foreground hover:text-primary"
          >
            Clear chat
          </button>
        </div>
      )}
    </>
  );
};
