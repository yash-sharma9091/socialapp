import React from 'react';
import {CMSStyle} from './common/CustomStyle';
import mapImage from "../images/map_contct.png";
import locationIcon from "../images/loc_icon.png";
import ContactBanner from '../images/contact_banner.png';
import ScrollToTopOnMount from './common/ScrollToTopOnMount';
const ContactUs = () => (
	<div>
		<ScrollToTopOnMount/>
		<section className="inner_banner" style={CMSStyle(ContactBanner)}>
		  <div className="container">
		     <div className="inner_banner_txt">
		        Contact <span>Us</span>
		     </div>
		  </div>  
		</section>
		<section className="gray_bg">
		  <div className="container">
		     <div className="contactpanel_inner clearfix">
		        <div className="conctleft">
		          <div className="contcthd">Send a <strong>Message</strong></div>
		          <div className="contct_form form supporfom">
		            <div className="form-group">
		              <label htmlFor="Email">Email</label>
		                <input type="text" className="form-control input_both" id="Email" placeholder="Enter Email" />
		            </div>
		            <div className="form-group">
		              <label htmlFor="Phone">Phone No</label>
		                <input type="text" className="form-control input_both" id="Phone" placeholder="Enter Phone" />
		            </div>
		            <div className="form-group">
		              <label htmlFor="Subject">Subject</label>
		                <input type="text" className="form-control input_both" id="Subject" placeholder="Enter Subject" />
		            </div>
		            <div className="form-group">
		              <label htmlFor="Message">Message</label>
		                <input type="text" className="form-control input_both" id="Message" placeholder="Enter Message" />
		            </div>
		            <div className="form-group margin-bot10">
		                  <button type="button" className="btn btn-default yellobtn">SUBMIT</button>
		              </div> 
		          </div>  
		        </div>
		        <div className="conctright">
		          <div className="positionrel">
		            <img className="width100" src={mapImage} alt="map" />
		            <div className="map_cicle">
		              <div className="loc_icon"><img src={locationIcon} alt="locationIcon" /></div>
		              <div className="absdress">
		                <ul className="absdresslist">
		                  <li>
		                    <div className="contact_icon"><span className="glyphicon glyphicon-map-marker"></span></div>
		                    <div className="contact_icontxt">10660 Northgate Dr,  Palo Cedro,CA, 96073</div>
		                  </li>
		                  <li>
		                    <div className="contact_icon"><span className="glyphicon glyphicon-earphone"></span></div>
		                    <div className="contact_icontxt">+91-9999999999 </div>
		                  </li>
		                  <li>
		                    <div className="contact_icon"><span className="glyphicon glyphicon-envelope"></span></div>
		                      <div className="contact_icontxt"><a href="#">help@test.com</a></div>
		                  </li>
		                </ul>
		              </div>
		            </div>
		          </div>
		        </div>
		     </div> 
		  </div>  
		</section>
	</div>
);

export default ContactUs;