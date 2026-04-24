import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorks from "./components/HowItWorks";
import ImpactSection from "./components/ImpactSection";
import PolicySection from "./components/PolicySection";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <ImpactSection />
        <PolicySection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
