import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import '../styles/Popover.scss';

const Popover = ({ target }) => {
  return (
    <UncontrolledPopover trigger="legacy" placement="bottom" target={target}>
      <PopoverHeader>How to install</PopoverHeader>
      <PopoverBody>It takes only 5 minutes to install this script into your website.</PopoverBody>
    </UncontrolledPopover>
  )
}

export default Popover