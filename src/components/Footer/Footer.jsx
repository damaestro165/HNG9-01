import React from 'react';
import I4G from '../../assets/images/I4G.png';
import Zuri from '../../assets/images/Zuri.png';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={Zuri} />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} />
      </div>
    </footer>
  );
}

export default Footer;
