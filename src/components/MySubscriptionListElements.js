/* global moment */
import React from 'react';
//import {Link} from 'react-router-dom';

const MySubscriptionListElement = ({show, list}) => {
	return (
		<tr>
			<td><a className="bluecolor" href={list.website_url} target="_blank">{list.website_url}</a></td>
			<td>{list.name}</td>
			<td>${list.price}</td>
			<td>{moment(list.expiration_date).format('MMM DD, YYYY')}</td>
			<td>
				<a className="btn table_btn " href="/" role="button">Cancel</a>
				<a className="btn table_btn " href="/" role="button">Review</a>
			</td>
		</tr>
	);
}

export default MySubscriptionListElement;