import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { EcosystemDashboard } from "@/components/EcosystemDashboard";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Journey } from "@/components/Journey";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Feedback } from "@/components/Feedback";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <EcosystemDashboard />
      <Skills />
      <Projects />
      <Education />
      <Journey />
      <Achievements />
      <Certifications />
      <Contact />
      <Feedback />
      <Footer />
    </div>
  );
}
