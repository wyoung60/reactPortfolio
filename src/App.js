import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import HomeSection from "./components/HomeSection/HomeSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Projects from "./projects.json";
import ProjectsHeader from "./components/ProjectsSection/ProjectsHeader";

function App() {
  return (
    <div>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <ProjectsHeader>
        {Projects.map((project) => (
          <ProjectsSection
            name={project.name}
            img={project.img}
            website={project.website}
            key={project.id}
            github={project.github}
          />
        ))}
      </ProjectsHeader>
      <ContactSection />
    </div>
  );
}

export default App;
