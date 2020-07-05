import React from "react";
import "./index.scss";

const footerLinks = [
  { url: "tel:+34936745559", text: "(+34) 936 745 559" },
  { url: "mailto:derzu@quadrant12.com", text: "derzu@quadrant12.com" },
  { url: "https://goo.gl/maps/jQkJF2Bpe4Ek4qUw7", text: "Dr. Murillo 3 · 08172 St. Cugat · Barcelona" },
  { url: "https://goo.gl/maps/vrMhWqGXxfdfkhdj9", text: "Major 64, 3r · 25100 Almacelles · Lleida" },
];

const Footer = () => (
  <div className="footer-container">
    {footerLinks.map(link => (
      <p key={link.url}>
        <a href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link">{link.text}</a>
      </p>
    ))}
    <div className="footer-separator" />
    <code>
      Made with <span role="img" aria-label="heart">❤️</span> by <b>
        <a href="https://github.com/felixarpa" target="_blank" rel="noopener noreferrer" className="footer-link">
          felixarpa
        </a>
      </b>
    </code>
  </div>
);


export default Footer;
