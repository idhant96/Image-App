import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectImage} from '../actions/image-action';

class Image extends React.Component{
constructor(props){
  super();
  this.state = {
    clicked: false
  }
}
onClicked(){
  const newState = !this.state.clicked;
  this.setState({clicked:newState});
  // console.log(this.state.clicked)
  this.props.CallbackParent(newState);
}
iterateImages(){
  return this.props.obj.map((image) => {
    return(
      <img
        key={image.id}
        src={image.source}
        alt="not working bro!"
        height="300"
        width="500"
        onClick={()=>this.props.selectImage(image)}
      />
    )
  })
}
render(){
  return(
    <div>
      {this.iterateImages()}
</div>
  )
}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectImage: selectImage},dispatch)
}

 export default connect(null,matchDispatchToProps)(Image);
