import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

class Picture extends React.Component{
render(){
  return(
    <div className="col s3">
    <div classsName="card small">
      <div classsName="card-image">
        <img className="materialboxed" src={this.props.source} height="200" width="200"/>
      </div>
    </div>
  </div>
)
}
}

export default Picture;
