import React from 'react';

const Guides = () => (
	<>
		<div className="flex flex-col gap-3">
			<h1 className="font-bold text-xl">Introduction</h1>
			<p>
				AccountPal is a web application that compares third-party and
				independent financial statements and records with internal financial
				records and ledgers. It does this accurately with artificial
				intelligence from Open AI and machine learning models like GPT-3 paving
				the way for even smoother future matchings and collaboration of accounts
				from vendors. Accountpal makes the day-to-day balancing of accounts and
				sales easier, faster, and very reliable for Small and Medium
				Enterprises.
			</p>
		</div>
		<div className="flex flex-col gap-5">
			<h1 className="font-bold text-base mt-[2em]">Who It's For</h1>
			<p>
				<span className="font-medium">Freelancers:</span>
				&nbsp;Accurate billing and lots of payment options get you paid faster
				and let clients pay how they like. Recurring invoices, Automated Payment
				Reminders, and Online Payments make it easy.
			</p>
			<p>
				<span className="font-medium"> Self-employed Professionals:</span>
				&nbsp;Payments are all consolidated in one place, and everything is
				organized and easy to track
			</p>
			<p>
				<span className="font-medium"> Small Businesses:</span>
				&nbsp;Bookkeeping and tax filing become easy by highlighting all
				transactions with discrepancies.
			</p>
			<p>
				<span className="font-medium"> Accountants:</span>
				&nbsp;Auditing accounts for Businesses become easy as invoice matching
				becomes easy with our artificial intelligence bot.
			</p>
		</div>
	</>
);

export default Guides;
