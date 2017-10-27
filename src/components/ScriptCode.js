/* http://www.addressmunger.com/display_code/ */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-bootstrap';
class ScriptCode extends Component {
	/*myFunction() {
	  var copyText = document.getElementById("myInput");
	  copyText.select();
	  document.execCommand("Copy");
	  alert("Copied the text: " + copyText.value);
	}*/
	render() {
		const {show, hideDialog, user, client} = this.props;
		const _id = user._id, subscription_id = client._id;
		return (
			<Modal show={show} onHide={hideDialog} className="scriptModal">
				<Modal.Header closeButton>
					<Modal.Title>Script <strong>Code</strong></Modal.Title>
				</Modal.Header>	
				<Modal.Body >
					<div className="modal-body">
						<p> Copy below code and paste right after opening <code>&lt;head&gt;</code> of your website everypage</p>
						<pre className="styledText preline">
						&lt;script&gt;
					  		&#33;function&#40;&#41;&#123;function e&#40;e&#44;t&#41;&#123;var n&#61;&#40;new Date&#41;&#46;getTime&#40;&#41;&#44;s&#61;document&#46;createElement&#40;&#34;script&#34;&#41;&#59;s&#46;async&#61;t&#63;&#33;&#48;&#58;&#33;&#49;&#44;s&#46;src&#61;e&#43;&#34;&#63;&#34;&#43;n&#59;var a&#61;document&#46;getElementsByTagName&#40;&#34;script&#34;&#41;&#91;&#48;&#93;&#59;a&#46;parentNode&#46;insertBefore&#40;s&#44;a&#41;&#125;function t&#40;&#41;&#123;var 
e&#61;&#40;new Date&#41;&#46;getTime&#40;&#41;&#59;document&#46;querySelector&#40;&#34;head&#34;&#41;&#46;innerHTML&#43;&#61;&#39;&#60;link href&#61;&#34;http&#58;&#47;&#47;localhost&#58;&#57;&#48;&#48;&#48;&#47;assets&#47;css&#47;socialproof&#46;css&#63;&#39;&#43;e&#43;&#39;&#34; rel&#61;&#34;stylesheet&#34;&#62;&#39;&#125;function n&#40;&#41;&#123;var e&#61;document&#46;createElement&#40;&#34;div&#34;&#41;&#59;e&#46;setAttribute&#40;&#34;id&#34;&#44;&#34;output&#34;&#41;&#44;document&#46;body&#46;appendChild&#40;e&#41;&#125;var 
s&#61;window&#59;s&#46;addEventListener&#40;&#34;load&#34;&#44;n&#41;&#44;s&#46;addEventListener&#40;&#34;load&#34;&#44;function&#40;&#41;&#123;t&#40;&#41;&#44;e&#40;&#34;http&#58;&#47;&#47;localhost&#58;&#57;&#48;&#48;&#48;&#47;assets&#47;js&#47;socialproof&#46;js&#34;&#44;&#33;&#48;&#41;&#44;e&#40;&#34;https&#58;&#47;&#47;cdnjs&#46;cloudflare&#46;com&#47;ajax&#47;libs&#47;socket&#46;io&#47;&#50;&#46;&#48;&#46;&#52;&#47;socket&#46;io&#46;js&#34;&#44;&#33;&#49;&#41;&#125;&#41;&#44;window&#46;proof&#95;config&#61;&#123;&#95;id&#58;{_id}&#44;subscription&#95;id&#58;{subscription_id}&#125;&#125;&#40;&#41;&#59;
						&lt;script&gt;							
						</pre>
					</div>
					<div className="modal-footer text-center">
					  <button type="button" className="btn yellobtn">COPY CODE</button>
					</div>
				</Modal.Body>
			</Modal>		
		);
	}	
}

// prop checks
ScriptCode.propTypes = {
  	show: PropTypes.bool.isRequired,
  	hideDialog: PropTypes.func.isRequired
}

export default ScriptCode;