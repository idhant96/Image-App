import React from 'react';
import cristiano from '../img/cristiano.jpg';
// import coldplay from './img/coldplay.jpg';
// import spark from './img/spark.jpg';
class Image extends React.Component{
render(){
  return(
        <div className="col s3">
        <div classsName="card small">
          <div classsName="card-image">
            <img className="materialboxed" src={cristiano} height="200" width="200"/>
          </div>
        </div>
      </div>
  )


}
}



 export default Image;
