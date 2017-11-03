import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AuthButton from './AuthButton';
import logo from '../images/logo.png';
import logo2 from '../images/logo2.png';
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		const { token, dispatch, user } = this.props;
		return (
			<header className={token ? "dash_head" : null}>
				<Navbar fluid collapseOnSelect>
			    	<Navbar.Header>
			      		<Navbar.Brand>
			      			<LinkContainer to="/">
			      				<img className="cursor" src={token ? logo2 : logo} alt="SocialProof" />
			        		</LinkContainer>
			      		</Navbar.Brand>
			      		<Navbar.Toggle />
			   		</Navbar.Header>
			   		<AuthButton token={token} dispatch={dispatch} user={user}/>
			   		<Navbar.Collapse>
			   			<div className="navbar-right headerRight">
		   					<Nav className="headerLinks">
		   						<LinkContainer to={token ? "/dashboard" : "/"} exact={true}>
		   				  			<NavItem eventKey={1}>Homes</NavItem>
		   				  		</LinkContainer>
		   				  		<LinkContainer to="/pricing">
		   				  			<NavItem eventKey={2}>Pricing</NavItem>
		   				  		</LinkContainer>
		   					</Nav>
			   			</div>
				    </Navbar.Collapse>	
			 	</Navbar>
		 	</header>
		);
	}	
}	

const mapStateToProps = (state) => ({
 	token: state.auth.token,
 	user: state.auth.user
});	
// Pure false is used to remove the active class from the / route
export default connect(mapStateToProps, null, null, {pure:false})(Header);