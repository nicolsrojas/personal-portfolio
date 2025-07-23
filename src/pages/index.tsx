import homeContent from "@/data/home";
import HeroSection from "@/components/sections/Hero";
import TechStackSection from "@/components/sections/TechStack";
import ProjectsSection from "@/components/sections/Projects";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main>
         <HeroSection 
          title={homeContent.hero.title}
          subtitle={homeContent.hero.subtitle}
          button ={homeContent.hero.button}
          />
         <TechStackSection 
          title={homeContent.techStack.title}
          items={homeContent.techStack.items}
        />
        <ProjectsSection 
          title={homeContent.projects.title}
          items={homeContent.projects.items}
        />  
      </main>
    </MainLayout>
  );
}
