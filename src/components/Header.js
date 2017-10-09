import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AuthButton from './AuthButton';
import logo from '../images/logo.png';

const Header = () => (
	<header>
		<Navbar fluid collapseOnSelect>
	    	<Navbar.Header>
	      		<Navbar.Brand>
	      			<LinkContainer to="/">
	      				<img className="cursor" src={logo} alt="SocialProof" />
	        		</LinkContainer>
	      		</Navbar.Brand>
	      		<Navbar.Toggle />
	   		</Navbar.Header>
	   		<Navbar.Collapse>
	   			<div className="navbar-right headerRight">
   					<Nav className="headerLinks">
   						<LinkContainer to="/" exact={true}>
   				  			<NavItem eventKey={1}>Home</NavItem>
   				  		</LinkContainer>
   				  		<LinkContainer to="/pricing">
   				  			<NavItem eventKey={2}>Pricing</NavItem>
   				  		</LinkContainer>
   					</Nav>
	   				<AuthButton/>
	   			</div>
		    </Navbar.Collapse>	
	 	</Navbar>
 	</header>
);

export default Header;