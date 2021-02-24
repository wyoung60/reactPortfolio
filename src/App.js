import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
