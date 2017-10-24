import React from 'react';
import { Table } from 'react-bootstrap';
const CardInfo = ({cards}) => {
	return (
  		<Table bordered hover>
			{cards.data.map((value, index) => (
			<tbody key={index}>	
				<tr>
					<td><strong>ID:</strong></td>
					<td>{value.id}</td>
				</tr>
				<tr>
					<td><strong>Name:</strong></td>
					<td>{value.name || '-'}</td>
				</tr>
				<tr>
					<td><strong>Number:</strong></td>
					<td>{`****${value.last4}`}</td>
				</tr>
				<tr>
					<td><strong>Expires:</strong></td>
					<td>{`${value.exp_month} / ${value.exp_year}`}</td>
				</tr>
				<tr>
					<td><strong>Type:</strong></td>
					<td>{`${value.brand} credit card`}</td>
				</tr>
				<tr>
					<td><strong>Origin:</strong></td>
					<td>{value.country}</td>
				</tr>
				<tr>
					<td><strong>CVC check:</strong></td>
					<td>{value.cvc_check}</td>
				</tr>			
			</tbody>	
			))}
		</Table>
	);
}

export default CardInfo;