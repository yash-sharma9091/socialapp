import React, {Component} from 'react';
import DashboardNav from './DashboardNav';
import {LinkContainer} from 'react-router-bootstrap';
import ViewClientListInfo from './ViewClientListInfo';
import ViewClientListElement from './ViewClientListElement';
import {Http} from '../lib/Http';
import {connect} from 'react-redux';
import {Paginator} from './common/Paginator';
import SampleCSVPrompt from './SampleCSVPrompt';
import ExportClientList from './common/ExportClientList';

class ViewClientList extends Component {
	constructor() {
		super();
		this.showSampleCSVPrompt = this.showSampleCSVPrompt.bind(this);
		this.state = {
			showSampleCSVPrompt: false,
			activePage: 1,
			client_list: [],
			paging: {},
			subscription_details: {},
			processing: false
		}
	}
	componentDidMount() {
		this.list();
	}
	list() {
		const {activePage} = this.state;
		const {params} = this.props.match;
		const {_id} = this.props.user;
		this.setState({processing: true});
		Http.post(`client_list?page=${activePage}`, {subscription_id: params.id, _id })
		.then(({data}) => this.setState({client_list: data.client_list, paging: data.paging, subscription_details: data.subscription_details, processing: false}))
		.catch(error => console.log(error));
	}
	handleSelect(eventKey) {
		this.setState({activePage: eventKey});
		setTimeout(() =>  this.list());
	}
	componentDidUpdate(prevProps, prevState) {
		const { showSampleCSVPrompt } = prevState;
		if( showSampleCSVPrompt ) {
			this.list();
		}
	}
	render() {
		const {activePage, client_list, paging, subscription_details, processing, showSampleCSVPrompt} = this.state;
		const client = {_id: this.props.match.params.id };
		const {_id} = this.props.user;
		return(
			<div>
				<DashboardNav/>
				<section className="gray_bg dash_mibble">
					<div className="container ">
				        <ViewClientListInfo subscription_details={subscription_details}/>
				        <div className="dash_mibble_inner_top">
				        	  <div className="sub_serch sub_serch_right">
				              <form>
				                <div className="form-group positionrel">
				                  <input id="inputHelpBlock" className="form-control"/>
				                  <button type="button" className="btn serch_icon"><i className="glyphicon glyphicon-search"></i></button>
				                </div>  
				              </form>
				              <div className="Export_btn">
				                <button className="btn btn_extra grayw" onClick={() => this.showDialog('showSampleCSVPrompt')} type="button">Import</button>
				                <ExportClientList className="btn_extra yellw" id={_id}/>
				                <LinkContainer to="/dashboard">
				                	<button className="btn btn_extra bluew"  type="button">Back</button>
				                </LinkContainer>	
				              </div>  
				            </div>   
				            <div className="clearfix table-responsive">
				                <table className="table dash_table table-bordered">
				                  	<thead>
					                    <tr>
					                      	<th width="30%">Client Name</th>
					                      	<th width="30%">Location</th>
					                      	<th width="20%">Plan</th>
					                      	<th width="20%">Date</th>
					                    </tr>
				                  	</thead>
				                  	<tbody>
				                  		{client_list.length > 0 
				                  			? client_list.map((client, index) => <ViewClientListElement key={index} subscription_details={subscription_details} client={client}/>)
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

export default connect(mapStateToProps)(ViewClientList);