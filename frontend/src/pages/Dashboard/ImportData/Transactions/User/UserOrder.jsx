import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

const UserOrder = ({
	name,
	description,
	withdrawals,
	deposit,
	date,
	balance,
}) => {
	<div className="user pb-3 flex justify-between order-details ">
		<div className="order-name">{name}</div>
		<div className="order-name">{description}</div>
		<div className="order-name text-[#F04438]">{withdrawals}</div>
		<div className="order-name text-[#12B76A]">{deposit}</div>
		<div className="order-name">{date}</div>
		<div className="order-action">$12,000</div>
	</div>;
};

UserOrder.propType = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	withdrawals: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	balance: PropTypes.string.isRequired,
};

export default UserOrder;
