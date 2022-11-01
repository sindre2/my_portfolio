import linkedInLogo from "../../images/linkedIn.svg";
import { TEXT } from "../../textContent/content";
import { LinkedIn_Styles } from "./LinkedIn_Styles";

export const LinkedIn_Logo = () => {
  const link = TEXT.INFO;
  return (
    <a href={link.LINKEDIN} target="_blank" rel="noreferrer">
      <LinkedIn_Styles src={linkedInLogo} alt={link.LINKEDIN_LOGO_ALT} />
    </a>
  );
};
