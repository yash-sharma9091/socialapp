/* global IMAGE_PATH */
import React from 'react';
import Slider from 'react-slick';
import {SliderSettings} from './common/CustomStyle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = ({site}) => {
	const {banner_img} = site.settings;
	
	return (
		<section className="sliderSection">
		    <div className="containerFluidAll">
	    		<Slider {...SliderSettings}>
	    		{banner_img.map((value, index) => {
	    			const image = {
	    				backgroundImage: 'url(' + (IMAGE_PATH + '/' + value.path) + ')'
	    			}
	    			return(
	    				<div className="item" key={index} style={image}>
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
		    </div>
		</section>
	);
}

export default HomeSlider;