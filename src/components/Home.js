/* global _ */
import React, {Component} from 'react';
import HowItWorks from './HowItWorks';
import Steps from './Steps';
import KnowMore from './KnowMore';
import Trail from './Trail';
import Slider from './Slider';
import AlertModalDialog from './AlertModalDialog';
import {connect} from 'react-redux';
import { FETCH_SITE_SETTINGS } from '../constant';

class Home extends Component {
	componentDidMount()  {
		this.props.dispatch({type: FETCH_SITE_SETTINGS});
	}
	render() {
		let confirmDialog = new URLSearchParams(this.props.location.search).get('emailVerified');
		const{site} = this.props;
		if( !_.isEmpty(site.settings) ) {
			return (
				<div>
					<Slider site={site}/>
					<Trail/>
					<KnowMore/>
					<Steps site={site}/>
					<HowItWorks site={site}/>
					{confirmDialog ? <AlertModalDialog title="Email Verification" alertMsg="Thanks, Your email is verified successfully you can now login."/> : null }
				</div>
			);	
		} else {
			return <div className="marginTop10"><div className="loader">Loading ...</div></div>;
		}
		
	}	
}	

function mapStateToProps(state) {
  	return {
    	site: state.settings
  	};
}
export default connect(mapStateToProps)(Home);