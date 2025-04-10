
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for the blobs background
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    const blobs: { x: number; y: number; radius: number; speedX: number; speedY: number; color: string }[] = [];
    
    // Create blobs
    for (let i = 0; i < 15; i++) {
      blobs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 100 + 50,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsla(${Math.random() * 360}, 70%, 60%, 0.1)`
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      blobs.forEach(blob => {
        blob.x += blob.speedX;
        blob.y += blob.speedY;
        
        // Bounce off edges
        if (blob.x < 0 || blob.x > width) blob.speedX *= -1;
        if (blob.y < 0 || blob.y > height) blob.speedY *= -1;
        
        // Draw blob
        ctx.beginPath();
        ctx.fillStyle = blob.color;
        ctx.ellipse(blob.x, blob.y, blob.radius, blob.radius * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="glass-card backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              We Design Digital Experiences
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Creative digital agency focused on growing brands through 
            meaningful experiences and innovative solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Button 
              className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Portfolio
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 dark:text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Call
              <Calendar className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
