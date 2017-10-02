import React from 'react';
import {style} from './common/CustomStyle'; 
import {MatchComponentPath} from './common/MatchComponentPath'; 

const Wrapper = (props) => {
	return (
		<section className="loginsection" style={style}>
		  	<div className="container">
		    	{ MatchComponentPath(props) }
		  	</div>  
		</section>
	);
}

export default Wrapper;