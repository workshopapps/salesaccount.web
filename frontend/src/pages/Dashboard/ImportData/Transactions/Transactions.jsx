import React from 'react';
import UserOrder from './User/UserOrder';

export const data = [
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

const Transactions = () => {
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
			<UserOrder
				key={Math.random() * Math.random()}
				id={Math.random() * Math.random()}
				name={user.name}
				description={user.description}
				withdrawals={user.Withdrawals}
				deposit={user.Deposit}
				date={user.Date}
				balance={user.Balance}
			/>
		))}
	</div>;
};

export default Transactions;
