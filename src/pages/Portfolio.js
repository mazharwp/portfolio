import { useState } from "react";

import acfUsa from '../assets/images/acf-usa.webp';
import acfwpdemo from '../assets/images/acfwpdemo.webp';
import americannaturalprocessors from '../assets/images/americannaturalprocessors.png';
import annkreilkamp from '../assets/images/annkreilkamp.webp';
import bestair from '../assets/images/Best-Air-Duct-Cleaning-Las-Vegas.png';
import bishophill from '../assets/images/bishophill.webp';
import celebratehebrew2024 from '../assets/images/celebratehebrew2024.webp';
import christabelllc from '../assets/images/Christabelllc.webp';
import cogat107 from '../assets/images/cogat107.webp';
import dedicationsolutions from '../assets/images/dedicationsolutions.png';
import delcielobiewerterriers from '../assets/images/delcielobiewerterriers.png';
import dnbending from '../assets/images/dnbending.webp';
import exopermaculture from '../assets/images/exopermaculture.webp';
import gastonscatering from '../assets/images/gastonscatering.webp';
import internationalballroom from '../assets/images/internationalballroom.webp';
import leipersfork from '../assets/images/leipersfork.webp';
import mz from '../assets/images/mz.webp';
import neverendingstorybooks from '../assets/images/neverendingstorybooks.webp';
import oshohomeropa from '../assets/images/oshohomeropa.webp';
import tendrepress from '../assets/images/tendrepress.webp';
import thehonestxchange from '../assets/images/thehonestxchange.png';
import vegasairductcleaning from '../assets/images/vegasairductcleaning.png';

function Portfolio() {

  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    // ================= WP DEVELOPMENT =================
    { img: acfUsa, title: "American Culinary Federation", link: "http://acf-usa.org/", desc: "ACF-based, CPT blog and woocommerce also event site with a custom WordPress theme", category: "wp" },
    { img: acfwpdemo, title: "The Culinary Future Foundation", link: "https://theculinaryfuturefondation.org", desc: "ACF-based and CPT blog site with a custom WordPress theme", category: "wp" },
    { img: annkreilkamp, title: "Ann Kreilkamp – Writer, Thinker, Visionary", link: "https://annkreilkamp.net/", desc: "Custom theme with company member profiles, blog, filters & user dashboard", category: "wp" },
    { img: bishophill, title: "Historic Village & Cultural Heritage Site", link: "https://bishophill.com/", desc: "WooCommerce-based store with custom theme", category: "wp" },
    { img: christabelllc, title: "Christabel LLC", link: "https://christabelllc.co/", desc: "Custom gift card system & email automation", category: "wp" },
    { img: cogat107, title: "Cognitive Abilities Test Prep & Insights", link: "https://cogat107.com/", desc: "WooCommerce + Custom Theme", category: "wp" },
    { img: dnbending, title: "Precision Pipe and Tube Bending Solutions", link: "https://dnbending.com/", desc: "ACF-based corporate site", category: "wp" },
    { img: exopermaculture, title: "Exo Permaculture", link: "https://exopermaculture.com/", desc: "Custom magazine layout", category: "wp" },
    { img: gastonscatering, title: "Gaston’s Catering", link: "https://gastonscatering.com/", desc: "ACF-based corporate site", category: "wp" },
    { img: internationalballroom, title: "Dance, Elegance, and Community", link: "https://internationalballroom.net/", desc: "ACF-based CPT blog site", category: "wp" },
    { img: tendrepress, title: "Tendre Press", link: "https://tendrepress.com", desc: "ACF-based CPT blog site", category: "wp" },
    { img: americannaturalprocessors, title: "American Natural Processors", link: "https://americannaturalprocessors.com/", desc: "WordPress + ACF + WooCommerce", category: "wp" },
    { img: thehonestxchange, title: "The Honest Xchange", link: "https://thehonestxchange.com/demo", desc: "Custom Vault Marketplace & Auction Platform", category: "wp" },

    // ================= REDESIGN =================
    { img: neverendingstorybooks, title: "Neverending Story Books", link: "https://neverendingstorybooks.com/", desc: "Redesign Elementor WordPress theme", category: "redesign" },
    { img: celebratehebrew2024, title: "Celebrate Hebrew 2024", link: "https://celebratehebrew2024.com/", desc: "Redesign Elementor WordPress theme", category: "redesign" },
    { img: delcielobiewerterriers, title: "Delcielobiewerterriers", link: "https://delcielobiewerterriers.com/", desc: "Redesign Elementor WordPress theme", category: "redesign" },
    { img: vegasairductcleaning, title: "Vegas Air Duct Cleaning", link: "https://vegasairductcleaning.com", desc: "Redesign Elementor WordPress theme", category: "redesign" },
    { img: dedicationsolutions, title: "Dedication Solutions 1972", link: "https://dedicationsolutions1972.com", desc: "Redesign Elementor WordPress theme", category: "redesign" },
    { img: oshohomeropa, title: "Osho Home Ropa", link: "https://oshohomeropa.com/", desc: "Redesign Website", category: "redesign" },
    { img: leipersfork, title: "Leiper's Fork", link: "https://leipersfork.com/", desc: "Redesign Website", category: "redesign" },
    { img: bestair, title: "Best Air Duct Cleaning Las Vegas", link: "http://vegasairductcleaning.com/", desc: "Redesign Website", category: "redesign" },
    // ================= REACT =================
    { img: mz, title: "Portfolio", link: "https://mazharali.online", desc: "React Website", category: "react" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter(project => project.category === activeTab);

  return (
    <section className="portfolio section">
      <div className="container">

        <h2 className="section-title">Portfolio</h2>

        {/* Tabs */}
        <div className="portfolio-tabs">
          <button onClick={() => setActiveTab("all")} className={activeTab === "all" ? "active" : ""}>All</button>
          <button onClick={() => setActiveTab("wp")} className={activeTab === "wp" ? "active" : ""}>WP Development</button>
          <button onClick={() => setActiveTab("redesign")} className={activeTab === "redesign" ? "active" : ""}>Redesign</button>
          <button onClick={() => setActiveTab("react")} className={activeTab === "react" ? "active" : ""}>React</button>
        </div>

        {/* Portfolio Items */}
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div className="portfolio-item padd-15" key={index}>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project.img} alt={project.title} />
                </div>
                <h4 className="portfolio-title">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h4>
                <p className="portfolio-description">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;