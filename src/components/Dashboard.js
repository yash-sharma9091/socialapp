import React, {Component} from 'react';
import DashboardNav from './DashboardNav';
import AddNewWebsite from './AddNewWebsite';
import EditWebsiteDialog from './EditWebsiteDialog';
import SampleCSVPrompt from './SampleCSVPrompt';
import ScriptCode from './ScriptCode';
import DashboardListElement from './DashboardListElements';
import {Http} from '../lib/Http';
import {connect} from 'react-redux';
import {Paginator} from './common/Paginator';

class Dashboard extends Component {
	constructor() {
		super();
		this.showDialog = this.showDialog.bind(this);
		this.state = {
			showNewWebsiteDialog: false,
			showScriptCodeDialog: false,
			showSampleCSVPrompt: false,
			editWebsiteDialog: false,
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
		const {list, activePage, showNewWebsiteDialog, showScriptCodeDialog, paging, processing, editWebsiteDialog, showSampleCSVPrompt, client} = this.state;
		const {user} = this.props;
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
					                    		show={this.showDialog} 
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
				            <Paginator paging={paging} activePage={activePage} handleSelect={(e) => this.handleSelect(e)}/>  
				        </div>
				    </div>
				</section>
				<AddNewWebsite show={showNewWebsiteDialog} user={user} hideDialog={() => this.hideDialog('showNewWebsiteDialog')} />
				<ScriptCode show={showScriptCodeDialog} client={client} user={user} hideDialog={() => this.hideDialog('showScriptCodeDialog')} />
				<SampleCSVPrompt show={showSampleCSVPrompt} client={client} user={user} hideDialog={() => this.hideDialog('showSampleCSVPrompt')} />
				{editWebsiteDialog && <EditWebsiteDialog 
					show={editWebsiteDialog} 
					initialValues={client} 
					client={client} 
					user={user} 
					hideDialog={() => this.hideDialog('editWebsiteDialog')} 
				/>}
			</div>
		);
	}
	
	/*showSampleCSVPrompt(list) {
		this.setState({showSampleCSVPrompt: true, client: list});
	}*/

	showDialog(dialog, data = {}) {
		const {client} = data;
		if(client){
			this.setState({[dialog]: true, client: client});	
		} else {
			this.setState({[dialog]: true,});	
		}
	}
	hideDialog(dialog) {
		this.setState({[dialog]: false});
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);