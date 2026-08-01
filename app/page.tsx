import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";

import Achievements from "@/components/achievements/Achievements";
import CoreExpertise from "@/components/expertise/CoreExpertise";
import ProcurementWorkflow from "@/components/workflow/ProcurementWorkflow";
import CaseStudies from "@/components/case-studies/CaseStudies";
import Education from "@/components/education/Education";
import Footer from "@/components/layout/Footer";
import FeaturedProjects from "@/components/projects/FeaturedProjects";

export default function Home() {
  return (
    <>
     

      <main className="relative min-h-screen overflow-x-hidden">
        <Navbar />

        <Hero />

        <About />

        <Experience />

        <Achievements />

        <CoreExpertise />

        <ProcurementWorkflow />

        <FeaturedProjects />

        <CaseStudies />

        <Education />

        <Contact />

        <Footer />
      </main>
    </>
  );
}