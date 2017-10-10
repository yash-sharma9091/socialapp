import React from 'react';
import LocationIcon from "../images/locationIcn.png";
import FaxIcon from "../images/faxIcn.png";
import PhoneIcon from "../images/phnIcn.png";
import MailIcon from "../images/mailIcn.png";

const Address = ({site}) =>  (
	<div className="ftrLftWrap pull-left">
		<h4 className="ftrHedin">CONTACT</h4>
      	<ul className="icnListN">
          	<li>
      			<span className="icnWrapperL"> <img src={LocationIcon} alt="Location Icon" /> </span>
      			<span>{site.address}</span>
          	</li>
          	<li>
          		<span className="icnWrapperL"><img src={FaxIcon} alt="Fax Icon"/></span>
          		<span>{site.fax}</span>
          	</li>
          	<li>
      			<span className="icnWrapperL"><img src={PhoneIcon} alt="Phoen Icon"/>
      			</span><span>{site.phone}</span>
          	</li>
          	<li>
      			<span className="icnWrapperL"><img src={MailIcon} alt="Mail Icon" /></span>
      			<span>{site.domain}</span>
          	</li>
      	</ul>
  	</div>
);

export default Address;