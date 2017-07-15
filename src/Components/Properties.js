import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

class CardInfo extends React.Component {
render(){
  return(
    <div className="row">
  <div className="col s12 m5">
    <div className="card-panel teal">
      <div className="white-text">
        <p> somthing some something</p>
        <p>some soe</p>
    </div>
    </div>
  </div>
</div>
  );
}
}

export default CardInfo;
