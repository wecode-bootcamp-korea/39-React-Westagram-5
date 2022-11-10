import React from 'react';
import { FOOTER_LIST } from './FooterList';
import './KimMain.scss';

const Footer = () => {
  return (
    <div className="right_4">
      <div className="footer">
        {FOOTER_LIST.map(footer => {
          return (
            <a key={footer.id} href={footer.link}>
              {footer.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
