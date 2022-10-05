import { TEXT } from "../../textContent/content";

export function Contact_Me() {
  return (
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
  );
}
