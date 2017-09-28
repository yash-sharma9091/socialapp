import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const AuthButton = ({ token }) => (
  	token ? (
  		<Nav pullRight>
	    	<LinkContainer to="/profile">
				<NavItem eventKey={1}>Profile</NavItem>
	        </LinkContainer>
    		<NavItem onClick={() => push('/')} eventKey={1}>Logout</NavItem>
    	</Nav>	
  	) : (
  		<Nav pullRight>
	    	<LinkContainer to="/login">
				<NavItem eventKey={1}>Login</NavItem>
	        </LinkContainer>
	    </Nav>    
  	)
);

const mapStateToProps = (state) => ({
  token: state.auth.token
});

export default connect(mapStateToProps, null, null, {pure:false})(AuthButton);