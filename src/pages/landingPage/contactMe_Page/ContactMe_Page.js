import { TEXT } from "../../../textContent/content";
import { ContactMe_Page_Body } from "./ContactMe_Page_Styles";

export function Contact_Me() {
  return (
    <ContactMe_Page_Body>
      <div className="contactMe-body">
        <div className="contactMe-container">
          <h1>{TEXT.CONTACT_ME_TEXT.TITLE}</h1>
          <div className="contactMe-container-text">
            <p>
              Email: <span>{TEXT.CONTACT_ME_TEXT.EMAIL}</span>
            </p>
            <p>{TEXT.CONTACT_ME_TEXT.CV}</p>
          </div>
        </div>
      </div>
    </ContactMe_Page_Body>
  );
}
