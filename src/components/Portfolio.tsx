import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Inventory & Sales Management System",
      category: "laravel",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
      description: "Comprehensive inventory management system with real-time stock tracking, sales analytics, and automated reporting features.",
      problem: "Small businesses struggling with manual inventory tracking and sales reporting",
      features: ["Real-time inventory tracking", "Sales analytics dashboard", "Automated low-stock alerts", "Multi-user access control"],
      outcome: "Reduced inventory management time by 60% and improved accuracy of stock levels",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Healthcare Appointment Booking System",
      category: "django",
      tech: ["Django", "Python", "PostgreSQL", "React", "REST API"],
      description: "Patient-centric appointment booking platform with integrated payment processing and medical records management.",
      problem: "Healthcare facilities needed a digital solution to manage patient appointments and reduce no-shows",
      features: ["Online appointment booking", "SMS/Email notifications", "Payment integration", "Patient portal"],
      outcome: "Reduced no-show rates by 40% and improved patient satisfaction scores",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Insurance Claims & Payment Processing",
      category: "spring",
      tech: ["Spring Boot", "Java", "MySQL", "Angular", "Microservices"],
      description: "Enterprise-grade insurance claims processing system with automated workflow and fraud detection.",
      problem: "Insurance company needed to automate claims processing and reduce manual review time",
      features: ["Automated claims processing", "Fraud detection algorithms", "Document management", "Reporting dashboard"],
      outcome: "Reduced claims processing time by 70% and improved fraud detection accuracy",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Real-Time Chat & Collaboration App",
      category: "nodejs",
      tech: ["Node.js", "Socket.io", "Express", "React", "MongoDB"],
      description: "Real-time communication platform with file sharing, video calls, and project collaboration features.",
      problem: "Remote teams needed a unified platform for communication and collaboration",
      features: ["Real-time messaging", "File sharing", "Video conferencing", "Project boards"],
      outcome: "Improved team productivity by 45% and reduced email dependency",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Expense Tracker Mobile App",
      category: "kotlin",
      tech: ["Kotlin", "Android", "Room Database", "Material Design"],
      description: "Personal finance management app with expense categorization, budget tracking, and financial insights.",
      problem: "Users needed a simple way to track expenses and manage personal budgets",
      features: ["Expense categorization", "Budget tracking", "Financial reports", "Offline functionality"],
      outcome: "Helped users reduce unnecessary spending by 30% on average",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Business Intelligence Dashboard",
      category: "analytics",
      tech: ["Power BI", "Python", "Pandas", "Tableau", "SQL Server"],
      description: "Interactive BI dashboard providing comprehensive business insights with predictive analytics capabilities.",
      problem: "Company executives needed real-time visibility into business performance metrics",
      features: ["Interactive dashboards", "Predictive analytics", "Automated reporting", "Mobile optimization"],
      outcome: "Improved decision-making speed by 50% and identified $2M in cost savings opportunities",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "laravel", label: "Laravel" },
    { id: "django", label: "Django" },
    { id: "spring", label: "Spring Boot" },
    { id: "nodejs", label: "Node.js" },
    { id: "kotlin", label: "Kotlin" },
    { id: "analytics", label: "Data Analytics" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of projects across different technologies and domains
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.id)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="professional-card group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button variant="outline-white" size="sm" onClick={() => window.open(project.demoUrl, "_blank")}>
                    <Eye className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline-white" size="sm" onClick={() => window.open(project.codeUrl, "_blank")}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open(project.codeUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more projects or discussing a custom solution?
          </p>
          <Button
            variant="professional"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;