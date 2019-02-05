import React from 'react';
import '../styles/HotspotList.scss';
import HotspotItem from './HotspotItem';
import { connect } from 'react-redux';
import Element from './Element';

const Hotspots = ({ children }) => {
  return (
    <ul>{children}</ul>
  )
}

const HotspotList = ({ hotspots }) => {
  return (
    <div className="HotspotList">
      <Element>
        <h1 className="title">List of hotspots</h1>
      </Element>

      <Hotspots>
        {hotspots.map((hotspot, index) => (
          <HotspotItem
            { ...hotspot }
            index={index}
            key={`hotspotListItem#${index}`}
          />
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