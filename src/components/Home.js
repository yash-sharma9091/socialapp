import React from 'react';
import HowItWorks from './HowItWorks';
import Steps from './Steps';
import KnowMore from './KnowMore';
import Trail from './Trail';
import Slider from './Slider';
const Home = () => (
	<div>
		<Slider/>
		<Trail/>
		<KnowMore/>
		<Steps/>
		<HowItWorks/>
	</div>
);

export default Home;