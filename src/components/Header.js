import React from 'react';
import {Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {AuthButton} from './AuthButton';
import logo from '../images/logo.png';

const Header = () => (
	<header>
		<Navbar fluid collapseOnSelect>
	    	<Navbar.Header>
	      		<Navbar.Brand>
	      			<LinkContainer to="/">
	      				<img src={logo} alt="SocialProof" />
	        		</LinkContainer>
	      		</Navbar.Brand>
	      		<Navbar.Toggle />
	   		</Navbar.Header>
	   		<Navbar.Collapse>
	   			<AuthButton/>
		    </Navbar.Collapse>	
	 	</Navbar>
 	</header>
);

export default Header;