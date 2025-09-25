import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/centrine-profile.jpg";

const Hero = () => {
  console.log("Hero component rendering");
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--primary/5)) 50%, hsl(var(--background)) 100%),
          radial-gradient(circle at 20% 80%, hsl(var(--primary/3)) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(var(--accent/3)) 0%, transparent 50%)
        `
      }}
    >
      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(180deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute top-32 right-20 w-24 h-24 border border-accent/10 rounded-full" />
        <div className="absolute bottom-20 left-32 w-16 h-16 border border-primary/10 rounded-full" />
        <div className="absolute bottom-32 right-32 w-20 h-20 border border-accent/10 rounded-full" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            
            {/* Profile Image - Mobile */}
            <div className="lg:hidden mb-8">
              <div className="relative w-64 h-80 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-1">
                <img 
                  src={profileImage} 
                  alt="Centrine Ong'aria" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">Hi, I'm </span>
              <span className="text-primary">Centrine</span>
            </h1>

            {/* Professional Title */}
            <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-medium leading-relaxed">
              <span className="block">Full Stack Developer | Data Analyst</span>
              <span className="block">& Data Analytics Developer | AI</span>
              <span className="block">Automation Specialist</span>
            </div>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Passionate about creating data-driven solutions and innovative web applications. I transform complex data into actionable insights and build scalable software that makes a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button
                variant="default"
                size="lg"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("/assets/Centrine_Ongaria_CV.pdf", "_blank")}
                className="w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
            
            {/* Contact */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="mailto:centyanita@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                centyanita@gmail.com
              </a>
            </div>
          </div>

          {/* Right side - Profile Image Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-1">
              <img 
                src={profileImage} 
                alt="Centrine Ong'aria" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;