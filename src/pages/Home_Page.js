import { HomeButton } from "./components/HomeButton";

export function Home() {
  return (
    <div className="home_body">
      <div className="home_container">
        <h1>Sindre2.Kodehode Front End Developer</h1>
        <div className="home_buttons">
          <HomeButton>About me</HomeButton>
          <HomeButton>Creations</HomeButton>
        </div>
      </div>
    </div>
  );
}
