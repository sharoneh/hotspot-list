import React from 'react';
import '../styles/Header.scss';
import logo from '../images/conpass-logo.png';
import Popover from './Popover';
import Element from './Element';

const Header = () => {
  return (
    <div className="Header">
      <Element>
        <a className="logo" href="http://localhost:3000">
          <img src={logo} alt="Conpass"/>
        </a>
      </Element>
      
      <div className="links">
        <Element>
          <button type="button" id="button">Link fake 1</button>
        </Element>

        <Element>
          <button>Link fake 2</button>
        </Element>

        <Element>
          <button>Link fake 3</button>
        </Element>
        
        <Element>
          <button>Link fake 4</button>
        </Element>
      </div>

      <Popover />
    </div>
  )
}

export default Header