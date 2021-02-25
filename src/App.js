import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import HomeSection from "./components/HomeSection/HomeSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Projects from "./projects.json";
import SectionHeader from "./components/SectionHeader/SectionHeader";

function App() {
  return (
    <div>
      <NavBar />
      <HomeSection />
      <SectionHeader title="About Me" id="about">
        <AboutSection />
      </SectionHeader>
      <SectionHeader title="Projects" id="projects">
        {Projects.map((project) => (
          <ProjectsSection
            name={project.name}
            img={project.img}
            website={project.website}
            key={project.id}
            github={project.github}
          />
        ))}
      </SectionHeader>
      <SectionHeader title="Contact" id="contact">
        <ContactSection />
      </SectionHeader>
    </div>
  );
}

export default App;
