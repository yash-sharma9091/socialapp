import React from 'react';
import {Dropdown} from 'react-bootstrap';
export const DropdownWithoutActiveProps = (props) => {
	const { active, activeKey, activeHref, ...rest } = props
	return <Dropdown {...rest} />
};