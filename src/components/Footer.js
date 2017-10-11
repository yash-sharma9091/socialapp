/* global _ */
import React, {Component} from 'react';
import FooterLinks from './FooterLinks';
import {connect} from 'react-redux';
import Address from './Address';

class Footer extends Component {
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