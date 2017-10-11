import React, {Component} from 'react';

class ChangePassword extends Component {
	render() {
		return (
			<div className="right_dash pull-right">
			    <div className="set_hd_inner">Change Password</div>
			    <div className="form_dash supporfom">
			        <form>
			            <div className="form-group">
			                <label htmlFor="Name">Old Password</label>
			                <input type="text" className="form-control input_both" id="Name"  value="david_robien_new"/>
			            </div>
			            <div className="form-group">
			                <label htmlFor="Name">New Password</label>
			                <input type="text" className="form-control input_both" id="Name"  value="david_robien"/>
			            </div>
			            <div className="form-group">
			                <label htmlFor="Name">Confirm Password</label>
			                <input type="text" className="form-control input_both" id="Name"  value="david_robien"/>
			            </div>
			            <div className="form-group margin-bot10">
			                  <button type="button" className="btn btn-default yellobtn">Save</button>
			              </div> 
			        </form>
			    </div>  
			</div> 
		);
	}
}

export default ChangePassword;