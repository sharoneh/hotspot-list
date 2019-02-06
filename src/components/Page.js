import React from 'react';
import Header from './Header';
import Main from './Main';
import Overlay from './Overlay';
import { getFromLocalStorage } from '../redux/AppReducer';
import { connect } from 'react-redux';

class Page extends React.Component {
  componentDidMount() {
    this.props.getFromLocalStorage()
  }

  render() {
    return (
      <div className="Page">
        <Header />
        
        <Main />
  
        <Overlay />
      </div>
    )
  }
}

export default connect(null, { getFromLocalStorage })(Page)