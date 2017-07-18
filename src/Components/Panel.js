import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import Image from './Media';
import CardInfo from './Properties';

class Images extends React.Component {
render(){
  return(
    <div className="panel">
    <div id="test1">
      <div className="row">
        <div className="container">
        <div className="col s9">
            <Image />
            <Image />
            <Image />
        </div>
      </div>
        <div className="col s3">
          <CardInfo />
        </div>
      </div>
    </div>

    <div id="test2">
      <div className="row">
        <div className="col s9">
          <div className="container">
            <Image />
            <Image />
            <Image />
          </div>
        </div>
        <div className="col s3">
          <CardInfo />
        </div>
      </div>
    </div>
    <div id="test3">
      <div className="row">
        <div className="col s9">
          <div className="container">
            <Image />
            <Image />
            <Image />
          </div>
        </div>
        <div className="col s3">
          <CardInfo />
        </div>
      </div>
    </div>
  </div>
  )
}
}

export default Images;
