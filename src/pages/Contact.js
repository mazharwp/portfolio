import emailjs from '@emailjs/browser'; // Import EmailJS
import { useEffect } from 'react';
import '../assets/css/style.css'; // Ensure this path is correct

function Contact() {
  useEffect(() => {
    // Initialize EmailJS (optional, can be in index.html too)
    emailjs.init('Pisns-rLzWpdzU6m5'); // Replace with your EmailJS public key
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const result = document.getElementById('cf-result');

    emailjs.sendForm('service_qhm6zre', 'template_tmjdawn', e.target)
      .then((response) => {
        if (result) {
          result.innerHTML = '<span style="color: green;">Message sent successfully!</span>';
          e.target.reset(); // Clear form
        }
      }, (error) => {
        console.error('FAILED...', error);
        if (result) {
          result.innerHTML = '<span style="color: red;">Failed to send message. Try again later.</span>';
        }
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>

        <h3 className="contact-title padd-15">SEND A MESSAGE</h3>
        <h4 className="contact-sub-title padd-15">I RESPOND WITHIN 24 HOURS</h4>
        <form id="ajax-contact-form" onSubmit={handleFormSubmit}>
          <div className="row">
            <div id="cf-result" style={{ marginBottom: '10px' }}></div>
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" name="from_name" placeholder="Name" required />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" name="reply_to" placeholder="Email" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea className="form-control" name="message" placeholder="Your Message" required></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <h3 className="contact-title padd-15">Have a Project or Query?</h3>
        <h4 className="contact-sub-title padd-15">LET’S TALK</h4>
        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-phone"></i></div>
            <h4>Call Me</h4>
            <p>+91 8181810302</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
            <h4>Location</h4>
            <p>Noida, India</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <p>mazharaliwp@gmail.com</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-globe"></i></div>
            <h4>Website</h4>
            <a href="http://mazharali.online/">mazharali.online</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;