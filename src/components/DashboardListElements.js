/* global moment */
import React from 'react';
import {Link} from 'react-router-dom';

const DashboardListElement = ({show, list}) => {

	return (
		<tr>
			<td><a className="bluecolor" href={list.website_url} target="_blank">{list.website_url}</a></td>
			<td>{list.name}</td>
			<td>${list.price}</td>
			<td>{moment(list.expiration_date).format('MMM DD, YYYY')}</td>
			<td>
				<Link className="btn table_btn " to={`/client-list/${list._id}`} >View Client List</Link>
				<button type="button" className="btn table_btn" onClick={() => show('showSampleCSVPrompt', {client:list})}>Import Client List</button>
				<a className="btn table_btn " href="/" role="button">Export Client List</a>
				<button type="button" className="btn table_btn" onClick={() => show('showScriptCodeDialog', {client:list})}>View Script Code</button>
			</td>
		</tr>
	);
}

export default DashboardListElement;