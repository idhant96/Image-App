import React from 'react';
import Picture from './Picture';
class Image extends React.Component{

  iterateImages(){
  return this.props.cards.map((image) => {
    return(
      <img
        key={image.id}
        src={image.source}
        alt="not working bro!"
        height="200"
        width="200"
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



 export default Image;
