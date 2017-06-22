import React from 'react';
import ReactDOM from 'react-dom';

import {Navbar,NavItem,Tabs,Tab,Row,Col} from 'react-materialize';
import Image from './Media';

function Nav(props){
  return(
    <Navbar brand='Image App' right>
	<NavItem href='#'>{props.value1}</NavItem>
	<NavItem href='#'>{props.value2}</NavItem>
  <NavItem href = '#'>{props.value3}</NavItem>
</Navbar>
  );
}

function Slide(props){
    return(
        <Tabs className='tab-demo z-depth-1'>
		<Tab title="Image Set 1" active>
      <Image />
    </Tab>
		<Tab title="Image Set 2"></Tab>
		<Tab title="Image Set 3"></Tab>
</Tabs>
)
    }

class App extends React.Component{
  render(){
    return(
      <div>
          <Nav value1 = "something1" value2 = "something2" value3 = "something3" />
          <Slide />
      <Row>
      <Col s={8} m={8}>

        </Col>

        <Col s={4} m={4}>

        </Col>
      </Row>
    </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
