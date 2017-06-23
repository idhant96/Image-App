import React from 'react';

class Info extends React.Component{
  constructor({ status }) {
    super();
    this.state = {
      data: status
    }

  }
    render(){
      return(
        <div>
          <p>The image is clicked?  {this.state.data}</p>
        </div>

      )
    }
  }

  export default Info;
