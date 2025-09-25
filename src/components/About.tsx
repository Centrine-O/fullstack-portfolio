import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Code, Database, Brain, TrendingUp } from "lucide-react";

const About = () => {
  const skills = {
    "Programming & Web Development": [
      "HTML", "CSS", "JavaScript", "React", "PHP", "Node.js", "Python", "Java", "Kotlin"
    ],
    "Frontend Frameworks & CMS": [
      "WordPress", "Wix", "Next.js", "React", "Responsive Design"
    ],
    "Backend & Databases": [
      "PostgreSQL", "MySQL", "MongoDB", "REST APIs", "Laravel", "Django", "Spring Boot"
    ],
    "Data Analysis & Visualization": [
      "Python (Pandas, Matplotlib)", "Excel", "SQL", "R", "Power BI", "Tableau"
    ],
    "AI & Machine Learning": [
      "NLP", "Intent Detection", "Slot Filling", "Prompt Evaluation", "Data Annotation"
    ],
    "Tools & Workflow": [
      "Git", "GitHub", "Postman", "VS Code", "Trello", "Slack", "Jira", "HubSpot", "Figma"
    ]
  };

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Experienced in building responsive web applications using React, Laravel, Django, Spring Boot, and Node.js"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Statistical analysis and visualization using Python, R, SQL, and BI tools like Power BI and Tableau"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "AI model evaluation, data annotation, NLP tasks, and prompt engineering for LLM training"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Statistical Expertise",
      description: "BSc in Statistics with practical experience in data collection, analysis, and reporting"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A versatile professional combining statistical expertise with full-stack development and AI evaluation skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Professional Summary
            </h3>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Versatile and adaptable professional with a background in statistics and hands-on experience 
                across web development, data analysis, AI data annotation, digital content creation, and 
                executive support.
              </p>
              <p>
                I have contributed to AI and data-driven projects, worked with both frontend and backend 
                technologies, managed cross-platform websites, and collaborated on multilingual content, 
                SEO, and campaign tracking.
              </p>
              <p>
                With a foundation in statistical thinking, I approach each role—whether technical, creative, 
                or administrative—with structure, attention to detail, and a strong learning mindset. 
                I thrive in environments that require flexibility, problem-solving, and communication 
                across diverse teams.
              </p>
            </div>

            <Button
              variant="professional"
              size="lg"
              onClick={() => window.open("/assets/Centrine_Ongaria_CV.pdf", "_blank")}
              className="mt-6"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Full CV
            </Button>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Key Expertise
            </h3>
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="professional-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="professional-card">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;