import React from 'react';
import '../styles/HotspotList.scss';
import HotspotItem from './HotspotItem';
import { connect } from 'react-redux';

const Hotspots = ({ children }) => {
  return (
    <ul>{children}</ul>
  )
}

const HotspotList = ({ hotspots }) => {
  return (
    <div className="HotspotList">
      <h1 className="title">List of hotspots</h1>

      <Hotspots>
        {hotspots.map((hotspot, index) => (
          <HotspotItem { ...hotspot } index={index} key={`hotspotListItem#${index}`} />
        ))}
      </Hotspots>
    </div>
  )
}

const mapStateToProps = state => {
  const { hotspots } = state
  return { hotspots }
}

export default connect(mapStateToProps, {})(HotspotList)