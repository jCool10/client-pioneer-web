import React from 'react';
import logo from '../../assets/logo_pioneer.png';

import './Header.scss';

export default function Header() {
  return (
    <section className="header">
      <div className="header-img">
        <img src={logo} alt="logo" />
      </div>

      <div className="header-search">
        <i class="fa fa-search"></i>

        <input type="search" placeholder="Search" />
      </div>
    </section>
  );
}
