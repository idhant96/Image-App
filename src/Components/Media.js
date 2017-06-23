import React from 'react';
import cristiano from './cristiano.jpg';
// import coldplay from './img/coldplay.jpg';
// import spark from './img/spark.jpg';
class Image extends React.Component{
constructor(){
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
render(){
  return(
    <div>
    <img src={cristiano}
      alt="Smiley face"
       height="300"
       width="500"
       onClick={()=>this.onClicked()}
     />
   </div>
  )
}
}



 export default Image;
