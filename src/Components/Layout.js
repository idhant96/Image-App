import React from 'react';
import SlideNav from './SlideNav';
import Info from './Properties';
import {Row,Col} from 'react-materialize';
class Layout extends React.Component{
  constructor() {
    super();
    this.state = {

    }
  }
    render(){
      return(
        <Row>
          <Col s={12} m={8} l={8}>
            <SlideNav />
          </Col>
          <Col s={12} m={4} l={4}>
            <Info />
          </Col>
        </Row>
      )
    }
  }

export default Layout;
