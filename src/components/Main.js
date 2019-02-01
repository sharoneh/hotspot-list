import React from 'react';
import '../styles/Main.scss';
import HotspotList from './HotspotList';
import { connect } from 'react-redux';
import { createHotspot } from '../redux/AppReducer';

const Main = ({ createHotspot }) => {
  return (
    <div className="Main">
      <button onClick={createHotspot}>Create Hotspot</button>

      <HotspotList />
    </div>
  )
}

export default connect(null, { createHotspot })(Main)