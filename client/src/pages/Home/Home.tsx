import Hero from "../../components/hero/Hero";
import QuickSnapshot from "../../components/QuickSnapshot/QuickSnapshot";
import Trajectory from "../../components/trajectory/Trajectory";
import EngineeringApproach from "../../components/engineeringApproach/EngineeringApproach";
import FeaturedProjects from "../../components/feature/Featuredprojects";
import ContactCTA from "../../components/cta/ContactCTA";
import SectionDivider from "../../components/ui/SectionDivider";

function Home() {
  return (
    <>
      <Hero />

      <SectionDivider />


      <FeaturedProjects />
      
      <SectionDivider />

      <QuickSnapshot />

      <SectionDivider />

      <Trajectory />

      <SectionDivider />

      <EngineeringApproach />

      <SectionDivider />

      <ContactCTA />
    </>
  );
}

export default Home;