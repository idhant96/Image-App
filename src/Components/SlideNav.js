import React from 'react';
import Image from './Media';
import {Tabs,Tab} from 'react-materialize';

class SlideNav extends React.Component {
  constructor() {
    super();
    this.state = {
      tab1: 'something',
      tab2: 'something'
    }
  }
    render(){
            return(
                <Tabs className='tab-demo z-depth-1'>
        		<Tab title="Image Set 1" active>
              <Image />
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
