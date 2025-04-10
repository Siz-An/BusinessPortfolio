
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Paintbrush, Code, Send, ArrowRight } from "lucide-react";

const timelineSteps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discover",
    description: "We start by understanding your business, goals, and target audience.",
    detail: "Our discovery phase involves in-depth consultations, market research, competitor analysis, and user research to form a solid foundation for your project."
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: "Design",
    description: "We create wireframes and design concepts that align with your brand.",
    detail: "Our design process includes wireframing, prototyping, user experience design, visual design, and iterative feedback to ensure your vision comes to life."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Develop",
    description: "We build your solution using modern technologies and best practices.",
    detail: "During development, we follow agile methodologies, conduct regular code reviews, implement rigorous testing, and maintain transparent communication throughout."
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: "Deliver",
    description: "We launch your project and provide ongoing support and maintenance.",
    detail: "After thorough testing and quality assurance, we deploy your project, provide training, offer ongoing maintenance, and gather feedback for continuous improvement."
  }
];

const TimelineStep = ({ step, index }: any) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white">
          {step.icon}
        </div>
        {index < timelineSteps.length - 1 && (
          <div className="absolute top-8 left-16 w-[calc(100%+4rem)] h-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center max-w-xs">{step.description}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-2 max-w-xs">{step.detail}</p>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id="process" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto" ref={containerRef}>
        <motion.div 
          className="text-center mb-16"
          style={{ opacity, scale }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our proven process ensures your project is completed efficiently and meets your goals.
          </p>
        </motion.div>
        
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {timelineSteps.map((step, index) => (
            <TimelineStep key={index} step={step} index={index} />
          ))}
        </div>
        
        {/* Mobile version (vertical timeline) */}
        <div className="md:hidden">
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative mb-12 pl-10">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {step.icon}
              </div>
              
              {index < timelineSteps.length - 1 && (
                <div className="absolute left-4 top-8 w-0.5 h-[calc(100%+2rem)] bg-blue-200 dark:bg-blue-800"></div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{step.detail}</p>
            </div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button 
            className="flex items-center gap-2 px-6 py-3 bg-transparent text-blue-500 dark:text-blue-400 font-medium rounded-lg border border-blue-500 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
