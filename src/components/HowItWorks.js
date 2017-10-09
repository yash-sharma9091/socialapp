import React, {Component} from 'react';
import VideoButton from "../images/vidoBtn.png";
import VideoFrame from "../images/videoFrame.jpg";

class HowItWorks extends Component {
	constructor() {
		super();
		this.state = {
			showVideo: false,
			src:""
		}
	}
	render() {
		const {showVideo, src} = this.state;
		return (
			<section className="hotItWrksSection">
				<div className="container">
			    	<div className="howItWrksWrap">

			    		<div className={showVideo ? "hidden":"howItWrksTxt"}>
			            	<h1 className="mainHedin">How it <span>Works</span></h1>
			                <p>Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. </p>
			            </div>
			        	<div className="howItWrksVdo">
			            	<img className={showVideo ? "hidden" : ""} src={VideoFrame} alt="VideoFrame"/>
			                <div onClick={() => this.showVideo()} className={showVideo ? "hidden" : "howItWrksVdoBtn cursor"}>
			       	      		<img src={VideoButton} alt="How it works"/>
			                </div>
			                <div className={showVideo ? "": "videWrapr"}>
			                	<iframe title="How it works" src={src} frameBorder="0" allowFullScreen />
			                </div>
			            </div>
			        </div>
			    </div>
			</section>
		);
	}	

	showVideo() {
		this.setState({showVideo: true, src: "https://www.youtube.com/embed/4pV9kXhxFY4?autoplay=1"});
	}
};

export default HowItWorks;