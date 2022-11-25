import React from 'react';

const data = [
	{
		name: 'Mac Book',
		description: '$1000',
		Withdrawals: '5',
		Deposit: '3/22/22',
		Date: '$3,000',
		Balance: '$30,00',
		Total: '$3,030',
	},
	{
		name: 'Mac Book',
		description: '$1000',
		Withdrawals: '5',
		Deposit: '3/22/22',
		Date: '$3,000',
		Balance: '$30,00',
		Total: '$3,030',
	},
	{
		name: 'Mac Book',
		description: '$1000',
		Withdrawals: '5',
		Deposit: '3/22/22',
		Date: '$3,000',
		Balance: '$30,00',
		Total: '$3,030',
	},
	{
		name: 'Mac Book',
		description: '$1000',
		Withdrawals: '5',
		Deposit: '3/22/22',
		Date: '$3,000',
		Balance: '$30,00',
		Total: '$3,030',
	},
	{
		name: 'Mac Book',
		description: '$1000',
		Withdrawals: '5',
		Deposit: '3/22/22',
		Date: '$3,000',
		Balance: '$30,00',
		Total: '$3,030',
	},
	{
		name: 'Mac Book',
		description: '$1000',
		Withdrawals: '5',
		Deposit: '3/22/22',
		Date: '$3,000',
		Balance: '$30,00',
		Total: '$3,030',
	},
	{
		name: 'Mac Book',
		description: '$1000',
		Withdrawals: '5',
		Deposit: '3/22/22',
		Date: '$3,000',
		Balance: '$30,00',
		Total: '$3,030',
	},
	{
		name: 'Mac Book',
		description: '$1000',
		Withdrawals: '5',
		Deposit: '3/22/22',
		Date: '$3,000',
		Balance: '$30,00',
		Total: '$3,030',
	},
];

const Transactions = () => (
	<div className="hero-div flex flex-col gap-3 text-[0.6em] md:text-sm ">
		<div className="flex w-full justify-between hero-filter text-center md:text-left bg-[#D1E9FF] p-[1em] ">
			<div className="flter  w-[14%]">Item Description</div>
			<div className="flter  w-[14%]">Price</div>
			<div className="flter  w-[14%]">Quantity</div>
			<div className="flter  w-[14%]">Date</div>
			<div className="flter  w-[14%]">Amount</div>
			<div className="flter  w-[14%]">Tax</div>
			<div className="flter  w-[14%]">Total</div>
		</div>
		<div>
			{data.map((user) => (
				<div
					key={Math.random()}
					className="user pb-3 flex justify-between items-center order-details text-left text-slate-700 "
				>
					<div className="order-name w-[14%]">{user.name}</div>
					<div className="order-name w-[14%]">{user.description}</div>
					<div className="order-name w-[14%] ">{user.Withdrawals}</div>
					<div className="order-name w-[14%] ">{user.Deposit}</div>
					<div className="order-name w-[14%] ">{user.Date}</div>
					<div className="order-action w-[14%] ">{user.Balance}</div>
					<div className="order-action w-[14%] ">{user.Total}</div>
				</div>
			))}
			<div className="flex justify-between items-center font-semibold mt-[1em] px-[1em] border-b pb-[0.5em]">
				<p>Total</p>
				<p>$25,250</p>
			</div>
		</div>
	</div>
);

export default Transactions;
