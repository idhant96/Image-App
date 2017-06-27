import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions';
import UserDetails from './random-details';

class MockData extends React.Component {

  handleData(){
  //  console.log(this.props.users[0]);
    return this.props.users.map((obj) => {
      return(
        <li
          key={obj.id}
          onClick={() => this.props.selectUser(obj)}
          >
          {obj.first_name} {obj.last_name}
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <h1> hey there ! </h1>
        <ul>
        {this.handleData()}
      </ul>
      <hr />
      <UserDetails />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    users: state.users
}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(MockData);
