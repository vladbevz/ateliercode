// app/page.tsx
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import ProjectsShowcase from './components/ProjectsShowcase';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProcessSection />
      <ProjectsShowcase />
    </main>
  );
}