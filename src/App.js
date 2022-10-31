import "./App.css";
import Provider from "./components/ThemeProvider/ThemeProvider";
import { LandingPage } from "./pages/landingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Provider>
        <LandingPage />
      </Provider>
    </div>
  );
}

export default App;
