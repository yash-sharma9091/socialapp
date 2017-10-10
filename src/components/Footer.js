/* global _ */
import React, {Component} from 'react';
import FooterLinks from './FooterLinks';
import {connect} from 'react-redux';
import Address from './Address';

class Footer extends Component {
	render () {
		const{site} = this.props;
		if( !_.isEmpty(site.settings) ){
			return (
				<footer>
		      		<div className="container clearfix">
			     	  	<Address site={site.settings.site}/>
						<FooterLinks links={site.links}/>
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
    	site: state.settings
  	};
}
export default connect(mapStateToProps)(Footer);