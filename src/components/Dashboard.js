import React, {Component} from 'react';
import DashboardNav from './DashboardNav';
import AddNewWebsite from './AddNewWebsite';
import SampleCSVPrompt from './SampleCSVPrompt';
import ScriptCode from './ScriptCode';
import DashboardListElement from './DashboardListElements';
import {Pagination} from 'react-bootstrap';
import {Http} from '../lib/Http';
import {connect} from 'react-redux';

class Dashboard extends Component {
	constructor() {
		super();
		this.showSampleCSVPrompt = this.showSampleCSVPrompt.bind(this);
		this.state = {
			showNewWebsiteDialog: false,
			showScriptCodeDialog: false,
			showSampleCSVPrompt: false,
			activePage: 1,
			list: [],
			paging: {},
			client: {},
			processing: false
		}
	}
	componentDidMount() {
		this.list();
	}
	componentDidUpdate(prevProps, prevState) {
		
		const { showNewWebsiteDialog } = prevState;
		if( showNewWebsiteDialog ) {
			this.list();
		}
	}
	list() {
		const {activePage} = this.state;
		const {_id} = this.props.user;
		this.setState({processing: true});
		Http.post(`website_list?page=${activePage}`, {_id})
		.then(({data, paging}) => this.setState({list: data, paging, processing: false}) )
		.catch(error => console.log(error));
	}
	handleSelect(eventKey) {
		this.setState({activePage: eventKey});
		setTimeout(() =>  this.list());
	}
	render(){
		const {list, activePage, showNewWebsiteDialog, showScriptCodeDialog, paging, processing, showSampleCSVPrompt, client} = this.state;
		
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
				                <table className="table dash_table table-bordered">
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
				                  		{list.length > 0 
				                  			? list.map((value, index) => 
				                  				<DashboardListElement
				                  				key={index}
					                    		list={value}
					                    		show={() => this.showDialog('showScriptCodeDialog')} 
					                    		showSampleCSVPrompt={this.showSampleCSVPrompt}
					                    		hideDialog={() => this.hideDialog('showScriptCodeDialog')} />)
					                    		
					                    	: (processing) 
					                    		? <tr>
													<td colSpan="5" className="text-center">
														<span className="loader loader-small">No Records</span>
													</td>
												</tr>
					                    		: (
													<tr>
														<td colSpan="5" className="text-center">
															<span>No Records</span>
														</td>
													</tr>	
												)
				                  		}
				                  	</tbody>
				                </table>
				            </div> 
				            <div className="table_pagination clearfix">
				                <nav className="pull-right" aria-label="Page navigation">
				            		<Pagination
										bsSize="medium"
										items={paging.pages}
										activePage={activePage}
										maxButtons={10}
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
				<AddNewWebsite show={showNewWebsiteDialog} hideDialog={() => this.hideDialog('showNewWebsiteDialog')} />
				<ScriptCode show={showScriptCodeDialog} hideDialog={() => this.hideDialog('showScriptCodeDialog')} />
				<SampleCSVPrompt show={showSampleCSVPrompt} client={client} hideDialog={() => this.hideDialog('showSampleCSVPrompt')} />
			</div>
		);
	}
	showSampleCSVPrompt(list) {
		this.setState({showSampleCSVPrompt: true, client: list});
	}

	showDialog(dialog) {
		this.setState({[dialog]: true});
	}
	hideDialog(dialog) {
		this.setState({[dialog]: false});
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);