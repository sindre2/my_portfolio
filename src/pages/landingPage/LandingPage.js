import { Navbar } from "../../components/Navbar/Navbar";
import CustomRoutes from "../../components/Routes";
import { Animation } from "../../components/Background/Animation";
import { AnimationStyle } from "../../components/Background/AnimationStyle";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <AnimationStyle>
        <Animation />
      </AnimationStyle>
      <CustomRoutes />
    </>
  );
}
