import React, {Component} from 'react';

class Setting extends Component {
	render() {
		return (
			<div className="right_dash pull-right">
			    <div className="set_hd_inner">Profile</div>
			    <div className="form_dash supporfom">
			        <form>
			            <div className="form-group">
			                <label htmlFor="Name">Name</label>
			                <input type="text" className="form-control input_both" id="Name" disabled value="David Robien"/>
			            </div>
			            <div className="form-group">
			                <label htmlFor="Name">Customer URL</label>
			                <input type="text" className="form-control input_both" id="Name" disabled value="david_robien@gmail.com"/>
			            </div>
			            <div className="form-group">
			                <label htmlFor="Name">Email ID</label>
			                <input type="text" className="form-control input_both" id="Name" disabled value="david_robien@gmail.com"/>
			            </div>
			            <div className="form-group">
			                <label htmlFor="Name">Contact Number</label>
			                <input type="text" className="form-control input_both" id="Number" value="9911111111" />
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

export default Setting;