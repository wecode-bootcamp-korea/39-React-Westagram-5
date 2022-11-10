import React from 'react';
import { FOOTER_INFO_LIST } from './FooterData';

const Footer = () => {
  return (
    <footer>
      <ul className="footer-wrap">
        {FOOTER_INFO_LIST.map(info => (
          <li key={info.id}>
            <a href={info.link} className="footer-link">
              {info.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
