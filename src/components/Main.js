import React from 'react';
import '../styles/Main.scss';
import HotspotList from './HotspotList';

const Main = () => {
  return (
    <div className="Main">
      <button>Create Hotspot</button>

      <HotspotList />
    </div>
  )
}

export default Main