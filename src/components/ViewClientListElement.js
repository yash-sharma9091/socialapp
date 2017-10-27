/* global moment */
import React from 'react';

const ViewClientListElement = ({client, subscription_details}) => {
	return (
		<tr>
			<td><img src={client.image_url} alt="{client.name}"/> {client.name}</td>
			<td>{client.location}</td>
			<td>{client.plan}</td>
			<td>{ moment(subscription_details.expiration_date).format('MMM DD, YYYY')}</td>
		</tr>
	)
}

export default ViewClientListElement;