import React from 'react';
import '../styles/HotspotItem.scss';

const HotspotItem = ({ title, description }) => {
  return (
    <li className="HotspotItem">
      <span>{title}</span>

      <a href="http://localhost">Delete</a>
    </li>
  )
}

export default HotspotItem