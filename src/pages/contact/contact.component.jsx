import React from "react";
import { ContactContainer, Services, Author } from "./contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <Services>
        Welcome to my E-shop where you can purchase various items to satisfy
        your fashion needs{" "}
      </Services>
      <Author>
        My name is Garrett, nice to see you here.
        <br />I am snack eater, Anime watcher and guy who is learning coding.
        You can get in touch with me on Garrett.grim111@gmail.com{" "}
      </Author>
    </ContactContainer>
  );
};

export default Contact;
