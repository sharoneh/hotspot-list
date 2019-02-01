import React from 'react';
import '../styles/Header.scss';
import logo from '../images/conpass-logo.png';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

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

      <UncontrolledPopover trigger="legacy" placement="bottom" target="button">
          <PopoverHeader>Legacy Trigger</PopoverHeader>
          <PopoverBody>
            Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.</PopoverBody>
        </UncontrolledPopover>
    </div>
  )
}

export default Header