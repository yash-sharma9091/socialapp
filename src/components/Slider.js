import React from 'react';
import Slider from 'react-slick';
import {SliderImages, SliderSettings} from './common/CustomStyle';
import ScrollImage from "../images/scrool.png";
import ScrollHoverImage from "../images/scroolHovr.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
	
	return (
		<section className="sliderSection">
		    <div className="containerFluidAll">
	    		<Slider {...SliderSettings}>
	    		{SliderImages.map((value, index) => {
	    			return(
	    				<div className="item" key={index} style={value.image}>
	    					<div className="containerS">
	    				    	<div className="sliderCaptionWrap">
	    				        	<h2 className="heading1Y">Increase Your Website <span>Conversions</span></h2>
	    				            <p className="para1W">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
	    				        </div>
	    				    </div>
	    				</div>
	    			);
	    		})}
	            </Slider>
	            {/*<div className="item" style="background:url('images/banner1.jpg')">
	           	  <div className="containerS">
	                	<div className="sliderCaptionWrap">
	                    	<h2 className="heading1Y">Increase Your Website <span>Conversions</span></h2>
	                        <p className="para1W">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
	                    </div>
	                </div>
	            </div>      
	            <div className="item" style="background:url('images/banner1.jpg')">
	           	  <div className="containerS">
	                	<div className="sliderCaptionWrap">
	                    	<h2 className="heading1Y">Increase Your Website <span>Conversions</span></h2>
	                        <p className="para1W">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
	                    </div>
	                </div>
	            </div>  */}                   
		        <div className="containerS1">
		        	<div className="scrolDwnWrap">
		                <a href="/" id="scrolDwn1">
		                	<span className="icnWrapperL">
		                		<img src={ScrollImage} alt="ScrollImage" className="scrlNrml" /> 
		                		<img src={ScrollHoverImage} alt="ScrollHoverImage" className="scrlHvr" />
		                	</span>
		                	<span>SCROLL DOWN</span>
		                </a>
		            </div>
		        </div>
		    </div>
		</section>
	);
}

export default HomeSlider;