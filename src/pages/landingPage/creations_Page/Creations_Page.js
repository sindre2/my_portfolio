import { HomeButton } from "../../../components/styledComponents/HomeButton";
import { useTranslation, Trans } from "react-i18next";

export function Creations(props) {
  //if else - for å legge merke til om noen prosjekter ikke har "properties" lenke til github. Eks: Figma prosjekt. Hvis det ikke finnes blir ikke en github-lenke knapp lagt til.
  const creations = "CREATIONS";
  const { t } = useTranslation();

  if (props.github) {
    return (
      <div className="creations-container">
        <h2>{props.title}</h2>
        <div className="creations-container-image">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="creations-container-buttons">
          <div className="creation-button">
            <HomeButton href={props.github} target="_blank" rel="noreferrer">
              <Trans i18nKey={creations + ".BUTTON_GITHUB"}>
                {/* Text will be rendered here, check "i18n.js" in "content". */}
              </Trans>
            </HomeButton>
          </div>
          <div className="creation-button">
            <HomeButton
              href={props.github_Pages}
              target="_blank"
              rel="noreferrer"
            >
              <Trans i18nKey={creations + ".BUTTON_SITE"}>
                {/* Text will be rendered here, check "i18n.js" in "content". */}
              </Trans>
            </HomeButton>
          </div>
        </div>
        <p>{props.description}</p>
      </div>
    );
  } else {
    return (
      <div className="creations-container">
        <h2>{props.title}</h2>
        <div className="creations-container-image">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="creations-container-buttons">
          <HomeButton
            href={props.github_Pages}
            target="_blank"
            rel="noreferrer"
          >
            Prøv siden
          </HomeButton>
        </div>
        <p>{props.description}</p>
      </div>
    );
  }
}
