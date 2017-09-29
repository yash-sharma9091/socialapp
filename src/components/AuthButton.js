import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

export const AuthButton = () => (   			
	<div className="navbar-right headerRight">
		<Nav className="headerLinks">
			<LinkContainer to="/">
	  			<NavItem eventKey={1}>Home</NavItem>
	  		</LinkContainer>
	  		<LinkContainer to="pricing">
	  			<NavItem eventKey={2}>Pricing</NavItem>
	  		</LinkContainer>
		</Nav>
		<Nav className="loginSignUp">
			<LinkContainer to="login">
	  			<NavItem eventKey={1}>Sign In</NavItem>
	  		</LinkContainer>
	  		<LinkContainer to="register">
	  			<NavItem eventKey={2}>Sign Up</NavItem>
	  		</LinkContainer>	
		</Nav>
	</div>
);

const mapStateToProps = (state) => ({
 	token: state.auth.token
});

export default connect(mapStateToProps, null, null, {pure:false})(AuthButton);