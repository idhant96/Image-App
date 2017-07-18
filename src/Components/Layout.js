import React from "react";
import Navbar from './navbar';
import Images from './Panel';


class Layout extends React.Component {
  render(){
  return(
    <div className="images-panel">
      <Navbar />
      <Images />
    </div>
  );
}
}

export default Layout;
