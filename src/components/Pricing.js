/* global IMAGE_PATH */
import React,{Component} from 'react';
import {CMSStyle} from './common/CustomStyle';
import PriceBanner from '../images/price_banner.png';
import {Tabs, Tab} from 'react-bootstrap';
import ScrollToTopOnMount from './common/ScrollToTopOnMount';
import {Http} from '../lib/Http';
import { LinkContainer } from 'react-router-bootstrap';
class Pricing extends Component {
	constructor(props) {
      	super(props);
      	this.state = {
      		plan: [],
      		key: 1
      	}
    }
    componentDidMount() {
    	this.switchPlan('monthly');
    }
    switchPlan(name) {
    	Http.get(`plans_list?type=${name}`)
    	.then(({data}) => this.setState({plan: data}))
    	.catch(errors => console.log(errors));
    }
    handleSelect(key) {
		let plan = key === 1 ? 'monthly' : 'yearly';
		this.switchPlan(plan);
		this.setState({key});
	}
	render() {
		const {plan, key} = this.state;
		const renderPlan = plan.length > 0 ? plan.map((value, index) => {
  			return (
  				<li key={index}>
					<h4>{value.name}</h4>
					<div className="basic_img"><img src={`${IMAGE_PATH}/${value.image.path}`} alt={value.name}/></div>
					<div className="price"><sup>$</sup>{value.price} <span>per { value.type === 'monthly' ? 'month' : 'year' }</span></div>
					<ul className="plansub_tag_list">
						{value.features.map((val, i) => <li key={i}>{val}</li>)}
					</ul>
					<div className="FREE_btn">
						<LinkContainer to="/register">
							<button type="button" className="btn btn-default FREE_btn_box">START FOR FREE</button>
						</LinkContainer>
					</div>
  				</li>
  			)
  		}): null;
  		if( plan.length > 0 ) {
			return (
				<div>
					<ScrollToTopOnMount/>
					<section className="inner_banner" style={CMSStyle(PriceBanner)}>
					  <div className="container">
					     <div className="inner_banner_txt">PRICING</div>
					  </div>  
					</section>
					<section className="price_section">
						<div className="price_tab positionrel">
						<div className="price_tab_bg"></div>
							<Tabs className="container" activeKey={key} onSelect={(e) => this.handleSelect(e)} id="uncontrolled-tab-example">
						    	<Tab eventKey={1} title="Monthly">
						    		<div className="tabpanel_hd">Monthly Plans</div>
						    		<div className="plansub_lay">
						    		  <ul className="plansub_lay_list clearfix">
						    		  	{renderPlan}
						    		  </ul> 
						    		</div>
						    	</Tab>
							    <Tab eventKey={2} title="Yearly">
							    	<div className="tabpanel_hd">Yearly Plans</div>
							    	<div className="plansub_lay">
								        <ul className="plansub_lay_list clearfix">
								          	{renderPlan}
								        </ul> 
								      </div>
							    </Tab>
							</Tabs>
						</div>
					</section>
				</div>
			);
		}  else {
			return <div className="loader">Loading ...</div>;	
		}	
	}
	
}		

export default Pricing;