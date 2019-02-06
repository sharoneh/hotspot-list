import React from 'react';
import { connect } from 'react-redux';
import '../styles/Overlay.scss';
import Popover from './Popover';

class Overlay extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.hotspots.length !== this.props.hotspots.length) {
      const hotspotBtn = document.querySelector(`#hotspotButton${this.props.hotspots.length - 1}`)
      hotspotBtn.click()
    }
  }
  
  render() {
    return (
      <div className="Overlay">
        {this.props.hotspots.map((hotspot, index) => (
          <React.Fragment key={`hotspotBtn#${index}`}>
            <button
              style={{
                top: hotspot.position.y,
                left: hotspot.position.x,
              }}
              type="button"
              id={`hotspotButton${index}`}
            />
  
            <Popover hotspotIndex={index} />
          </React.Fragment>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { hotspots } = state
  return { hotspots }
}

export default connect(mapStateToProps, {})(Overlay)