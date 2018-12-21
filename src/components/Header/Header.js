import React from 'react';

import './index.css';

export default function Header () {
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
      <a href="/">
        <img className="logo" alt="logo" src={require ('./img/logo.png')} />
      </a>
      <h4 className="label">Bullet Journal</h4><br />
      <h5 className="label-credito">©Desenvolvido por Alan 2018</h5>
    </div>
  );
}
