import React from "react";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:centyanita@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/centrine-ongaria",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/centrine-ongaria",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Centrine Ong'aria
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about building scalable web applications 
              and innovative digital solutions with modern technologies.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+254 712 382 443</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Let's Connect
            </h4>
            <p className="text-muted-foreground">
              Ready to discuss your next project? Get in touch!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Centrine Ong'aria. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;