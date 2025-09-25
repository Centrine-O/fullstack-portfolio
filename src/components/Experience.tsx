import React from "react";
import { Calendar, MapPin, Award, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Cybasoft",
      location: "United States (Remote)",
      period: "June 2025 – Present",
      type: "work",
      responsibilities: [
        "Delivered responsive web and backend solutions tailored to individual client needs across different industries",
        "Worked in dynamic project environments, switching between stacks such as React, Django, Flask, and Node.js",
        "Managed RESTful integrations, built database queries, and maintained CMS-based solutions"
      ]
    },
    {
      title: "Data Annotation Specialist – AI Projects",
      company: "Digital Divide Data (DDD)",
      location: "Remote",
      period: "May 2025 – Present",
      type: "work",
      responsibilities: [
        "Created structured, high-quality annotated datasets to support LLM training in health and agriculture",
        "Conducted slot-filling, intent tagging, and evaluation of utterance-level predictions"
      ]
    },
    {
      title: "AI Evaluator",
      company: "Sama Kenya",
      location: "Kenya",
      period: "Sept 2024 – Dec 2024",
      type: "work",
      responsibilities: [
        "Reviewed model-generated content for alignment with instructions and user queries",
        "Participated in feedback cycles to enhance accuracy of vision-language alignment systems"
      ]
    },
    {
      title: "Freelance Web Developer, SEO Copywriter & Content Mentor",
      company: "Remote",
      location: "Remote",
      period: "May 2024 – Sept 2024",
      type: "work",
      responsibilities: [
        "Built and customized websites using WordPress and Wix; optimized page speed and structure",
        "Mentored writers on structuring blog content for readability, tone, and SEO",
        "Set up tracking tools and email integrations for small business clients"
      ]
    },
    {
      title: "Virtual Assistant",
      company: "Echo Tech Innovations",
      location: "Kenya",
      period: "Feb 2021 – May 2024",
      type: "work",
      responsibilities: [
        "Handled email communications, meeting scheduling, and document management for executive support",
        "Updated client websites and coordinated digital engagement activities",
        "Supported CRM entries, internal reports, and content uploads"
      ]
    },
    {
      title: "Monitoring and Evaluation Staff",
      company: "Moja Expressway",
      location: "Kenya",
      period: "Mar 2022 – May 2023",
      type: "work",
      responsibilities: [
        "Collected operational road use data and visualized key metrics in digital dashboards",
        "Contributed to monthly M&E reports used in partner evaluations"
      ]
    },
    {
      title: "Voter Registration Clerk",
      company: "IEBC – Independent Electoral and Boundaries Commission",
      location: "Kenya",
      period: "Jan – Feb 2022 & Oct – Nov 2021",
      type: "work",
      responsibilities: [
        "Facilitated biometric voter registration, entry validation, and system reporting"
      ]
    }
  ];

  const education = [
    {
      title: "Software Engineering Program",
      institution: "Moringa School",
      period: "May 2024 – Jan 2025",
      type: "certification",
      description: "Built and deployed full stack web apps; used Git, API endpoints, and agile principles"
    },
    {
      title: "Virtual Assistant Program",
      institution: "ALX Africa",
      period: "July 2024 – Sept 2024",
      type: "certification",
      description: "Trained in remote work tools, communication, productivity systems, and client management"
    },
    {
      title: "Bachelor of Science in Statistics",
      institution: "University of Nairobi",
      period: "2015 – 2019",
      type: "education",
      description: "Comprehensive study in statistical methods, data analysis, and research methodologies"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through diverse roles in technology, data, and business operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-border" />
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary-foreground rounded-full" />
                    </div>
                    
                    {/* Content */}
                    <div className="professional-card flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-primary font-medium mb-2">
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education & Certifications
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-border" />
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-accent-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className="professional-card flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-foreground">
                          {edu.title}
                        </h4>
                        <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <div className="text-primary font-medium mb-3">
                        {edu.institution}
                      </div>
                      
                      <p className="text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;