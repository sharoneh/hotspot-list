import React from 'react';
import '../styles/Header.scss';
import logo from '../images/conpass-logo.png';
import Popover from './Popover';

const Header = () => {
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="Conpass"/>
      
      <div className="links">
        <button type="button" id="button">Link fake 1</button>
        <button>Link fake 2</button>
        <button>Link fake 3</button>
        <button>Link fake 4</button>
      </div>

      <Popover />
    </div>
  )
}

export default Header