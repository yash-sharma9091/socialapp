import React, {Component} from 'react';
import DashboardNav from './DashboardNav';
import AddNewWebsite from './AddNewWebsite';
import ScriptCode from './ScriptCode';
import DashboardListElement from './DashboardListElements';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			showNewWebsiteDialog: false,
			showScriptCodeDialog: false
		}
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
				                    <ul className="pagination">
				                        <li className="hidden-xs">
				                          <a href="/" aria-label="First">
				                            <span aria-hidden="true">First</span>
				                          </a>
				                        </li>
				                        <li>
				                          <a href="/" aria-label="Previous">
				                            <span aria-hidden="true">Previous</span>
				                          </a>
				                        </li>
				                        <li className="active"><a href="/">1</a></li>
				                        <li><a href="/">2</a></li>
				                        <li><a href="/">3</a></li>
				                        <li>
				                          <a href="/" aria-label="Next">
				                            <span aria-hidden="true">Next</span>
				                          </a>
				                        </li>
				                        <li className="hidden-xs">
				                          <a href="/" aria-label="Last">
				                            <span aria-hidden="true">Last</span>
				                          </a>
				                        </li>
				                     </ul>
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