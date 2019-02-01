import React from 'react';
import '../styles/HotspotItem.scss';
import { connect } from 'react-redux';
import { deleteHotspot } from '../redux/AppReducer';

const HotspotItem = ({ title, description, index, deleteHotspot }) => {
  return (
    <li className="HotspotItem">
      <span>{title}</span>

      <button onClick={() => deleteHotspot(index)}>Delete</button>
    </li>
  )
}

export default connect(null, { deleteHotspot })(HotspotItem)