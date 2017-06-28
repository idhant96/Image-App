import React from 'react';
import Image from './Media';
import {Tabs,Tab} from 'react-materialize';

class SlideNav extends React.Component {
  constructor(props) {
    super();
    this.state = {
      clicked:false
    }

  }

  onChildChanged(newState){
    this.setState({clicked:newState});
  //  console.log(this.state.clicked);
    this.props.CallbackParent(newState);
  }
    render(){
            return(
                <Tabs className='tab-demo z-depth-1'>
        		<Tab title="Image Set 1" active>
              <Image
                CallbackParent={(newState)=>this.onChildChanged(newState)}
                obj={this.props.obj}
              />
            </Tab>
        		<Tab title="Image Set 2">

            </Tab>
        		<Tab title="Image Set 3">

            </Tab>
        </Tabs>
        )
            }

    }
export default SlideNav;
