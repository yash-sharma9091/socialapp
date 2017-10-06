import React from 'react';
import LocationIcon from "../images/locationIcn.png";
import FaxIcon from "../images/faxIcn.png";
import PhoneIcon from "../images/phnIcn.png";
import MailIcon from "../images/mailIcn.png";
import {Link} from 'react-router-dom';
const Footer = () => {
	return (
		<footer>
      		<div className="container clearfix">
	     	  	<div className="ftrLftWrap pull-left">
	       			<h4 className="ftrHedin">CONTACT</h4>
	              	<ul className="icnListN">
	                  	<li>
	                  		<a href="/">
	                  			<span className="icnWrapperL"> <img src={LocationIcon} alt="Location Icon" /> </span>
	                  			<span>Lorem Ipsum is simply</span>
	                  		</a>
	                  	</li>
	                  	<li>
	                  		<a href="/">
		                  		<span className="icnWrapperL"><img src={FaxIcon} alt="Fax Icon"/></span>
		                  		<span>(123) 456-7890</span>
	                  		</a>
	                  	</li>
	                  	<li>
	                  		<a href="/">
	                  			<span className="icnWrapperL"><img src={PhoneIcon} alt="Phoen Icon"/>
	                  			</span><span>(123) 456-7890</span>
	                  		</a>
	                  	</li>
	                  	<li>
	                  		<a href="/">
	                  			<span className="icnWrapperL"><img src={MailIcon} alt="Mail Icon" /></span>
	                  			<span>info@yourdomain.com</span>
	                  		</a>
	                  	</li>
	              	</ul>
	          	</div>
				<div className="ftrRghtWrap pull-right">
	       			<h4 className="ftrHedin">COMPANY</h4>
	          		<ul className="dotListN clearfix">
						<li><Link to="/">Home</Link></li>
						<li><a href="/">help</a></li>
						<li><Link to="/pricing">PRICING</Link></li>
						<li><Link to="/terms-to-use">TERM TO USE</Link></li>
						<li><Link to="/register">SignUp</Link></li>
						<li><Link to="/privacy-policy">Privacy Policy</Link></li>
						<li><Link to="/login">SignIn</Link></li>
						<li><Link to="/contact-us">Contact Us</Link></li>
	          		</ul>
	          	</div>
      		</div>  	
  		</footer>
	);
};

export default Footer;