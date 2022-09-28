import { ContactMe_Text } from "./ContactMe_Text";

export function Contact_Me() {
  return (
    <div className="contactMe-body">
      <div className="contactMe-container">
        <h1>{ContactMe_Text.title}</h1>
        <div className="contactMe-container-text">
          <p>Email: {ContactMe_Text.email}</p>
          <p>{ContactMe_Text.cv}</p>
        </div>
      </div>
    </div>
  );
}
