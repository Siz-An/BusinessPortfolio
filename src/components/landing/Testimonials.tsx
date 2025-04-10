
import React from "react";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emma Johnson",
    role: "Marketing Director, TechCorp",
    content: "Working with this team transformed our digital presence completely. Their attention to detail and strategic approach delivered results that exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    role: "CEO, Startup Innovations",
    content: "As a startup, we needed a partner who understood our vision and could bring it to life quickly. They delivered a stunning website that perfectly captures our brand identity.",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    name: "Sophia Williams",
    role: "Product Manager, FinTech Solutions",
    content: "The team's expertise in both design and development created a seamless experience for our users. Our conversion rates have increased by 40% since launch.",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "Daniel Brown",
    role: "CTO, Health Innovations",
    content: "Their technical prowess is unmatched. They built a complex application with intuitive UX that our customers love. Looking forward to our next project together.",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Olivia Martinez",
    role: "E-commerce Director, Retail Group",
    content: "Our online sales have doubled since implementing the new platform. The team was responsive, professional, and delivered exactly what we needed.",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <motion.div 
      className="h-full flex flex-col backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex-grow">
        <Quote className="text-blue-400 mb-4 h-8 w-8" />
        <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.content}"</p>
      </div>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>
        
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-full">
                <div className="h-full p-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative inset-auto" />
            <CarouselNext className="relative inset-auto" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
