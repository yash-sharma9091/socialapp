import React from 'react';
import HowItWorks from './HowItWorks';
import Steps from './Steps';
import KnowMore from './KnowMore';
import Trail from './Trail';
import Slider from './Slider';
import AlertModalDialog from './AlertModalDialog';
const Home = ({location}) => {
	let confirmDialog = new URLSearchParams(location.search).get('emailVerified');
	return (
		<div>
			<Slider/>
			<Trail/>
			<KnowMore/>
			<Steps/>
			<HowItWorks/>
			{confirmDialog ? <AlertModalDialog title="Email Verification" alertMsg="Thanks, Your email is verified successfully you can now login."/> : null }
		</div>
	);
}	

export default Home;