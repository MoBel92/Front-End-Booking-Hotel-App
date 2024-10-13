import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "../styles/Footer.module.css"; // Import your CSS module

const sections = [
  {
    title: "Solution",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API", "Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/",
  },
];

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSections}>
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className={styles.sectionTitle}>{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className={styles.sectionItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.newsletterSection}>
          <p className={styles.newsletterTitle}>Subscribe to our newsletter</p>
          <p className={styles.newsletterDescription}>
            The latest updates, articles, and resources, sent to your inbox
            weekly.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter email address"
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerRights}>
          2024 NC Tech, LLC. All rights reserved.
        </p>
        <div className={styles.socialIcons}>
          {items.map((x, index) => (
            <a
              href={x.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <x.icon className={styles.socialIcon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
