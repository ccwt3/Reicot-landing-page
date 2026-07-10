import HeroSection from './components/HeroSection.jsx';
import CaseSection from './components/CaseSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import FooterSection from './components/FooterSection.jsx';

export default function App() {
  return (
    <main className="site">
      <HeroSection />
      <CaseSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
