import React from 'react';
import {Link} from 'react-router-dom';
const authLinks = ['sign-in', 'login', 'signin', 'SignUp', 'signup', 'register'];
const beforeAuthVisible = (slug, url, title) => authLinks.includes(slug) || authLinks.includes(url) || authLinks.includes(title);
const FooterLinks = (props) => (
	<div className="ftrRghtWrap pull-right">
		<h4 className="ftrHedin">COMPANY</h4>
  		<ul className="dotListN clearfix">
  			{props.links.map((value, index) => (props.token && beforeAuthVisible(value.slug, value.url, value.title)) ? null : (<li key={index}><Link to={value.url ? value.url : value.slug}>{value.title}</Link></li>) )}
  		</ul>
  	</div>
);

export default FooterLinks;