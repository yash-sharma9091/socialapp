/* global moment */
import React from 'react';
import ClientList_1 from "../images/client_list_img1.png";
import ClientList_2 from "../images/client_list_img2.png";
import ClientList_3 from "../images/client_list_img3.png";
import ClientList from "../images/client_list_img.png";
const ViewClientListInfo = ({subscription_details}) => {
	return(
		<div className="dash_mibble_inner">
		  	<div className="set_hd set_hd_bottom">View <strong>Client List</strong></div>
		  	<div className="client_list">
		    	<ul className="clearfix">
		      		<li>
		        		<img src={ClientList} alt="ClientList"/>
		        		<h4>Web Site Name</h4>
		        		<a className="bluecolor" href="{subscription_details.website_url}" target="_blank">{subscription_details.website_url}</a>
		      		</li>
		      		<li>
		        		<img src={ClientList_1} alt="ClientList"/>
		        		<h4>Subscription <strong>Plan Name</strong><br/> {subscription_details.plan_name}</h4>
		      		</li>
		      		<li>
		        		<img src={ClientList_2} alt="ClientList"/>
		        		<h4>Subscription <strong>Plan Price</strong><br/> ${subscription_details.plan_price}</h4>
		      		</li>
		      		<li>
		        		<img src={ClientList_3} alt="ClientList"/>
		        		<h4>Subscription <strong>Expire On</strong><br/> { moment(subscription_details.expiration_date).format('MMM DD, YYYY')}</h4>
		      		</li>
		    	</ul>
		  	</div>  
		</div> 
	);
}
export default ViewClientListInfo;