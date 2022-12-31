import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <p className="subHeading">Like what you see?</p>
      <h2>We'd love to hear from you!</h2>
      <a
        href="mailTo:jenithrajlawat@gmail.com"
        style={{ textDecoration: "none" }}
        className="contactButton"
      >
        GET IN TOUCH <i class="fa fa-envelope" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default Contact;
