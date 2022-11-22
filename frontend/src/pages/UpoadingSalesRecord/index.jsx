/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import data from './mockdata.json';

const UpoadingSalesRecord = () => {
	const [contacts, setContacts] = useState(data);

	return (
		<div className="m-8 ">
			<div className="inline px-2 py-8 ml-2">
				<div className="left-0 h-10 top-9">
					<h2 className="h-10 text-xl font-semibold md:text-2xl lg:text-5xl font-Lexend">
						Uploaded Sales Records Ready!
					</h2>
				</div>

				<div className="flex flex-col gap-4 py-4 mt-3">
					<div className="flex justify-between w-full mt-5">
						<div className="flex items-center">
							<label
								htmlFor="display"
								className="mr-2 text-base font-medium text-borderB font-Lexend"
							>
								Display
							</label>
							<select
								name=""
								id="display"
								className=" border border-[#939393] rounded-xl p-2 w-80 h-9 mr-2 text-base font-medium text-borderB font-Lexend"
							>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-10 text"
									value=""
								>
									All
								</option>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-7 text"
									value=""
								>
									Recent Transactions
								</option>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-7 text"
									value=""
								>
									Date
								</option>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-7 text"
									value=""
								>
									Amount
								</option>
								<option
									disabled
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-sm text-deposit leading-7 text"
									value=""
								>
									close
								</option>
							</select>
						</div>

						<div>
							<select
								name=""
								id=""
								className=" border border-[#939393] justify-center p-2 pb-0 w-48 h-9 mr-2 text-base font-medium text-borderB font-Lexend overflow-hidden rounded-xl"
							>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-10 text"
									value=""
								>
									Sort By
								</option>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-10 text"
									value=""
								>
									All
								</option>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-7 text"
									value=""
								>
									Recent Transactions
								</option>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-7 text"
									value=""
								>
									Date
								</option>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-lg leading-7 text"
									value=""
								>
									Amount
								</option>
								<option
									className=" w-96 h-20 bg bg-[#EFF8FF] bg-opacity-30 font-Lexend font-normal text-sm text-deposit leading-7 text"
									value=""
								>
									close
								</option>
							</select>
						</div>
					</div>

					<table className="w-full table-auto bg-searchBar rounded-xl">
						<thead>
							<tr className="w-full ">
								<th className=" border-spacing-6">
									<p className="py-5 pl-4 text-base font-semibold text-left sm:text-sm whitespace-nowrap md:text-lg lg:text-xl h-14 top-2 font-Lexend">
										Recent Sales
									</p>
								</th>
								<th> </th>
								<th> </th>
								<th> </th>
								<th> </th>
								<th> </th>
								<th> </th>
								<th className="w-fit">
									<div className="flex justify-between w-48 sm:w-fit md:w-fit lg:w-fit ">
										<form className="w-full max-w-md " action="">
											<div className="relative flex items-center text-search ">
												<FaSearch className="absolute w-5 h-5 ml-3" />
												<input
													type="text"
													name="search"
													placeholder="search"
													aria-label="search"
													className="w-full py-3 pl-10 pr-3 font-light text-black h-11 placeholder-search rounded-xl "
												/>
											</div>
										</form>
									</div>
								</th>
								.
							</tr>
							<tr className="py-6 bg-thead w-80">
								<th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
									Item Description
								</th>
								<th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
									Price
								</th>
								<th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
									Withdrawals
								</th>
								<th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
									Quantity
								</th>
								<th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
									Date
								</th>
								<th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
									Amount
								</th>
								<th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
									Tax
								</th>
								<th className="h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80">
									Total
								</th>
							</tr>
						</thead>
						<tbody>
							{contacts.map((c) => (
								<tr className="border-b border-b-search border-opacity-20 ">
									<td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-spacing-2 w-80 font-Lexend">
										{contacts.itemDescription}
									</td>
									<td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend">
										{contacts.Price}
									</td>
									<td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend text-withdraw">
										{contacts.Withdrawals}
									</td>
									<td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend">
										{contacts.Quantity}
									</td>
									<td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend">
										{contacts.Date}
									</td>
									<td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend">
										{contacts.Amount}
									</td>
									<td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend">
										{contacts.Tax}
									</td>
									<td className="py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend">
										{contacts.Total}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="flex justify-center mx-auto sm:w-full md:w-full lg:w-full ">
					<button
						type="button"
						className="w-[327px] h-12 lg:w-[556px] lg:h-[60px] bg-reconcile rounded-lg font-semibold text-reconcileClick focus:focus-ring"
					>
						Reconcile
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpoadingSalesRecord;
