import React from 'react';
import $ from 'jquery';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import Image from './Media';
import CardInfo from './Properties';


function NavHeader(){
  return(
    <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Image-App</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Recognized</a></li>
            <li><a href="badges.html">Unrecognized</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="sass.html">Recognized</a></li>
            <li><a href="badges.html">Unrecognized</a></li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1">All Images</a></li>
            <li className="tab"><a className="active" href="#test2">Faces</a></li>
            <li className="tab"><a href="#test3">Objects</a></li>
          </ul>
        </div>
        </nav>
        <div id="test1">
          <div className="row">
            <div className="col s9">
                <Image />
            </div>
            <div className="col s3 offset-s9">
              <CardInfo />
            </div>
          </div>
        </div>

        <div id="test2">
          <div className="row">
            <div className="col s9">
                <Image />
            </div>
            <div className="col s3 offset-s9">
              <CardInfo />
            </div>
          </div>
        </div>
        <div id="test3">
          <div className="row">
            <div className="col s9">
                <Image />
            </div>
            <div className="col s3 offset-s9">
              <CardInfo />
            </div>
          </div>
        </div>
    </div>
  );
}

export default NavHeader;
