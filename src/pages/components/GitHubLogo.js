import githubLogo from "../../images/GitHub-Mark-64px.png";

export const GitHubLogo = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer"> 
      <img src={githubLogo} alt="github logo" />
    </a>
  );
};
