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
import {Loader} from './common/Loader';

class Home extends Component {
	componentDidMount()  {
		this.props.dispatch({type: FETCH_SITE_SETTINGS});
	}
	render() {
		const{site, location, dispatch} = this.props;
		let confirmDialog = new URLSearchParams(location.search).get('emailVerified');
		
		if( !_.isEmpty(site.settings) ) {
			return (
				<div>
					<Slider dispatch={dispatch} site={site}/>
					<Trail/>
					<KnowMore/>
					<Steps site={site}/>
					<HowItWorks site={site}/>
					{confirmDialog ? <AlertModalDialog title="Email Verification" alertMsg="Thanks, Your email is verified successfully you can now login."/> : null }
				</div>
			);	
		} else {
			return <Loader/>;
		}
		
	}	
}	

function mapStateToProps(state) {
  	return {
    	site: state.settings
  	};
}
export default connect(mapStateToProps)(Home);