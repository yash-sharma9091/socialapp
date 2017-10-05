import React from 'react';
import {Link} from 'react-router-dom';

const Trail = () => {
	return (
		<section className="trialSection">
			<div className="container">
		    	<h1 className="mainHedin">Start Your Free <span>14 Days Trial</span></h1>
		        <p className="mainPara">Boost Conversions &amp; Sales On Your Website</p>
		        <Link to="/register" className="mainBtnH mainBtn">GET STARTED</Link>
		    </div>
		</section>
	);
};

export default Trail;