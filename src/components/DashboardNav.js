import React from 'react';

const DashboardNav = () => (
	<section className="dashboard_nav">
	    <div className="container">
	        <div className="dash_nav">
	            <ul className="clearfix">
	                <li className="active">
	                    <a href="javascript:;">
	                        <span className="glyphicon glyphicon-th-large"></span>
	                        <span className="txtmob">DASHBOARD</span>
	                    </a>
	                </li>
	                <li>
	                    <a href="javascript:;">
	                        <span className="glyphicon glyphicon-list-alt"></span>
	                        <span className="txtmob">my subscriptions</span>
	                    </a>
	                </li>
	                <li>
	                    <a href="javascript:;">
	                        <span className="glyphicon glyphicon-cog"></span>
	                        <span className="txtmob">Setting</span>
	                    </a>
	                </li>
	            </ul>
	        </div>
	    </div>
	</section>
);

export default DashboardNav;