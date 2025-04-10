
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Dummy projects data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with cart functionality, user authentication, and payment processing.",
    fullDescription: "An comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include product management, user authentication, shopping cart, checkout with Stripe, and order management. The platform is fully responsive and optimized for all devices.",
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=2070",
    category: "web",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Interactive dashboard for financial data visualization and analysis.",
    fullDescription: "A comprehensive financial dashboard that helps users track investments, expenses, and income. Built with React and D3.js for data visualization, it features real-time data updates, interactive charts, and a responsive design that works across all devices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    category: "dashboard",
    techStack: ["React", "D3.js", "Firebase", "Tailwind CSS"],
    link: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description: "Mobile application for tracking workouts, nutrition, and personal fitness goals.",
    fullDescription: "A comprehensive fitness tracking mobile application built with React Native. Users can track workouts, set goals, monitor nutrition, and view progress over time. The app includes features like custom workout plans, social sharing, and integration with fitness wearables.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
    category: "mobile",
    techStack: ["React Native", "Redux", "Firebase", "Expo"],
    link: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A social networking platform with real-time messaging and content sharing.",
    fullDescription: "A feature-rich social networking platform that enables users to connect, share content, and communicate in real-time. Built with React, Node.js, Socket.io, and MongoDB, it includes features like user profiles, friend connections, real-time chat, post sharing, and notifications.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974",
    category: "web",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Analytics Tool",
    description: "Advanced analytics platform for business intelligence and data visualization.",
    fullDescription: "A powerful business intelligence tool that helps companies make data-driven decisions. It features customizable dashboards, real-time data visualization, automated reporting, and predictive analytics. Built with React, GraphQL, and AWS services.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    category: "dashboard",
    techStack: ["React", "GraphQL", "AWS", "D3.js"],
    link: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Travel Planning App",
    description: "Mobile application for planning trips, booking accommodations, and exploring destinations.",
    fullDescription: "A comprehensive travel planning application that helps users discover destinations, plan itineraries, book accommodations, and navigate during their trips. The app includes features like personalized recommendations, offline maps, trip sharing, and travel journals.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021",
    category: "mobile",
    techStack: ["React Native", "GraphQL", "Firebase", "Google Maps API"],
    link: "#",
    githubLink: "#"
  }
];

// Available filter categories
const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "dashboard", label: "Dashboards & UI" }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = selectedCategory === "all"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Explore our portfolio of projects spanning various industries and technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <motion.button
                key={category.value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setSelectedCategory(category.value)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech: string) => (
                      <span key={tech} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-white/20 z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </button>
                
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">{selectedProject.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.techStack.map((tech: string) => (
                      <span key={tech} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {selectedProject.fullDescription}
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Visit Project
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
