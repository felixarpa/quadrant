import React from 'react';
import './Footer.css';

const Styles = {
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '14.5em',
    padding: '1em',
    textAlign: 'center',
    backgroundColor: '#063053',
    color: '#FFFFFF',
  },
  separator: {
    height: '1em',
  }
};

const footerLinks = [
  { url: 'tel:+34936745559', text: '(+34) 936 745 559' },
  { url: 'mailto:derzu@quadrant12.com', text: 'derzu@quadrant12.com' },
  { url: 'https://goo.gl/maps/jQkJF2Bpe4Ek4qUw7', text: 'Dr. Murillo 3 · 08172 St. Cugat · Barcelona' },
  { url: 'https://goo.gl/maps/vrMhWqGXxfdfkhdj9', text: 'Major 64, 3r · 25100 Almacelles · Lleida' },
];

const Footer = () => (
  <div style={Styles.footer}>
    {footerLinks.map(link => (
      <p key={link.url}>
        <a
          href={link.url}
          style={{ color: '#FFFFFF' }}
          target={"_blank"}
          rel={"noopener noreferrer"}>
          {link.text}
        </a>
      </p>
    ))}
    <div style={Styles.separator} />
    <code>
      Made with <span role="img" aria-label="heart">❤️</span> by <b>
        <a
          href={'https://github.com/felixarpa'}
          style={{ color: '#FFFFFF' }}
          target={"_blank"}
          rel={"noopener noreferrer"}>
          felixarpa
        </a>
      </b>
    </code>
  </div>
);


export default Footer;
