import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import HomeSection from "./components/HomeSection/HomeSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Projects from "./projects.json";
import SectionHeader from "./components/SectionHeader/SectionHeader";

//Returns page
function App() {
  return (
    <div>
      <NavBar />
      <HomeSection />
      <div className="topper" id="about"></div>
      <SectionHeader title="About Me">
        <AboutSection />
      </SectionHeader>
      <div className="topper" id="projects"></div>
      <SectionHeader title="Projects">
        {Projects.map((project) => (
          <ProjectsSection
            name={project.name}
            img={project.img}
            website={project.website}
            key={project.id}
            github={project.github}
            description={project.description}
          />
        ))}
      </SectionHeader>
      <div className="topper" id="contact"></div>
      <SectionHeader title="Contact">
        <ContactSection />
      </SectionHeader>
    </div>
  );
}

export default App;
