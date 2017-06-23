import React from 'react';
import cristiano from './cristiano.jpg';
// import coldplay from './img/coldplay.jpg';
// import spark from './img/spark.jpg';
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
    <img src={cristiano}
      alt="Smiley face"
       height="300"
       width="500"
     />
   </div>
  )
}
}



 export default Image;
