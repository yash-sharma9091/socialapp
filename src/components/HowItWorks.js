import React from 'react';
import VideoButton from "../images/vidoBtn.png";
import VideoFrame from "../images/videoFrame.jpg";

const HowItWorks = () => {
	return (
		<section className="hotItWrksSection">
			<div className="container">
		    	<div className="howItWrksWrap">
		    		<div className="howItWrksTxt">
		            	<h1 className="mainHedin">How it <span>Works</span></h1>
		                <p>Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. </p>
		            </div>
		        	<div className="howItWrksVdo">
		            	<img src={VideoFrame} alt="VideoFrame"/>
		                <div className="howItWrksVdoBtn">
		       	      		<a href="/" id="vidoGnrtr"><img src={VideoButton} alt="How it works"/></a>
		                </div>
		                <div className="videWrapr">
		                	<iframe title="How it works" src="https://www.youtube.com/embed/4pV9kXhxFY4" frameBorder="0" allowFullScreen />
		                </div>
		            </div>
		        </div>
		    </div>
		</section>
	);
};

export default HowItWorks;