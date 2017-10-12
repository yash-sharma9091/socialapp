import React from 'react';

const DashboardListElement = ({show}) => {
	return (
		<tr>
		  <td><a className="bluecolor" href="">www.zavater.com</a></td>
		  <td>Pro</td>
		  <td>$79</td>
		  <td>Mar 24, 2017</td>
		  <td>
		    <a className="btn table_btn " href="/" role="button">View Client List</a>
		    <a className="btn table_btn " href="/" role="button">Import Client List</a>
		    <a className="btn table_btn " href="/" role="button">Export Client List</a>
		    <button type="button" className="btn table_btn" onClick={show}>View Script Code</button>
		  </td>
		</tr>
	);
}

export default DashboardListElement;