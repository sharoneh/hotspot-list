import React from 'react';
import '../styles/Element.scss';
import { connect } from 'react-redux';
import { onCaptureClick } from '../redux/AppReducer';

class Element extends React.Component {
  render() {
    return (
      <div className="Element">
        {this.props.children}
        
        {this.props.capturing ? (
          <div onClick={this.props.onCaptureClick} />
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { capturing } = state
  return { capturing }
}

export default connect(mapStateToProps, { onCaptureClick })(Element)