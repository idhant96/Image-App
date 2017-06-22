import {Button} from 'react-materialize';
import React from 'react';

function PersonalButton(props){
  return(
  <Button
    waves="light"
    onClick={props.onCLick}>
    {props.value}
  </Button>
);
}

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'nothing yet',
    }
    this.handleClick = this.handleClick.bind(this);
  }

    renderButton(i){
      return(
      <PersonalButton
        color =  'light'
        onClick = {(props) => this.handleClick(i)}
        value = {"Button".concat(i)}
      />
    )
    }

    handleClick(i){
      this.setState({
        txt: "something was clicked"
      })
    }

    render(){
      return(
        <div>
          <div >
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}

          </div>
        </div>
      );
    }
  }
