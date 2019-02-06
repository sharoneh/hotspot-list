import React from 'react';
import { connect } from 'react-redux';
import '../styles/Overlay.scss';
import Popover from './Popover';

const Overlay = ({ hotspots }) => {
  return (
    <div className="Overlay">
      {hotspots.map((hotspot, index) => (
        <React.Fragment key={`hotspotBtn#${index}`}>
          <button
            style={{
              top: hotspot.position.y,
              left: hotspot.position.x,
            }}
            type="button"
            id={`hotspotButton${index}`}
          />

          <Popover target={`hotspotButton${index}`} />
        </React.Fragment>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  const { hotspots } = state
  return { hotspots }
}

export default connect(mapStateToProps, {})(Overlay)