/* global IMAGE_PATH */
import React, {Component} from 'react';
import { push } from 'react-router-redux';
import {Nav, NavItem, MenuItem, Dropdown} from 'react-bootstrap';
import {DropdownWithoutActiveProps} from './DropdownWithoutActiveProps'
import { LinkContainer } from 'react-router-bootstrap';
import { AUTH_LOGOUT_REQUEST } from '../constant';
import NotificationIcon from '../images/bell_icon.png';
//import UserImage from '../images/user_dp_small.png';

class AuthButton extends Component {
  	render() {
    	const { token, user } = this.props;
	    return (
			token ? (
				<Nav className="afterlogin">
					<NavItem eventKey={1}>
						<img src={NotificationIcon} alt="Notifications" />
						<span className="noti_number">3</span>
					</NavItem>
					<DropdownWithoutActiveProps className="userMenu" id="dropdown-custom-1" componentClass="li">
						<Dropdown.Toggle useAnchor={true}>
							<span className="user_dp_small"><img src={`${IMAGE_PATH}/${user.profile_image.path}`} alt={user.customer_name}/> </span>
							{user.customer_name}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<LinkContainer to="/profile">
								<MenuItem eventKey="1">Profile</MenuItem>
							</LinkContainer>
							<MenuItem onClick={() => this.logout()} eventKey="2">Logout</MenuItem>
						</Dropdown.Menu>
					</DropdownWithoutActiveProps>
				</Nav>
			) : (
				<Nav className="loginSignUp">
					<LinkContainer to="/login">
			  			<NavItem eventKey={1}>Sign In</NavItem>
			  		</LinkContainer>
			  		<LinkContainer to="/register">
			  			<NavItem eventKey={2}>Sign Up</NavItem>
			  		</LinkContainer>	
				</Nav>
			)
		);
	}		
	logout() {
		const { dispatch } = this.props;
	  	return new Promise((resolve, reject) => {
	    	dispatch({
	      		type: AUTH_LOGOUT_REQUEST,
	      		callbackSuccess: () => {
	        		dispatch(push('/'));
	        		resolve();
	      		}
	    	})
	  	});
	}
}
export default AuthButton;