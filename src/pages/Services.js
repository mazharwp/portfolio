function Services() {
  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon"><i className="fa fa-laptop-code"></i></div>
              <h4>Custom Theme Development</h4>
              <p>Pixel-perfect WordPress themes developed from scratch using ACF, Gutenberg, or Elementor frameworks.</p>
            </div>
          </div>
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon"><i className="fa fa-plug"></i></div>
              <h4>Plugin Development</h4>
              <p>Build custom plugins to extend site functionality including booking, membership, automation, and APIs.</p>
            </div>
          </div>
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon"><i className="fa fa-store"></i></div>
              <h4>WooCommerce Development</h4>
              <p>End-to-end WooCommerce store setup with product filters, secure checkout, and custom cart logic.</p>
            </div>
          </div>
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon"><i className="fa fa-tachometer-alt"></i></div>
              <h4>Performance Optimization</h4>
              <p>Boost site speed using caching, lazy loading, image optimization, and Core Web Vitals improvements.</p>
            </div>
          </div>
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon"><i className="fa fa-shield-alt"></i></div>
              <h4>Security & Maintenance</h4>
              <p>Secure WordPress sites with firewalls, malware scans, regular updates, and uptime monitoring.</p>
            </div>
          </div>
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon"><i className="fa fa-search"></i></div>
              <h4>SEO Integration</h4>
              <p>Integrate Yoast/RankMath, configure schema markup, and optimize for search engine visibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;