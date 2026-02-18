import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qhm6zre",
        "template_tmjdawn",
        form.current,
        "Pisns-rLzWpdzU6m5"
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <footer className="footer">
      
    </footer>
  );
}

export default Footer;
