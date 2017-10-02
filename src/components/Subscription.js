import React, {Component} from 'react';
import BasicPlan from '../images/basic_img.png';
import ProPlan from '../images/basic_img2.png';
import BusinessPlan from '../images/basic_img3.png';

class Subscription extends Component {
	render() {
		return(
			<div>
				<div className="clearfix radio_month text-center">  
				  <div className="radio">
				    <label>
				      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />Monthly   
				    </label>
				  </div>
				  <div className="radio">
				    <label>
				      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />Yearly
				    </label>
				  </div>
				</div>
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
				      <div className="basic_img"><img src={ProPlan} alt="Pro Plan"/></div>
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
				{/*<div class="form-group margin-bot10 clearfix">
				    <button type="button" class="btn btn-default yellobtn pull-left">Back</button>
				</div>*/}
			</div>
		);
	}
}

export default Subscription;