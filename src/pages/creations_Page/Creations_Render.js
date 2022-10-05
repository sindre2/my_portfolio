import { creationsData } from "./Creations_Data";
import { Creations } from "./Creations_Page";

// Viderefører props inn i Creations siden slik at alle prosjekter blir skrevet ut.
const projects = creationsData.map((project) => {
  return (
    <Creations
      key={project.key}
      title={project.title}
      image={project.image}
      alt={project.alt}
      github={project.github}
      github_Pages={project.github_Pages}
      description={project.description}
    />
  );
});

export const CreationRender = () => {
  return <div className="creations-body">{projects}</div>;
};
