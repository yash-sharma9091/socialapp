/* global _ */
import React, {Component} from 'react';
import FooterLinks from './FooterLinks';
import Address from './Address';
import {connect} from 'react-redux';
import { FETCH_SITE_SETTINGS } from '../constant';

class Footer extends Component {
	componentDidMount()  {
		this.props.dispatch({type: FETCH_SITE_SETTINGS});
	}
	render () {
		const{site, token} = this.props;
		if( !_.isEmpty(site.settings) ){
			return (
				<footer>
		      		<div className="container clearfix">
			     	  	<Address site={site.settings.site}/>
						<FooterLinks token={token} links={site.links}/>
		      		</div>  	
		  		</footer>
			);
		} else {
			return null;
		}	
	}	
};

function mapStateToProps(state) {
  	return {
    	site: state.settings,
    	token: state.auth.token
  	};
}
export default connect(mapStateToProps)(Footer);