import githubLogo from "../../images/GitHub-Mark-64px.png";
import { TEXT } from "../../textContent/content";
import { Github_Logo_Styles } from "./Github_Logo_Styles";

export const Github_Logo = () => {
  const link = TEXT.INFO;
  return (
    <a href={link.GITHUB} target="_blank" rel="noreferrer">
      <Github_Logo_Styles src={githubLogo} alt={link.GITHUB_LOGO_ALT} />
    </a>
  );
};
