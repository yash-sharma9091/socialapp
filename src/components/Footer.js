import React, {Component} from 'react';
import LocationIcon from "../images/locationIcn.png";
import FaxIcon from "../images/faxIcn.png";
import PhoneIcon from "../images/phnIcn.png";
import MailIcon from "../images/mailIcn.png";
import {Http} from '../lib/Http';
import FooterLinks from './FooterLinks';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			links: []
		}
	}
	componentDidMount() {
		Http.get('cmsLinks')
		.then(({data}) => this.setState({links: data}))
		.catch(error => console.log(error));
	}
	render () {
		const {links} = this.state;
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
					{links.length > 0 ? <FooterLinks links={links}/> : null}
	      		</div>  	
	  		</footer>
		);
	}	
};

export default Footer;