import React from 'react';
import '../styles/Element.scss';

const Element = ({ children }) => {
  return (
    <div className="Element">
      {children}
      <div/>
    </div>
  )
}

export default Element