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
    <footer className="footer" style={{ padding: "40px 0", textAlign: "center" }}>
      <h2>Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          maxWidth: "500px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          style={{ padding: "10px" }}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={{ padding: "10px" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          style={{ padding: "10px" }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      <p style={{ marginTop: "20px" }}>
        © {new Date().getFullYear()} Mazhar Ali. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
