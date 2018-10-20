import React from "react";

import "../../css/ContactCard.css";

const ContactCard = props => {
  const visibility = props.toggle
    ? "contact-card visible"
    : "contact-card hidden";
  return (
    <div className={visibility}>
      <div className="contact-item">hello@lucaseckman.com</div>
      <div className="contact-item">github.com/eckmLJE</div>
      <div className="contact-item">linkedin</div>
    </div>
  );
};

export default ContactCard;
