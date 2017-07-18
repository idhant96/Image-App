import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

class CardInfo extends React.Component {
render(){
  return(
    <div className="card-panel teal">
      <div className="row">
        <h4>Meta Data</h4>
        <div className="col s6">
          <div className="white-text">
            <p>Data-1 :</p>
            <p>Data-2 :</p>
            <p>Data-3 :</p>
            <p>Data-4 :</p>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default CardInfo;
