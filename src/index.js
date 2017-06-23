import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-materialize';
import Layout from './Components/Layout';
import NavHeader from './Components/NavHeader';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      link1: 'something',
      link2: 'something',
      link3:'something'
    }
  }
  render(){
    return(
      <div>
        <Row>
          <Col s={12} m={12} l={12}>
          <NavHeader value1 = {this.state.link1} value2 = {this.state.link2} value3 = {this.state.link3} />
        </Col>
    </Row>
      <Row>
        <Col s={12} m={12} l={12}>
          <Layout />
        </Col>
      </Row>
  </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
