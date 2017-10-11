import React from 'react';
import DashboardNav from './DashboardNav';
import Sidebar from './Sidebar';
import Setting from './Setting';
import ChangePassword from './ChangePassword';
import {exportPath} from './common/MatchComponentPath';

const Profile = (props) => {
	return (
		<div>
			<DashboardNav/>
			<section className="gray_bg dash_mibble">
				<div className="container ">
			        <div className="dash_mibble_inner">
			        	<div className="set_hd">Settings</div>
			            <div className="clearfix left_dash_top">
			                <Sidebar/>
			                {exportPath(props) === 'profile' && <Setting/>}
			                {exportPath(props) === 'change-password' && <ChangePassword/>}
			            </div>    
			        </div>
			    </div>
			</section>
		</div>	
	);
};

export default Profile;