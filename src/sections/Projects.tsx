import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import { projects } from '../data/cv';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work Highlights" title="Projects with real business impact.">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} title={project.title} description={project.description} />
        ))}
      </div>
    </Section>
  );
}
