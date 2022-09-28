import { AboutMe_text } from "./AboutMe_Text";

export function About_Me(props) {
  console.log(props)
  return (
    <div className="aboutMe-body">
      <div className="aboutMe-container">
        <h1>{AboutMe_text.title}</h1>
        <p>
          {AboutMe_text.text}
        </p>
      </div>
    </div>
  );
}
