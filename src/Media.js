import {MediaBox} from 'react-materialize';
import React from 'react';
import cristiano from './cristiano.jpg';
import coldplay from './coldplay.jpg';
import spark from './spark.jpg';
class Image extends React.Component{
constructor(props){
  super(props);
  this.state = {
    data: "nothing",
  }

}
render(){
  return(
    <div>
    <img src={coldplay}
      alt="Smiley face"
       height="300"
       width="500"
       onClick={props.onCLick}
     />
   </div>
  )
}
}



 export default Image;
