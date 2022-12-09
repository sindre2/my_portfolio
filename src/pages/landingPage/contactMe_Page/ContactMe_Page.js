import { Trans, useTranslation } from "react-i18next";
import { NORTEXT } from "../../../textContent/content";
import { ContactMe_Page_Body } from "./ContactMe_Page_Styles";

export function Contact_Me() {

  const { t } = useTranslation();
  const contact = "CONTACT_ME_TEXT.";

  return (
    <ContactMe_Page_Body>
      <div className="contactMe-body">
        <div className="contactMe-container">
          <h1>
            <Trans i18nKey={contact + "TITLE"}></Trans>
            {/* {NORTEXT.CONTACT_ME_TEXT.TITLE} */}
            </h1>
          <div className="contactMe-container-text">
            <p>
              Email: <span>{NORTEXT.CONTACT_ME_TEXT.EMAIL}</span>
            </p>
            <p>
              <Trans i18nKey={contact + "CV"}></Trans>
              {/* {NORTEXT.CONTACT_ME_TEXT.CV} */}
            </p>
          </div>
        </div>
      </div>
    </ContactMe_Page_Body>
  );
}
