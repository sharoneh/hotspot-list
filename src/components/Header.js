import React from 'react';
import '../styles/Header.scss';
import logo from '../images/conpass-logo.png';

const Header = () => {
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="Conpass"/>
      
      <div className="links">
        <a href="http://localhost">Link fake 1</a>
        <a href="http://localhost">Link fake 2</a>
        <a href="http://localhost">Link fake 3</a>
        <a href="http://localhost">Link fake 4</a>
      </div>
    </div>
  )
}

export default Header