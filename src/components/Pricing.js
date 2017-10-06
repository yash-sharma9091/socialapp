import React from 'react';
import {CMSStyle} from './common/CustomStyle';
import BasicPlan from '../images/basic_img.png';
import ProPlan from '../images/basic_img2.png';
import BusinessPlan from '../images/basic_img3.png';
import PriceBanner from '../images/price_banner.png';
import {Tabs, Tab} from 'react-bootstrap';
const Pricing = () => (
	<div>
		<section className="inner_banner" style={CMSStyle(PriceBanner)}>
		  <div className="container">
		     <div className="inner_banner_txt">PRICING</div>
		  </div>  
		</section>
		<section className="price_section">
			<div className="price_tab positionrel">
			<div className="price_tab_bg"></div>
				<Tabs className="container" defaultActiveKey={1} id="uncontrolled-tab-example">
			    	<Tab eventKey={1} title="Monthly">
			    		<div className="tabpanel_hd">Monthly Plans</div>
			    		<div className="plansub_lay">
			    		  <ul className="plansub_lay_list clearfix">
			    		    <li>
			    		      <h4>Basic plan</h4>
			    		      <div className="basic_img"><img src={BasicPlan} alt="Basic Plan"/></div>
			    		      <div className="price"><sup>$</sup>22 <span>per month</span></div>
			    		      <ul className="plansub_tag_list">
			    		        <li>Lorem Ipsum</li>
			    		        <li>Lorem Ipsum Dummy</li>
			    		        <li>Lorem Ipsum</li>
			    		      </ul>
			    		      <div className="FREE_btn">
			    		      <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
			    		      </div>
			    		    </li>
			    		    <li>
			    		      <h4>Pro plan</h4>
			    		      <div className="basic_img"><img src={ProPlan} alt="Pro Plan" /></div>
			    		      <div className="price"><sup>$</sup>42 <span>per month</span></div>
			    		      <ul className="plansub_tag_list">
			    		        <li>Lorem Ipsum</li>
			    		        <li>Lorem Ipsum Dummy</li>
			    		        <li>Lorem Ipsum</li>
			    		      </ul>
			    		      <div className="FREE_btn">
			    		      <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
			    		      </div>
			    		    </li>
			    		    <li>
			    		      <h4>business plan</h4>
			    		      <div className="basic_img"><img src={BusinessPlan} alt="Business Plan"/></div>
			    		      <div className="price"><sup>$</sup>96 <span>per month</span></div>
			    		      <ul className="plansub_tag_list">
			    		        <li>Lorem Ipsum</li>
			    		        <li>Lorem Ipsum Dummy</li>
			    		        <li>Lorem Ipsum</li>
			    		      </ul>
			    		      <div className="FREE_btn">
			    		      <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
			    		      </div>
			    		    </li>
			    		  </ul> 
			    		</div>
			    	</Tab>
				    <Tab eventKey={2} title="Yearly">
				    	<div className="tabpanel_hd">Yearly Plans</div>
				    	<div className="plansub_lay">
					        <ul className="plansub_lay_list clearfix">
					          <li>
					            <h4>Basic plan</h4>
					            <div className="basic_img"><img src={BasicPlan} alt="Basic Plan"/></div>
					            <div className="price"><sup>$</sup>22 <span>per month</span></div>
					            <ul className="plansub_tag_list">
					              <li>Lorem Ipsum</li>
					              <li>Lorem Ipsum Dummy</li>
					              <li>Lorem Ipsum</li>
					            </ul>
					            <div className="FREE_btn">
					            <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
					            </div>
					          </li>
					          <li>
					            <h4>Pro plan</h4>
					            <div className="basic_img"><img src={ProPlan} alt="Pro Plan" /></div>
					            <div className="price"><sup>$</sup>42 <span>per month</span></div>
					            <ul className="plansub_tag_list">
					              <li>Lorem Ipsum</li>
					              <li>Lorem Ipsum Dummy</li>
					              <li>Lorem Ipsum</li>
					            </ul>
					            <div className="FREE_btn">
					            <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
					            </div>
					          </li>
					          <li>
					            <h4>business plan</h4>
					            <div className="basic_img"><img src={BusinessPlan} alt="Business Plan"/></div>
					            <div className="price"><sup>$</sup>96 <span>per month</span></div>
					            <ul className="plansub_tag_list">
					              <li>Lorem Ipsum</li>
					              <li>Lorem Ipsum Dummy</li>
					              <li>Lorem Ipsum</li>
					            </ul>
					            <div className="FREE_btn">
					            <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
					            </div>
					          </li>
					        </ul> 
					      </div>
				    </Tab>
				</Tabs>
			</div>
		</section>		
		{/*<section className="price_section">
		  <div className="price_tab">
		    <div className="container">
		      <ul className="nav nav-tabs" role="tablist">
		        <li role="presentation" className="active"><a href="#Monthly" aria-controls="home" role="tab" data-toggle="tab">Monthly</a></li>
		        <li role="presentation"><a href="#Yearly" aria-controls="profile" role="tab" data-toggle="tab">Yearly</a></li>
		      </ul>
		    </div>  
		  </div>  
		  <div className="container">
		    <div className="tab-content">
		    <div role="tabpanel" className="tab-pane active" id="Monthly">
		      <div className="tabpanel_hd">Monthly Plans</div>
		      <div className="plansub_lay">
		        <ul className="plansub_lay_list clearfix">
		          <li>
		            <h4>Basic plan</h4>
		            <div className="basic_img"><img src={BasicPlan} alt="Basic Plan"/></div>
		            <div className="price"><sup>$</sup>22 <span>per month</span></div>
		            <ul className="plansub_tag_list">
		              <li>Lorem Ipsum</li>
		              <li>Lorem Ipsum Dummy</li>
		              <li>Lorem Ipsum</li>
		            </ul>
		            <div className="FREE_btn">
		            <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
		            </div>
		          </li>
		          <li>
		            <h4>Pro plan</h4>
		            <div className="basic_img"><img src={ProPlan} alt="Pro Plan" /></div>
		            <div className="price"><sup>$</sup>42 <span>per month</span></div>
		            <ul className="plansub_tag_list">
		              <li>Lorem Ipsum</li>
		              <li>Lorem Ipsum Dummy</li>
		              <li>Lorem Ipsum</li>
		            </ul>
		            <div className="FREE_btn">
		            <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
		            </div>
		          </li>
		          <li>
		            <h4>business plan</h4>
		            <div className="basic_img"><img src={BusinessPlan} alt="Business Plan"/></div>
		            <div className="price"><sup>$</sup>96 <span>per month</span></div>
		            <ul className="plansub_tag_list">
		              <li>Lorem Ipsum</li>
		              <li>Lorem Ipsum Dummy</li>
		              <li>Lorem Ipsum</li>
		            </ul>
		            <div className="FREE_btn">
		            <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
		            </div>
		          </li>
		        </ul> 
		      </div>
		    </div>
		    <div role="tabpanel" className="tab-pane" id="Yearly">
		      <div className="tabpanel_hd">Yearly Plans</div>
		      <div className="plansub_lay">
		        <ul className="plansub_lay_list clearfix">
		          <li>
		            <h4>Basic plan</h4>
		            <div className="basic_img"><img src={BasicPlan} alt="Basic Plan"/></div>
		            <div className="price"><sup>$</sup>22 <span>per month</span></div>
		            <ul className="plansub_tag_list">
		              <li>Lorem Ipsum</li>
		              <li>Lorem Ipsum Dummy</li>
		              <li>Lorem Ipsum</li>
		            </ul>
		            <div className="FREE_btn">
		            <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
		            </div>
		          </li>
		          <li>
		            <h4>Pro plan</h4>
		            <div className="basic_img"><img src={ProPlan} alt="Pro Plan" /></div>
		            <div className="price"><sup>$</sup>42 <span>per month</span></div>
		            <ul className="plansub_tag_list">
		              <li>Lorem Ipsum</li>
		              <li>Lorem Ipsum Dummy</li>
		              <li>Lorem Ipsum</li>
		            </ul>
		            <div className="FREE_btn">
		            <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
		            </div>
		          </li>
		          <li>
		            <h4>business plan</h4>
		            <div className="basic_img">img src={BusinessPlan} alt="Business Plan"/></div>
		            <div className="price"><sup>$</sup>96 <span>per month</span></div>
		            <ul className="plansub_tag_list">
		              <li>Lorem Ipsum</li>
		              <li>Lorem Ipsum Dummy</li>
		              <li>Lorem Ipsum</li>
		            </ul>
		            <div className="FREE_btn">
		            <button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
		            </div>
		          </li>
		        </ul> 
		      </div>
		    </div>
		  </div>
		  </div>  
		</section>*/}
	</div>
);

export default Pricing;