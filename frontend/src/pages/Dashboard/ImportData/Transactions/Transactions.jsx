import React from 'react';
// import { useAuth } from '../../../../Store/Context';
import PropTypes from 'prop-types';

const data = [
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '$-12,000',
		Deposit: '',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '$-12,000',
		Deposit: '',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '',
		Deposit: '$12,000',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '',
		Deposit: '$12,000',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '$-12,000',
		Deposit: '',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '$-12,000',
		Deposit: '',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '',
		Deposit: '$12,000',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '',
		Deposit: '$12,000',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '$-12,000',
		Deposit: '',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '$-12,000',
		Deposit: '',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '',
		Deposit: '$12,000',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '',
		Deposit: '$12,000',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '$-12,000',
		Deposit: '',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '$-12,000',
		Deposit: '',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '',
		Deposit: '$12,000',
		Date: '3/22/22',
		Balance: '$12,000',
	},
	{
		name: 'James Kirk',
		description: 'Ordered 12 Mac Book',
		Withdrawals: '',
		Deposit: '$12,000',
		Date: '3/22/22',
		Balance: '$12,000',
	},
];

// const { localData } = useAuth()

const Transactions = () => (
	<div className="hero-div flex flex-col gap-3 text-[0.6em] md:text-sm ">
		<div className="flex w-full justify-between hero-filter  bg-[#D1E9FF] p-[1em]">
			<div className="flter">Name</div>
			<div className="flter ">Description</div>
			<div className="flter ">Withdrawals</div>
			<div className="flter ">Deposit</div>
			<div className="flter ">Date</div>
			<div className="flter ">Balance</div>
		</div>

		{data.map((user) => (
			<div
				key={Math.random() * Math.random()}
				className="user pb-3 flex justify-between order-details "
			>
				<div className="order-name">{user.name}</div>
				<div className="order-name">{user.description}</div>
				<div className="order-name text-[#F04438]">{user.Withdrawals}</div>
				<div className="order-name text-[#12B76A]">{user.Deposit}</div>
				<div className="order-name">{user.Date}</div>
				<div className="order-action">{user.Balance}</div>
			</div>
		))}
	</div>
);
export default Transactions;
