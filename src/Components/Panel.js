import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import Image from './Media';
import CardInfo from './Properties';

var IMAGES = [{
    "id": 1,
    "name": "Chris Martin",
    "gender": "Male",
    "Profession": "Singer",
    "source": "https://www.eestickets.com/wp-content/uploads/2017/01/coldplay.jpg"
  }, {
    "id": 2,
    "first_name": "cristiano-ronaldo",
    "gender": "Male",
    "Profession": "Footballer",
    "source": "http://soccer-tricks.com/wp-content/uploads/2014/10/cristiano-ronaldo1.jpg"
  }, {
    "id": 3,
    "name": "Tom Hanks",
    "gender": "Male",
    "Profession": "Actor",
    "source": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg"
  }];

class Images extends React.Component {
render(){
  return(
    <div className="panel">
    <div id="test1">
      <div className="row">
        <div className="container">
        <div className="col s9">
            <Image cards={IMAGES} />

        </div>
      </div>
        <div className="col s3">
          <CardInfo />
        </div>
      </div>
    </div>

    <div id="test2">
      <div className="row">
        <div className="col s9">
          <div className="container">
            <Image cards={IMAGES} />

          </div>
        </div>
        <div className="col s3">
          <CardInfo />
        </div>
      </div>
    </div>
    <div id="test3">
      <div className="row">
        <div className="col s9">
          <div className="container">
            <Image cards={IMAGES} />
          </div>
        </div>
        <div className="col s3">
          <CardInfo />
        </div>
      </div>
    </div>
  </div>
  )
}
}

export default Images;
