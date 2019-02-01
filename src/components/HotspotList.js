import React from 'react';
import '../styles/HotspotList.scss';
import HotspotItem from './HotspotItem';

const Hotspots = ({ children }) => {
  return (
    <ul>{children}</ul>
  )
}

const HotspotList = () => {
  return (
    <div className="HotspotList">
      <h1 className="title">List of hotspots</h1>

      <Hotspots>
        <HotspotItem />
        <HotspotItem />
        <HotspotItem />
      </Hotspots>
    </div>
  )
}

export default HotspotList