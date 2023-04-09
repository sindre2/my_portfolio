import { useState } from "react";
import "./App.css";
import Provider from "./components/ThemeProvider/ThemeProvider";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { ThemeContext } from "./components/context/ThemeContext";


function App() {
  // Usestate for tracking the value of visualMode and allowing for re-rendering the app when it happens.
  const [visualMode, setVisualMode] = useState(false);
  // Function for toggling on and off what visualMode(light or dark theme) the app is on.
  const toggleVisualMode = () =>
  {
    setVisualMode((current)=> !current);
  }
  console.log("HERE!:", visualMode)

  return (
    <ThemeContext.Provider value={{ visualMode, toggleVisualMode }}>
      <div className="App">
        <Provider>
          <LandingPage visualMode={visualMode} />
        </Provider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
