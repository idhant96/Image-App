import React from 'react';
import {Navbar,NavItem} from 'react-materialize';

function NavHeader(props){
  return(
  <Navbar brand='Image App' right>
	<NavItem href='#'>{props.value1}</NavItem>
	<NavItem href='#'>{props.value2}</NavItem>
  <NavItem href = '#'>{props.value3}</NavItem>
</Navbar>
  );
}

export default NavHeader;
