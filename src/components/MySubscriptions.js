import React, {Component} from 'react';
import DashboardNav from './DashboardNav';
import {Pagination} from 'react-bootstrap';
import {Http} from '../lib/Http';
import {connect} from 'react-redux';
import MySubscriptionListElement from './MySubscriptionListElements';

class MySubscriptions extends Component {
	constructor() {
		super();
		this.state = {
			activePage: 1,
			list: [],
			paging: {},
			processing: false
		}
	}
	componentDidMount() {
		this.list();
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
	render() {
		const {list, activePage, paging, processing} = this.state;
		return (
			<div>
				<DashboardNav/>
				<section className="gray_bg dash_mibble">
					<div className="container ">
				        <div className="dash_mibble_inner">
				        	<div className="set_hd">My Subscriptions </div>
				            <div className="sub_serch">
				              	<form>
				                	<div className="form-group positionrel">
				                  		<input id="inputHelpBlock" className="form-control"/>
				                  		<button type="button" className="btn serch_icon"><i className="glyphicon glyphicon-search"></i></button>
			                		</div>  
				              	</form>
				            </div>  
				            <div className="clearfix table-responsive">
				                <table className="table dash_table">
				                  	<thead>
				                    	<tr>
											<th width="20%">Website-URL</th>
											<th width="20%">Plan Name</th>
											<th width="20%">Plan Price</th>
											<th width="20%">Expires On</th>
											<th width="20%">Action</th>
				                    	</tr>
				                  	</thead>
				                  	<tbody>
				                    	{list.length > 0 
				                  			? list.map((value, index) => 
				                  				<MySubscriptionListElement
				                  				key={index}
					                    		list={value} />)
					                    		
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
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(MySubscriptions);