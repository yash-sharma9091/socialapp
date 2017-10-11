import React from 'react';
import UserPic from "../images/user_dp_bigl.png";
import {NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const Sidebar = () => {
	return (
		<div className="left_dash pull-left">
		    <div className="profile_img text-center">
		        <img src={UserPic} alt="Username"/>
		        <span>David Robien</span>   
		    </div>  
		    <ul className="left_dash_menu">
		        <LinkContainer to="/profile">
	            	<NavItem eventKey={1}> Profile </NavItem>
	            </LinkContainer>
	            <LinkContainer to="/change-password">
	            	<NavItem eventKey={1}> Change Password </NavItem>
	            </LinkContainer>
		    </ul>  
		</div> 
	);
}

export default Sidebar;