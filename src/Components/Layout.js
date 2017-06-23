import React from 'react';
import SlideNav from './SlideNav';
import Info from './Properties';
import {Row,Col} from 'react-materialize';

class Layout extends React.Component{
  constructor() {
    super();
    this.state={
      data:false
    }
  }
  onChildChanged(newState){
    this.setState({data:newState})
    //console.log(this.state.data);
  }
    render(){
      return(
        <Row>
          <Col s={12} m={8} l={8}>
            <SlideNav
              CallbackParent={(newState)=>this.onChildChanged(newState)}
            />
          </Col>
          <Col s={12} m={4} l={4}>
            <Info
              status = {this.state.data}
            />
          </Col>
        </Row>
      )
    }
  }

export default Layout;
