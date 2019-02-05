import React from 'react';
import '../styles/HotspotItem.scss';
import { connect } from 'react-redux';
import { deleteHotspot } from '../redux/AppReducer';
import Element from './Element';

const HotspotItem = ({ title, description, index, deleteHotspot }) => {
  return (
    <li className="HotspotItem">
      <Element>
        <span>{title}</span>
      </Element>

      <Element>
        <button onClick={() => deleteHotspot(index)}>Delete</button>
      </Element>
    </li>
  )
}

export default connect(null, { deleteHotspot })(HotspotItem)