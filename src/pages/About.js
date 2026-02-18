import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>I'm Mazhar and <span>WP Developer</span></h3>
                <p>With over 5 years of hands-on experience, I specialize in building responsive WordPress websites from scratch, optimizing site speed, and developing custom plugins and themes. Whether you need a business site, blog, or eCommerce store, I can build it to match your goals using clean and scalable code.</p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>Website : <span><a href="http://mazharali.online/">mazharali.online</a></span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Email : <span>mazharaliwp@gmail.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Degree : <span>B.Tech. Computer Science and Engineering</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Phone : <span>+91 8181810302</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>City : <span>Noida</span></p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <Link to="/contact" className="btn hire-me">
                      Hire Me
                    </Link>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>PHP / WordPress</h5>
                    <div className="progress"><div className="progress-in" style={{width: '92%'}}></div><div className="skill-percent">92%</div></div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Theme & Plugin Dev</h5>
                    <div className="progress"><div className="progress-in" style={{width: '90%'}}></div><div className="skill-percent">90%</div></div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>HTML & CSS</h5>
                    <div className="progress"><div className="progress-in" style={{width: '95%'}}></div><div className="skill-percent">95%</div></div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>JavaScript / jQuery</h5>
                    <div className="progress"><div className="progress-in" style={{width: '85%'}}></div><div className="skill-percent">85%</div></div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>WooCommerce Customization</h5>
                    <div className="progress"><div className="progress-in" style={{width: '88%'}}></div><div className="skill-percent">88%</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;