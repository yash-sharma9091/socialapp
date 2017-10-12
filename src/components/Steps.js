import React from 'react';
import Step_1 from '../images/UsingTool1.png';
import Step_2 from '../images/UsingTool2.png';
import Step_3 from '../images/UsingTool3.png';
const Steps = ({site}) => {
	
	const { step1, step2, step3 } = site.settings.simple_steps;
	return(
		<section className="usingToolsSection">
			<div className="container">
		    	<h1 className="mainHedin">Using Tool In <span>3 Simple Steps</span></h1>
		        <div className="usingToolsWrap clearfix">
		        	<div className="usingToolsItm pull-left">
		            	<img src={Step_1} alt="Step 1" />
		                <h3 className="mainSmlHdin">{step1.title}</h3>
		                <p>{step1.text}</p>
		            </div>
		            <div className="usingToolsItm pull-left">
		            	<img src={Step_2} alt="Step 2"/>
		                <h3 className="mainSmlHdin">{step2.title}</h3>
		                <p>{step2.text}</p>
		            </div>
		            <div className="usingToolsItm pull-left">
		            	<img src={Step_3} alt="Step 3" />
		                <h3 className="mainSmlHdin">{step3.title}</h3>
		                <p>{step3.text}</p>
		            </div>
		        </div>
		    </div>
		</section>
	);
};

export default Steps;