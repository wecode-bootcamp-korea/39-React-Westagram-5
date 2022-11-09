import React from 'react';
import { FOOTER_LIST } from './FooterList';
import './KimMain.scss';

const Footer = () => {
  return (
    <div className="right_4">
      <a className="footer">
        {FOOTER_LIST.map(foot => (
          <a>{foot.data1}</a>
        ))}
        <br></br>
        {FOOTER_LIST.map(foot => (
          <a>{foot.data2}</a>
        ))}
        <br></br>
        <br></br>
        {FOOTER_LIST.map(foot => (
          <a>{foot.data3}</a>
        ))}
      </a>
    </div>
  );
};

export default Footer;
