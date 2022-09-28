import { HomeButton } from "../components/HomeButton";

export function Creations(props) {
  return (
    <div className="creations-container">
      <h2>{props.title}</h2>
      <div className="creations-container-image">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="creations-container-buttons">
        <HomeButton href={props.github} target="_blank" rel="noreferrer">
          Github
        </HomeButton>
        <HomeButton href={props.github_Pages} target="_blank" rel="noreferrer">
          Visit site
        </HomeButton>
      </div>
      <p>{props.description}</p>
    </div>
  );
}
