import React from 'react';

const TopHeader = (props) => {
	console.log(props);
	return (
		<header>{props.children}</header>
	);
}	

export default TopHeader;