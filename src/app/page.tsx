import { GitHubActivitySection } from "@/components/github-activity-section";
import { HeroSection } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { TechStackSection } from "@/components/tech-stack";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { WorkExperienceSection } from "@/components/work-section";
import { AcademicExperienceSection } from "@/components/academic-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator className="my-12 md:my-24" />
      <TechStackSection />
      <Separator className="my-12 md:my-24" />
      <WorkExperienceSection />
      <Separator className="my-12 md:my-24" />
      <ProjectsSection />
      <Separator className="my-12 md:my-24" />
      <AcademicExperienceSection />
      <Separator className="my-12 md:my-24" />
      <GitHubActivitySection />
      <Separator className="my-12 md:my-24" />
      <ContactSection />
      <Footer />
    </>
  );
}
