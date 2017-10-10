import React, {Component} from 'react';
import VideoButton from "../images/vidoBtn.png";
import VideoFrame from "../images/videoFrame.jpg";

class HowItWorks extends Component {
	constructor() {
		super();
		this.state = {
			showVideo: false,
			src:"",
			tmpSrc:""
		}
	}
	componentDidMount() {
		this.setState({tmpSrc: this.props.site.settings.how_it_works.video_url});
	}
	render() {
		const {showVideo, src} = this.state;
		
		return (
			<section className="hotItWrksSection">
				<div className="container">
			    	<div className="howItWrksWrap">

			    		<div className={showVideo ? "hidden":"howItWrksTxt"}>
			            	<h1 className="mainHedin">How it <span>Works</span></h1>
			                <p>{this.props.site.settings.how_it_works.video_text}</p>
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
		this.setState({showVideo: true, src: `${this.state.tmpSrc}?autoplay=1`});
	}
};

export default HowItWorks;