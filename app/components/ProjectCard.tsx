interface ProjectCardProps {
    title: string;
    description: string;
  }
  
  const ProjectCard = ({ title, description }: ProjectCardProps) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
  
  export default ProjectCard;
  