import React from 'react';
import DashboardNav from './DashboardNav';

const MySubscriptions = () => {
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
			                    <tr>
			                      <td><a className="bluecolor" href="/">www.zavater.com</a></td>
			                      <td>Pro</td>
			                      <td>$79</td>
			                      <td>Mar 24, 2017</td>
			                      <td>
			                        <a className="btn table_btn " href="/" role="button">Cancel</a>
			                        <a className="btn table_btn " href="/" role="button">Review</a>
			                      </td>
			                    </tr>
			                    <tr>
			                      <td><a className="bluecolor" href="/">www.zavater.com</a></td>
			                      <td>Pro</td>
			                      <td>$79</td>
			                      <td>Mar 24, 2017</td>
			                      <td>
			                        <a className="btn table_btn " href="/" role="button">Cancel</a>
			                        <a className="btn table_btn " href="/" role="button">Review</a>
			                      </td>
			                    </tr>
			                    <tr>
			                      <td><a className="bluecolor" href="/">www.zavater.com</a></td>
			                      <td>Pro</td>
			                      <td>$79</td>
			                      <td>Mar 24, 2017</td>
			                      <td>
			                        <a className="btn table_btn " href="/" role="button">Cancel</a>
			                        <a className="btn table_btn " href="/" role="button">Review</a>
			                      </td>
			                    </tr>
			                    <tr>
			                      <td><a className="bluecolor" href="/">www.zavater.com</a></td>
			                      <td>Pro</td>
			                      <td>$79</td>
			                      <td>Mar 24, 2017</td>
			                      <td>
			                        <a className="btn table_btn " href="/" role="button">Cancel</a>
			                        <a className="btn table_btn " href="/" role="button">Review</a>
			                      </td>
			                    </tr>
			                    <tr>
			                      <td><a className="bluecolor" href="/">www.zavater.com</a></td>
			                      <td>Pro</td>
			                      <td>$79</td>
			                      <td>Mar 24, 2017</td>
			                      <td>
			                        <a className="btn table_btn " href="/" role="button">Cancel</a>
			                        <a className="btn table_btn " href="/" role="button">Review</a>
			                      </td>
			                    </tr>
			                    <tr>
			                      <td><a className="bluecolor" href="/">www.zavater.com</a></td>
			                      <td>Pro</td>
			                      <td>$79</td>
			                      <td>Mar 24, 2017</td>
			                      <td>
			                        <a className="btn table_btn " href="/" role="button">Cancel</a>
			                        <a className="btn table_btn " href="/" role="button">Review</a>
			                      </td>
			                    </tr>
			                    <tr>
			                      <td><a className="bluecolor" href="/">www.zavater.com</a></td>
			                      <td>Pro</td>
			                      <td>$79</td>
			                      <td>Mar 24, 2017</td>
			                      <td>
			                        <a className="btn table_btn " href="/" role="button">Cancel</a>
			                        <a className="btn table_btn " href="/" role="button">Review</a>
			                      </td>
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
export default MySubscriptions;