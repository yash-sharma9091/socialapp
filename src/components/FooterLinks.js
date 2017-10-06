import React from 'react';
import {Link} from 'react-router-dom';

const FooterLinks = (props) => (
	<div className="ftrRghtWrap pull-right">
		<h4 className="ftrHedin">COMPANY</h4>
  		<ul className="dotListN clearfix">
  			{props.links.map((value, index) => <li key={index}><Link to={value.url ? value.url : value.slug}>{value.title}</Link></li> )}
  		</ul>
  	</div>
);

export default FooterLinks;