import "../assets/css/resume.css";

import resumeDoc from '../assets/images/mz_resume.doc';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">

        <header className="resume-header">
          <h1>MAZHAR ALI</h1>
          <h2>Software Engineer</h2>
          <p>(Mayur Vihar Phase-1, East-Delhi - 110091)</p>

          <div className="contact-info">
            <p><strong>Mobile :</strong> +91-9643199638</p>
            <p><strong>Email:</strong> mazharaliwp@gmail.com</p>
            <p>
              <strong>Github:</strong>{" "}
              <a href="https://github.com/mazharwp" target="_blank" rel="noopener noreferrer">
                https://github.com/mazharwp
              </a>
            </p>
            <p>
              <strong>Linkedin:</strong>{" "}
              <a href="https://www.linkedin.com/in/mazharaliwp" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/mazharaliwp
              </a>
            </p>
          </div>
        </header>

        <section className="resume-section">
          <h3>Professional Summary:</h3>
          <p>
            Website Developer with 6+ years of experience in front-end and back-end web development. Skilled in WordPress, WooCommerce, custom themes, ACF, and PHP-based dashboards. Expertise in building dynamic, responsive, and user-friendly websites, integrating APIs, and managing eCommerce platforms. Experienced in handling live chat with clients for project discussions and support. Strong team player, adept at collaborating with cross-functional teams to deliver client-focused solutions.
          </p>
        </section>

        <section className="resume-section">
          <h3>Technical Skills:</h3>
          <ul className="check-list">
            <li>Languages: HTML, CSS, JavaScript, PHP</li>
            <li>Frameworks/Libraries: Bootstrap</li>
            <li>CMS & Platforms: WordPress, WooCommerce</li>
            <li>Tools: ACF, cPanel, Git, MySQL</li>
            <li>Expertise: Custom Theme Development, Plugin Integration, Responsive Design, React Component Development</li>
          </ul>
        </section>

        <section className="resume-section">
          <h3>Work Experience:</h3>
          <p><strong>Prologic Web Solutions</strong> - May 2017 - Present</p>
          <p><strong>WordPress Developer</strong></p>
          <ul className="check-list">
            <li>Developed fully responsive, mobile-friendly custom WordPress websites</li>
            <li>Built custom dashboards and user management systems.</li>
            <li>Integrated WooCommerce and created advanced filtering and UI customization</li>
            <li>Cloned and restored websites, and resolved issues related to hacked/broken sites</li>
            <li>Migrated websites manually and dynamically across hosting environments</li>
            <li>Provided real-time client support and updates via live chat platforms</li>
            <li>Communicates directly with clients through live chat for support and project updates</li>
            <li>Strong knowledge of building responsive, user-friendly websites</li>
          </ul>
        </section>

        <section className="resume-section">
          <h3>Project : WordPress:</h3>

          <h4>E-commerce & Online Stores:</h4>
          <ul className="check-list">
            <li>acf-usa.org - WooCommerce-powered site with event booking, recipes, and dynamic news content</li>
            <li>bishopshill.com - Custom WooCommerce store with fully tailored WordPress theme and product catalog.</li>
            <li>events.acf-usa.org - WooCommerce-powered site with event booking</li>
            <li>thehonestxchange.com/demo/ - B2B Jewelry Inventory & Wholesale Platform</li>
          </ul>

          <h4>Real Estate & Property:</h4>
          <ul className="check-list">
            <li>leipersfork.com - Advanced property listing website featuring custom search filters, agent profiles, and dynamic listings.</li>
          </ul>

          <h4>Food & Catering:</h4>
          <ul className="check-list">
            <li>gastonscatering.com - Bespoke catering website showcasing menus, value packages, and service offerings.</li>
            <li>culinaryfuturefoundation.org - Recipe and news-focused WordPress platform.</li>
          </ul>

          <h4>Industrial & Manufacturing:</h4>
          <ul className="check-list">
            <li>dnbending.com - Modern industrial/manufacturing website built on a fully customized WordPress theme, with service highlights and document archives.</li>
            <li>americannaturalprocessors.com (americannaturalprocessors.wp.urdemo.website)</li>
          </ul>

          <h4>Blogs & News Platforms:</h4>
          <ul className="check-list">
            <li>christabelllc.co - Content-driven blog website with a fully customized theme</li>
            <li>tendrepress.com – Custom WordPress blog website. (tendrepressdemo.wp.urdemo.website)</li>
            <li>exopermaculture.com – Niche blog built with custom design. (demoexopermaculture.wp.urdemo.website)</li>
            <li>manandculture.com – News and editorial site built on WordPress.</li>
          </ul>

          <h4>Education & LMS:</h4>
          <ul className="check-list">
            <li>celebratehebrew2024.com - LMS platform for online courses and interactive learning modules.</li>
            <li>twasilverwings.com – Membership-based nonprofit organization site with member login and secure content.</li>
            <li>greenacresvillage.org – Community-focused site featuring blogs, mailing list signup, and event updates. (green-acres-permaculture-village.wp.urdemo.website)</li>
          </ul>

          <h4>Website Redesign Projects:</h4>
          <ul className="check-list">
            <li>twasilverwings.com</li>
            <li>airbornetrampoline.ca</li>
            <li>dynamicsecurities.ca</li>
            <li>schlafly.com</li>
            <li>firststrikecharters.com</li>
            <li>mcgbiomarkers.com</li>
            <li>swimmersbyjessica.com</li>
          </ul>

          <h4>React Project:</h4>
          <ul className="check-list">
            <li>mazharali.online</li>
          </ul>
        </section>

        <section className="resume-section">
          <h3>Technical Expertise:</h3>
          <ul className="check-list">
            <li>Custom WordPress theme development & plugin customization</li>
            <li>WooCommerce setup and product management</li>
            <li>Advanced Custom Fields (ACF) & custom post types</li>
            <li>Membership & LMS integration</li>
            <li>Event booking functionality</li>
            <li>Responsive & SEO-friendly design</li>
            <li>Performance optimization & security best practices</li>
          </ul>
        </section>

        <section className="resume-section">
          <h3>My Role:</h3>
          <p>Full-cycle development: requirements gathering, design & development, theme customization, content integration, SEO setup, testing, and deployment.</p>
        </section>

        <section className="resume-section">
          <h3>Educational Qualification:</h3>
          <p><strong>Bachelor of Technology (B.Tech) in Computer Science & Engineering</strong></p>
          <p>Dr. Ram Manohar Lohia Avadh University, Ayodhya, Uttar Pradesh</p>
        </section>

        <section className="resume-section">
          <h3>Profile & Strengths:</h3>
          <ul className="check-list">
            <li>Quick learner and highly adaptable</li>
            <li>Energetic, optimistic, and hardworking</li>
            <li>Excellent soft skills and client communication</li>
            <li>Ready to take on challenges</li>
          </ul>
        </section>

        <div className="download-section">
           <a href={resumeDoc} download="Mazhar_Ali_Resume.doc" className="btn">Download CV</a>
        </div>

      </div>
    </div>
  );
};

export default Resume;