import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/centrine-profile.jpg";

const Hero = () => {
  console.log("Hero component rendering");
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Professional Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${profileImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-primary/20 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight drop-shadow-lg">
            <span className="block text-foreground">Centrine</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
              Ong'aria
            </span>
          </h1>

          {/* Professional Title */}
          <div className="text-xl sm:text-2xl md:text-3xl text-foreground mb-8 font-medium drop-shadow-md">
            <span className="block sm:inline">Statistician</span>
            <span className="hidden sm:inline mx-2 text-primary">|</span>
            <span className="block sm:inline">Data Analyst</span>
            <span className="hidden sm:inline mx-2 text-primary">|</span>
            <span className="block sm:inline">Full Stack Developer</span>
            <span className="hidden sm:inline mx-2 text-primary">|</span>
            <span className="block sm:inline">AI Evaluator</span>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Transforming data into insights and ideas into digital solutions. 
            Experienced in full-stack development, statistical analysis, and AI evaluation 
            across multiple frameworks and languages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline-white"
              size="xl"
              onClick={() => window.open("/assets/Centrine_Ongaria_CV.pdf", "_blank")}
              className="w-full sm:w-auto"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:centyanita@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/centrine-ongaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/centrine-ongaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;