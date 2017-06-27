import React from 'react';
import ReactDOM from 'react-dom';
// import {Row,Col} from 'react-materialize';
// import Layout from './Components/Layout';
// import NavHeader from './Components/NavHeader';
import { createStore } from 'redux';
import allreducers from './reducers';
import {Provider} from 'react-redux';
import MockData from './Components/random';

const store = createStore(allreducers);


ReactDOM.render(
  <Provider store = {store}>
    <MockData />
  </Provider>,
  document.getElementById('root'));









// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       link1: 'something',
//       link2: 'something',
//       link3:'something'
//     }
//   }
//   render(){
//     return(
//       <div>
//         <Row>
//           <Col s={12} m={12} l={12}>
//           <NavHeader value1 = {this.state.link1} value2 = {this.state.link2} value3 = {this.state.link3} />
//         </Col>
//     </Row>
//       <Row>
//         <Col s={12} m={12} l={12}>
//           <Layout />
//         </Col>
//       </Row>
//   </div>
//     )
//   }
// }
//
// ReactDOM.render(<h1>hello there!</h1>,document.getElementById('root'));
