import { LinkedIn_Logo } from "../LinkedIn_Logo/LinkedIn_Logo";
import { Github_Logo } from "../Github_Logo/Github_Logo";
import { Social_Icons_Styles } from "./Social_Icons_Styles";

export const Social_Icons = () => {
  return (
    <Social_Icons_Styles>
        <div className="social-icons">
            <Github_Logo />
            <LinkedIn_Logo />
        </div>
    </Social_Icons_Styles>
  );
};
