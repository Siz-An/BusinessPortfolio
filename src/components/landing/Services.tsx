
import React from "react";
import { motion } from "framer-motion";
import { Code, Paintbrush, Rocket, LineChart, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: <Paintbrush size={40} />,
    title: "UI/UX Design",
    description: "Intuitive interfaces and engaging user experiences that captivate and convert.",
    longDescription: "Our design team creates beautiful, intuitive interfaces with a focus on user experience. We combine aesthetics with functionality to ensure your digital products are both visually appealing and easy to use."
  },
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Robust, scalable websites and applications built with cutting-edge technologies.",
    longDescription: "From simple websites to complex web applications, we deliver scalable, maintainable, and high-performance solutions using the latest technologies and best practices."
  },
  {
    icon: <Rocket size={40} />,
    title: "Digital Marketing",
    description: "Strategic campaigns that increase visibility, engagement, and conversion rates.",
    longDescription: "Our comprehensive digital marketing strategies include SEO, SEM, social media marketing, content marketing, and email campaigns designed to grow your audience and increase conversions."
  },
  {
    icon: <LineChart size={40} />,
    title: "Analytics & Insights",
    description: "Data-driven analysis to optimize performance and guide strategic decisions.",
    longDescription: "We help you understand your audience and business performance through detailed analytics, providing actionable insights that inform your strategic decisions."
  },
  {
    icon: <Globe size={40} />,
    title: "Global Outreach",
    description: "Expand your reach with international marketing and localization strategies.",
    longDescription: "We help businesses expand globally with tailored international marketing strategies, localization services, and cross-cultural business consulting."
  },
  {
    icon: <Shield size={40} />,
    title: "Security Solutions",
    description: "Protect your digital assets with comprehensive security measures.",
    longDescription: "Our security experts implement robust protection for your applications and data, including vulnerability assessments, penetration testing, and secure development practices."
  }
];

const ServiceCard = ({ icon, title, description, longDescription, index }: any) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <motion.div
      className="relative glass-card backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="mb-4 text-blue-500 dark:text-blue-400"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2"
          >
            <p className="text-gray-600 dark:text-gray-300">{longDescription}</p>
          </motion.div>
        )}

        <div className="text-sm text-blue-500 dark:text-blue-400 mt-2">
          {expanded ? "Click to collapse" : "Click to learn more"}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business grow and succeed in the digital landscape.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
