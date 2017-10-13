import React, {Component} from 'react';
import DashboardNav from './DashboardNav';
import AddNewWebsite from './AddNewWebsite';
import ScriptCode from './ScriptCode';
import DashboardListElement from './DashboardListElements';
import {Pagination} from 'react-bootstrap';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			showNewWebsiteDialog: false,
			showScriptCodeDialog: false,
			activePage: 1
		}
	}
	handleSelect(eventKey) {
		console.log(eventKey);
		this.setState({activePage: eventKey});
	}
	render(){
		return (
			<div>
				<DashboardNav/>
				<section className="gray_bg dash_mibble">
					<div className="container ">
				        <div className="dash_mibble_inner">
				        	<div className="set_hd">Dashboard 
				                <button className="btn pull-right yellobtn_small" onClick={() => this.showDialog('showNewWebsiteDialog')}  type="button">ADD NEW WEBSITE</button>
				            </div>
				            <div className="clearfix table-responsive">
				                <table className="table dash_table">
				                  <thead>
				                    <tr>
				                      <th>Website-URL</th>
				                      <th>Plan Name</th>
				                      <th>Plan Price</th>
				                      <th width="20%">Expires On</th>
				                      <th>Action</th>
				                    </tr>
				                  </thead>
				                  <tbody>
				                    <DashboardListElement show={() => this.showDialog('showScriptCodeDialog')} hideDialog={() => this.hideDialog('showScriptCodeDialog')} />
				                  </tbody>
				                </table>
				            </div> 
				            <div className="table_pagination clearfix">
				                <nav className="pull-right" aria-label="Page navigation">
				            		<Pagination
										bsSize="medium"
										items={10}
										activePage={this.state.activePage}
										boundaryLinks={true}
										prev="Previous"
										next="Next"
										first="First"
										last="Last"
										onSelect={(e) => this.handleSelect(e)} />
				                </nav>
				            </div>    
				        </div>
				    </div>
				</section>
				<AddNewWebsite show={this.state.showNewWebsiteDialog} hideDialog={() => this.hideDialog('showNewWebsiteDialog')} />
				<ScriptCode show={this.state.showScriptCodeDialog} hideDialog={() => this.hideDialog('showScriptCodeDialog')} />
			</div>
		);
	}

	showDialog(dialog) {
		this.setState({[dialog]: true});
	}
	hideDialog(dialog) {
		this.setState({[dialog]: false});
	}
}

export default Dashboard;