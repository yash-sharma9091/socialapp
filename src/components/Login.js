import React from 'react';
import LoginForm from './LoginForm';
import LoginBanner from '../images/login_banner.jpg';

const Login = () => {
	const style = {
		backgroundSize: 'cover',
		backgroundImage: 'url(' + LoginBanner + ')',
		backgroundPosition: 'top left',
		backgroundRepeat: 'no-repeat'
	};
	return (
		<section className="loginsection" style={style}>
		  <div className="container">
		    <div className="sign_con">
		      <div className="sign_con_inner">
		        <div className="signhd">Sign in</div>
		        <div className="form supporfom">
		          <LoginForm/>
		        </div>
		      </div>
		      <div className="right_sign">
		        <div className="right_sign_inner">
		          <div className="right_sign_cell">
		            <div className="sign_up_lay">
		              <div className="signhd signhd_gray">Sign up</div>
		              <p>Please enter your details to sign up and increase your
		                website conversions.</p>
		              <button type="button" className="btn btn-default graybtn rpl">Sign up</button>
		            </div>  
		          </div>
		        </div>  
		      </div> 
		    </div>  
		  </div>  
		</section>
	);
}

export default Login;