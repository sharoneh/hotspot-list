import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import '../styles/Popover.scss';
import { connect } from 'react-redux';
import { onHotspotTextChange } from '../redux/AppReducer';

const Popover = ({ hotspotIndex, hotspots, onHotspotTextChange }) => {
  const index = hotspotIndex
  
  return (
    <UncontrolledPopover trigger="legacy" placement="bottom" target={`hotspotButton${hotspotIndex}`}>
      <PopoverHeader>
        <input
          type="text"
          value={hotspots[index].title}
          onChange={e => onHotspotTextChange(e, 'title', index)}
        />
      </PopoverHeader>

      <PopoverBody>
        <textarea
          value={hotspots[index].description}
          onChange={e => onHotspotTextChange(e, 'description', index)}
          placeholder="Descrição"
        />
      </PopoverBody>
    </UncontrolledPopover>
  )
}

const mapStateToProps = state => {
  const { hotspots } = state
  return { hotspots }
}

export default connect(mapStateToProps, { onHotspotTextChange })(Popover)