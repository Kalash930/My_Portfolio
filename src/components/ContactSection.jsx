import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md shadow-xl transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:kalashverma930555@gmail.com"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    kalashverma930555@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:91 9305550187"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    91 9305550187
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Kanpur, UP</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-start">
                {[ 
                  { icon: Linkedin, href: "https://www.linkedin.com/in/k%C3%A3l%C3%A3sh-v%C3%AArm%C3%A3-487266255/" },
                  { icon: Instagram, href: "https://instagram.com/_mr__perfect___kv" },
                  { icon: Github, href: "https://github.com/kalash930/" }
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    className="p-2 rounded-full hover:bg-primary/20 transition duration-300 transform hover:-translate-y-1"
                  >
                    <Icon className="text-foreground hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="p-8 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md shadow-xl transition-all duration-500 hover:shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              {[
                { label: "Your Name", type: "text", name: "name", placeholder: "Kalash Verma" },
                { label: "Your Email", type: "email", name: "email", placeholder: "you@example.com" },
              ].map((input, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium mb-2">{input.label}</label>
                  <input
                    type={input.type}
                    name={input.name}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition transform focus:scale-[1.02]"
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition transform focus:scale-[1.02]"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-primary text-white font-medium hover:shadow-xl hover:scale-[1.02] transition transform duration-300"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
            Let’s Build Something <span className="text-primary">Amazing</span> Together!
          </h3>
          <p className="text-muted-foreground mb-4">
            I'm always excited to work on meaningful projects. Let’s connect!
          </p>
          <a
            href="#projects"
            className="inline-block mt-2 px-6 py-3 bg-primary text-white rounded-md shadow hover:shadow-lg transition transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};
