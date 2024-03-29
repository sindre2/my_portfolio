import { creationsData } from "./Creations_Data";
import { Creations } from "./Creations_Page";
import { Creations_Styles } from "../../../components/styledPages/Creations_Styles";
import { ThemeContext } from "../../../components/context/ThemeContext";
import { useContext } from "react";
// import { useTranslation } from 'react-i18next';

// Viderefører props inn i Creations siden slik at alle prosjekter blir skrevet ut.
// const { t } = useTranslation();

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
      // <Creations
      //   key={project.key}
      //   title={t(project.title)}
      //   image={project.image}
      //   alt={project.alt}
      //   github={project.github}
      //   github_Pages={project.github_Pages}
      //   description={t(project.description)} 
      // />
  );
});

export const CreationRender = () => {
  const visualMode = useContext(ThemeContext);
  return(
  <Creations_Styles visualMode={visualMode.visualMode}>
    <div className="creations-body">{projects}</div>
  </Creations_Styles>
  )
};
