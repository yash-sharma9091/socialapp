/* global IMAGE_PATH,_ */
import React, {Component} from 'react';
import {Http} from '../lib/Http';
import {CMSStyle} from './common/CustomStyle';
import ScrollToTopOnMount from './common/ScrollToTopOnMount';
class CMS extends Component {
	constructor() {
		super();
		this.state = {
			page: {}
		};
	}
	componentDidMount() {
		const {match} = this.props;
		Http.get(`cms/get/${match.params.slug}`)
		.then(({data}) => this.setState({page: data}))
		.catch(error => console.log(error));
	}
	render() {
		const {page} = this.state;
		if( !_.isEmpty(page) ) {
			return (
				<div>
					<ScrollToTopOnMount/>
					<section className="inner_banner" style={CMSStyle(`${IMAGE_PATH}/${page.banner_image.path}`)}>
			      		<div className="container">
			         		<div className="inner_banner_txt">
			            		{/*Privacy <span>Policy</span>*/}
			            		{page.title}
			         		</div>
			      		</div>  
			    	</section>
			    	<section>
				      	<div className="container">
				        	<div className="terms_panel" > <div dangerouslySetInnerHTML={{__html: page.description}}></div></div>
				      	</div>  
					</section>
				</div>
			);
		} else {
			return <div className="loader">Loading ...</div>;
		}	
	}
}

export default CMS;