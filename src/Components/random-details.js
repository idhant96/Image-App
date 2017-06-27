import React from 'react';
import { connect } from 'react-redux';

class UserDetails extends React.Component {

  render(){
    return(
      <div>
        <h2>{this.props.active.gender}</h2>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    active: state.activeUser
}
}

export default connect(mapStateToProps)(UserDetails);
