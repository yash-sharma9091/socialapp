import React, {Component} from 'react';
import TableUser from "../images/table_user.png";
import DashboardNav from './DashboardNav';
import {LinkContainer} from 'react-router-bootstrap';
import ViewClientListInfo from './ViewClientListInfo';

class ViewClientList extends Component {
	render() {
		return(
			<div>
				<DashboardNav/>
				<section className="gray_bg dash_mibble">
					<div className="container ">
				        <ViewClientListInfo/>
				        <div className="dash_mibble_inner_top">
				        	  <div className="sub_serch sub_serch_right">
				              <form>
				                <div className="form-group positionrel">
				                  <input id="inputHelpBlock" className="form-control"/>
				                  <button type="button" className="btn serch_icon"><i className="glyphicon glyphicon-search"></i></button>
				                </div>  
				              </form>
				              <div className="Export_btn">
				                <button className="btn btn_extra grayw"  type="button">Import</button>
				                <button className="btn btn_extra yellw"  type="button">Export</button>
				                <LinkContainer to="/dashboard">
				                	<button className="btn btn_extra bluew"  type="button">Back</button>
				                </LinkContainer>	
				              </div>  
				            </div>   
				            <div className="clearfix table-responsive">
				                <table className="table dash_table">
				                  <thead>
				                    <tr>
				                      <th width="30%">Client Name</th>
				                      <th width="30%">Location</th>
				                      <th width="20%">Plan</th>
				                      <th width="20%">Date</th>
				                    </tr>
				                  </thead>
				                  <tbody>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
				                    <tr>
				                      <td><img src={TableUser} alt="TableUser"/> James</td>
				                      <td>Canada</td>
				                      <td>Pro</td>
				                      <td>Mar 24, 2017</td>
				                    </tr>
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
			</div>
		);	
	}
}

export default ViewClientList;