import { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import mazharImage from '../assets/images/mazhar.webp'; // Adjust path if needed
import resumeDoc from '../assets/images/mz_resume.doc'; // Import the resume file

function Home() {
  const typingRef = useRef(null); // Reference to the typing element

  useEffect(() => {
    const options = {
      strings: ["", "Web Developer", "Wordpress Developer", "Web Designer"], // Updated strings
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    // Initialize Typed.js
    const typed = new Typed(typingRef.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <section className="home active section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">Hello, my name is <span className="name">Mazhar Ali</span></h3>
            <h3 className="my-profession">
              I'm a <span className="typing" ref={typingRef}></span>
              <span className="typed-cursor" aria-hidden="true">|</span>
            </h3>
            <p>I build high-performing, SEO-friendly WordPress websites and custom plugins tailored to client goals. Expert in WooCommerce, ACF, and theme development.</p>
            <a href={resumeDoc} download="Mazhar_Ali_Resume.doc" className="btn">Download CV</a>
          </div>
          <div className="home-img padd-15">
            <img src={mazharImage} alt="Mazhar Ali" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;