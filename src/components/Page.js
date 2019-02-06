import React from 'react';
import Header from './Header';
import Main from './Main';
import Overlay from './Overlay';

const Page = () => {
  return (
    <div className="Page">
      <Header />
      
      <Main />

      <Overlay />
    </div>
  )
}

export default Page