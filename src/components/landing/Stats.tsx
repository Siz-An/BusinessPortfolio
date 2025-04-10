
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Globe, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    value: 120,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: 15,
    label: "Countries Served",
    suffix: "+",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: 99.9,
    label: "Uptime Guarantee",
    suffix: "%",
    decimals: 1,
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 25,
    label: "Industry Awards",
    suffix: "+",
  },
];

const CountUp = ({ value, duration = 2, decimals = 0, suffix = "" }: any) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const multiplier = Math.pow(10, decimals);
    
    const incrementTime = (duration * 1000) / end;
    
    let timer: ReturnType<typeof setTimeout>;
    
    const updateCount = () => {
      start += 1;
      const progress = Math.min(start / end, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * end * multiplier) / multiplier;
      
      setCount(currentCount);
      
      if (progress < 1) {
        timer = setTimeout(updateCount, incrementTime);
      }
    };
    
    updateCount();
    
    return () => clearTimeout(timer);
  }, [isInView, value, duration, decimals]);
  
  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're proud of what we've accomplished with our clients.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center mb-4 text-blue-500 dark:text-blue-400">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
