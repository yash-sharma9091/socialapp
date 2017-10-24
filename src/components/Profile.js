import React from 'react';
import DashboardNav from './DashboardNav';
import Sidebar from './Sidebar';
import Setting from './Setting';
import ChangePassword from './ChangePassword';
import SavedCard from './SavedCard';
import {exportPath} from './common/MatchComponentPath';
import {connect} from 'react-redux';

const Profile = (props) => {
	const {user} = props;
	return (
		<div>
			<DashboardNav/>
			<section className="gray_bg dash_mibble">
				<div className="container ">
			        <div className="dash_mibble_inner">
			        	<div className="set_hd">Settings</div>
			            <div className="clearfix left_dash_top">
			                <Sidebar/>
			                {exportPath(props) === 'profile' && <Setting initialValues={user}/>}
			                {exportPath(props) === 'change-password' && <ChangePassword user={user}/>}
			                {exportPath(props) === 'saved-card' && <SavedCard user={user}/>}
			            </div>    
			        </div>
			    </div>
			</section>
		</div>	
	);
};
const mapStateToProps = (state) => {
	return {
		user: state.auth.user
	}
}
export default connect(mapStateToProps)(Profile);