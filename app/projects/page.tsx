import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "Portfolio Website", description: "My personal portfolio site." },
  { title: "E-commerce Store", description: "An online shopping platform." },
];

export default function ProjectsPage() {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-4">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </section>
  );
}
