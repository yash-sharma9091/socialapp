/* global IMAGE_PATH */
import React from 'react';
//import UserPic from "../images/user_dp_bigl.png";
import {NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {MatchProfilePath, MatchChangePasswordPath} from './common/MatchPath';

const Sidebar = (props) => {
	const { user } = props;
	return (
		<div className="left_dash pull-left">
		    <div className="profile_img text-center">
		        <img src={`${IMAGE_PATH}/${user.profile_image.path}`} alt={user.customer_name}/>
		        <span>{user.customer_name}</span>   
		    </div>  
		    <ul className="left_dash_menu">
		        <LinkContainer to="/profile" isActive={MatchProfilePath}>
	            	<NavItem eventKey={1}> Profile </NavItem>
	            </LinkContainer>
	            <LinkContainer to="/change-password" isActive={MatchChangePasswordPath}>
	            	<NavItem eventKey={1}> Change Password </NavItem>
	            </LinkContainer>
		    </ul>  
		</div> 
	);
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});	
export default connect(mapStateToProps)(Sidebar);