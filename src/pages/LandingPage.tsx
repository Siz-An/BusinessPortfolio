
import React from "react";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Projects from "@/components/landing/Projects";
import Timeline from "@/components/landing/Timeline";
import Testimonials from "@/components/landing/Testimonials";
import Stats from "@/components/landing/Stats";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import ContactButton from "@/components/landing/ContactButton";
import Navbar from "@/components/landing/Navbar";
import PageTransition from "@/components/landing/PageTransition";
import { ThemeProvider } from "@/components/landing/ThemeContext";
import { Toaster } from "@/components/ui/sonner";

const LandingPage = () => {
  const [showContactPanel, setShowContactPanel] = React.useState(false);

  return (
    <ThemeProvider>
      <PageTransition>
        <div className="relative overflow-hidden">
          <Toaster position="top-right" />
          <Navbar />
          <Hero />
          <Services />
          <Projects />
          <div id="process">
            <Timeline />
          </div>
          <Testimonials />
          <Stats />
          <Contact />
          <Footer />
          <ContactButton
            showPanel={showContactPanel}
            setShowPanel={setShowContactPanel}
          />
        </div>
      </PageTransition>
    </ThemeProvider>
  );
};

export default LandingPage;
