import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Code, Database, Brain, TrendingUp } from "lucide-react";

const About = () => {
  const skills = {
    "Frontend Development": [
      "React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Responsive Design"
    ],
    "Backend Development": [
      "Node.js", "PHP", "Python", "Java", "Laravel", "Django", "Spring Boot", "REST APIs"
    ],
    "Databases": [
      "PostgreSQL", "MySQL", "MongoDB", "SQL", "Database Design", "Query Optimization"
    ],
    "Development Tools": [
      "Git", "GitHub", "VS Code", "Postman", "Docker", "Webpack", "Vite", "NPM/Yarn"
    ],
    "Cloud & Deployment": [
      "AWS", "Vercel", "Netlify", "CI/CD", "Linux", "Server Management"
    ],
    "Content Management": [
      "WordPress", "Headless CMS", "Strapi", "Sanity", "Custom CMS Solutions"
    ]
  };

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Excellence",
      description: "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Architecture",
      description: "Building scalable APIs and server-side applications using Node.js, PHP, Python, and Java"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries for PostgreSQL, MySQL, and MongoDB"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Implementing best practices for web performance, SEO, and user experience optimization"
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
            A dedicated full stack developer with expertise in modern web technologies and scalable application development
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
                Dedicated full stack developer with expertise in modern web technologies and a passion for 
                creating scalable, user-friendly applications. I specialize in building end-to-end solutions 
                using React, Node.js, and various backend frameworks.
              </p>
              <p>
                My experience spans frontend development with modern frameworks, backend API development, 
                database design, and deployment strategies. I'm proficient in both SQL and NoSQL databases, 
                cloud services, and modern development workflows.
              </p>
              <p>
                I approach each project with attention to detail, clean code practices, and a focus on 
                performance optimization. I enjoy solving complex problems and collaborating with teams 
                to deliver high-quality web applications that provide excellent user experiences.
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