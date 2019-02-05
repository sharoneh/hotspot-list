import React from 'react';
import '../styles/Main.scss';
import HotspotList from './HotspotList';
import { connect } from 'react-redux';
import { createHotspot } from '../redux/AppReducer';
import Element from './Element';

const Main = ({ createHotspot }) => {
  return (
    <div className="Main">
      <Element>
        <button onClick={createHotspot}>Create Hotspot</button>
      </Element>

      <HotspotList />
    </div>
  )
}

export default connect(null, { createHotspot })(Main)