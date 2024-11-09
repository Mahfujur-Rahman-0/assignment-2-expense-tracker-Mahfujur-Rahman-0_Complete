import { useEffect, useState } from "react";
import ExpenceSvg from "../Svg/expenceSVG";
import SvgOne from "./../Svg/SvgOne";
import SvgThree from "./../Svg/SvgThree";
import SvgTwo from "./../Svg/SvgTwo";
import PropTypes from "prop-types";

export default function RightColumn({
	TotalInc,
	totanExp,
	total,
	setExpanceAllDataContainer,
	setIncomeAllDataContainer,
	incomeAllDataContainer,
	ExpanceAllDataContainer,
	setDropdownCondition,
	dropdownCondition,
	setIncomeData,
	setSelectedincome,
	setDate,
	setEditChecker,
	setExpanceData,
	setExp,
	setSelectedOption,
	checkForm,
	inputT,
	setCheckInput,
	categorist,
	setCategori,
	catagorieType,
	setCatagorieType,
	catagorieTypeExp,
	setCatagorieTypeexp,
}) {
	function handelDropdown(indexN) {
		if (dropdownCondition !== indexN) {
			setDropdownCondition(indexN);
		} else {
			setDropdownCondition(0);
		}
	}

	//Delete Func start
	// function removeElement(index) {
	// 	setExpanceAllDataContainer(
	// 		ExpanceAllDataContainer.filter((_, e) => e !== index)
	// 	);
	// 	if (categorist.categoriCheckerExp === false) {
	// 		setCategori({
	// 			...categorist,
	// 			filterDataExp: ExpanceAllDataContainer.filter((e) => {
	// 				ExpanceAllDataContainer.expanceDataO !== e.expanceDataO;
	// 			}),
	// 		});
	// 	}
	// }

	function removeElement(index) {
		// Update ExpanceAllDataContainer with the element removed
		setExpanceAllDataContainer((prevData) => {
			const updatedExpanceAllDataContainer = prevData.filter(
				(_, e) => e !== index
			);

			// If categorist.categoriCheckerExp is false, update setCategori with filtered data
			if (categorist.categoriCheckerExp === false) {
				setCategori({
					...categorist,
					filterDataExp: updatedExpanceAllDataContainer.filter((e) => {
						return e.expanceDataO !== index; // Filter out elements based on condition
					}),
				});
			}

			return updatedExpanceAllDataContainer;
		});
	}

	function removeElementInc(index) {
		setIncomeAllDataContainer((prevData) => {
			const updatedIncomeAllDataContainer = prevData.filter(
				(_, e) => e !== index
			);

			if (categorist.categoriChecker === false) {
				setCategori({
					...categorist,
					filterData: updatedIncomeAllDataContainer.filter((e) => {
						return e.incomeDataO !== index;
					}),
				});
			}

			return updatedIncomeAllDataContainer;
		});
	}

	//Delete Func end

	//edit Func start

	function incEdit(index) {
		if (checkForm === true) {
			if (categorist.categoriChecker === true) {
				const existingData = incomeAllDataContainer[index];

				setIncomeData(existingData.incomeDataO);
				setDate(existingData.dateO);
				setSelectedincome(existingData.selectedIncome);

				setEditChecker((prevEdit) => ({
					...prevEdit,
					CheckIncome: true,
					Index: index,
				}));
			} else {
				const existingData = categorist.filterData[index];

				setIncomeData(existingData.incomeDataO);
				setDate(existingData.dateO);
				setSelectedincome(existingData.selectedIncome);

				setEditChecker((prevEdit) => ({
					...prevEdit,
					CheckIncome: true,
					Index: index,
				}));
			}
		} else {
			alert("Select Income form first for edit");
		}
	}
	function ExpEdit(index) {
		if (checkForm === false) {
			if (categorist.categoriCheckerExp === true) {
				const existingData = ExpanceAllDataContainer[index];

				setExpanceData(existingData.expanceDataO);
				setExp(existingData.dateExpO);
				setSelectedOption(existingData.selectedOptionO);

				setEditChecker((prevEdit) => ({
					...prevEdit,
					CheckExpece: true,
					Index: index,
				}));
			} else {
				const existingData = categorist.filterDataExp[index];

				setExpanceData(existingData.expanceDataO);
				setExp(existingData.dateExpO);
				setSelectedOption(existingData.selectedOptionO);

				setEditChecker((prevEdit) => ({
					...prevEdit,
					CheckExpece: true,
					Index: index,
				}));
			}
		} else {
			alert("Select Expence form first for edit");
		}
	}

	//edit Func end

	//sort function start

	function HighLowExp() {
		setExpanceAllDataContainer(
			ExpanceAllDataContainer.sort((a, b) => {
				return b.expanceDataO - a.expanceDataO;
			})
		);
		setCategori({
			...categorist,
			filterDataExp: ExpanceAllDataContainer.filter(
				(item) => item.selectedOptionO === catagorieTypeExp
			).sort((a, b) => b.expanceDataO - a.expanceDataO),
		});
	}
	function LowHighExp() {
		setExpanceAllDataContainer(
			ExpanceAllDataContainer.sort((a, b) => {
				return a.expanceDataO - b.expanceDataO;
			})
		);
		setCategori({
			...categorist,
			filterDataExp: ExpanceAllDataContainer.filter(
				(item) => item.selectedOptionO === catagorieTypeExp
			).sort((a, b) => a.expanceDataO - b.expanceDataO),
		});
	}

	function HighLowInc() {
		setIncomeAllDataContainer(
			incomeAllDataContainer.sort((a, b) => {
				return b.incomeDataO - a.incomeDataO;
			})
		);

		setCategori({
			...categorist,
			filterData: incomeAllDataContainer
				.filter((item) => item.selectedIncome === catagorieType)
				.sort((a, b) => b.incomeDataO - a.incomeDataO),
		});
	}
	function LowHighInc() {
		incomeAllDataContainer.sort((a, b) => {
			return a.incomeDataO - b.incomeDataO;
		});
		setCategori({
			...categorist,
			filterData: incomeAllDataContainer
				.filter((item) => item.selectedIncome === catagorieType)
				.sort((a, b) => a.incomeDataO - b.incomeDataO),
		});
	}

	//sort function end

	//Filter start

	function categoriStoradge(index, n) {
		if (categorist.categoriChecker == false && inputT === n) {
			setCategori({ ...categorist, categoriChecker: true });
		} else {
			setCatagorieType(index);
			setCategori({
				...categorist,
				filterData: incomeAllDataContainer.filter(
					(e) => e.selectedIncome == index
				),
				categoriChecker: false,
			});
		}
	}
	function categoriStoradgeexp(index, n) {
		if (categorist.categoriCheckerExp == false && inputT === n) {
			setCategori({ ...categorist, categoriCheckerExp: true });
		} else {
			setCatagorieTypeexp(index);
			setCategori({
				...categorist,
				filterDataExp: ExpanceAllDataContainer.filter(
					(e) => e.selectedOptionO == index
				),
				categoriCheckerExp: false,
			});
		}
	}
	//Filter end

	//Input Toggoler start
	function inputToggoler(index) {
		if (inputT !== index) {
			setCheckInput(index);
		} else {
			setCheckInput(0);
		}
	}
	//Input Toggoler End
	return (
		<>
			<div className="lg:col-span-2">
				{/* <!-- Total Balance Stat--> */}
				<div className="bg-white">
					<div className="mx-auto max-w-7xl">
						<dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
							<div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
								<dt className="text-base leading-7 text-gray-600">Balance</dt>
								<dd
									className={`${
										total < 0 ? "text-red-600 " : null
									}  order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl`}
								>
									BDT {total}
								</dd>
							</div>
							<div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
								<dt className="text-base leading-7 text-gray-600">
									Total Income
								</dt>
								<dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
									BDT {TotalInc}
								</dd>
							</div>
							<div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
								<dt className="text-base leading-7 text-gray-600">
									Total Expense
								</dt>
								<dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
									BDT {totanExp}
								</dd>
							</div>
						</dl>
					</div>
				</div>

				{/* <!-- List Down --> */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
					{/* <!-- Expense --> */}
					<div className="border rounded-md relative">
						{/* <!-- Header --> */}
						<div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
							<div className="flex items-center gap-2">
								{/* <!-- Icon --> */}
								<div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
									<SvgOne />
								</div>
								{/* <!-- Text --> */}
								<div>
									<h3 className="text-xl font-semibold leading-7 text-gray-800">
										Income
									</h3>
								</div>
							</div>
							<div>
								{/* <!-- Sorting --> */}
								<div className="relative inline-block text-left">
									<div>
										<button
											type="button"
											className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
											id="menu-button"
											onClick={(e) => {
												e.stopPropagation();
												handelDropdown(1);
											}}
										>
											<SvgTwo />
										</button>
									</div>

									<div
										className={`${
											dropdownCondition == 1 ? "visible" : "hidden"
										} absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="menu-button"
										tabIndex="-1"
									>
										<div className="py-1" role="none">
											<a
												href="#"
												onClick={LowHighInc}
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
											>
												Low to High
											</a>
											<a
												href="#"
												onClick={HighLowInc}
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
											>
												High to Low
											</a>
										</div>
									</div>
								</div>

								{/* <!-- Filtering --> */}
								<div className="relative inline-block text-left">
									<div>
										<button
											type="button"
											className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
											id="filter-button"
											onClick={(e) => {
												e.stopPropagation();
												handelDropdown(2);
											}}
										>
											<SvgThree />
										</button>
									</div>

									<div
										className={`${
											dropdownCondition == 2 ? "visible" : "hidden"
										}  absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `}
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="filter-button"
										tabIndex="-1"
										id="filter-dropdown"
									>
										<div
											onClick={(e) => {
												e.stopPropagation();
											}}
											className="py-1"
											role="none"
										>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(1);
														categoriStoradge("Salary", 1);
													}}
													checked={inputT === 1}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-1"
												/>
												<span className="ml-2">Salary</span>
											</label>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(2);
														categoriStoradge("Outsourcing", 2);
													}}
													checked={inputT === 2}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-2"
												/>
												<span className="ml-2">Outsourcing</span>
											</label>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(3);
														categoriStoradge("Bond", 3);
													}}
													checked={inputT === 3}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-3"
												/>
												<span className="ml-2">Bond</span>
											</label>

											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(4);
														categoriStoradge("Dividend", 4);
													}}
													checked={inputT === 4}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-3"
												/>
												<span className="ml-2">Dividend</span>
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="p-4 divide-y">
							{/* <!-- Row --> */}
							<div>
								{categorist.categoriChecker === false
									? categorist.filterData.map((e, index) => (
											<div
												key={index}
												className="flex justify-between items-center py-2 relative group cursor-pointer"
											>
												<div>
													<h3 className="text-base font-medium leading-7 text-gray-600">
														{e.selectedIncome}
													</h3>
													<p className="text-xs text-gray-600">{e.dateO}</p>
												</div>
												<div className="flex items-center gap-2">
													<p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
														BDT {e.incomeDataO}
													</p>

													{/* <!-- 3 Dots --> */}
													<div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
														<button
															onClick={() => incEdit(index)}
															className="hover:text-teal-600"
															role="button"
															title="Edit Button"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="18"
																height="18"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path
																	stroke="none"
																	d="M0 0h24v24H0z"
																	fill="none"
																/>
																<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
																<path d="M13.5 6.5l4 4" />
															</svg>
														</button>

														<button
															onClick={() => removeElementInc(index)}
															className="hover:text-red-600"
															role="button"
															title="Delete"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="18"
																height="18"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path
																	stroke="none"
																	d="M0 0h24v24H0z"
																	fill="none"
																/>
																<path d="M4 7l16 0" />
																<path d="M10 11l0 6" />
																<path d="M14 11l0 6" />
																<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
																<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
															</svg>
														</button>
													</div>
												</div>
											</div>
									  ))
									: incomeAllDataContainer.map((e, index) => (
											<div
												key={index}
												className="flex justify-between items-center py-2 relative group cursor-pointer"
											>
												<div>
													<h3 className="text-base font-medium leading-7 text-gray-600">
														{e.selectedIncome}
													</h3>
													<p className="text-xs text-gray-600">{e.dateO}</p>
												</div>
												<div className="flex items-center gap-2">
													<p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
														BDT {e.incomeDataO}
													</p>

													{/* <!-- 3 Dots --> */}
													<div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
														<button
															onClick={() => incEdit(index)}
															className="hover:text-teal-600"
															role="button"
															title="Edit Button"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="18"
																height="18"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path
																	stroke="none"
																	d="M0 0h24v24H0z"
																	fill="none"
																/>
																<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
																<path d="M13.5 6.5l4 4" />
															</svg>
														</button>

														<button
															onClick={() => removeElementInc(index)}
															className="hover:text-red-600"
															role="button"
															title="Delete"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="18"
																height="18"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path
																	stroke="none"
																	d="M0 0h24v24H0z"
																	fill="none"
																/>
																<path d="M4 7l16 0" />
																<path d="M10 11l0 6" />
																<path d="M14 11l0 6" />
																<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
																<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
															</svg>
														</button>
													</div>
												</div>
											</div>
									  ))}
							</div>
						</div>
					</div>

					{/* <!-- Income --> */}
					<div className="border rounded-md">
						{/* <!-- Header --> */}
						<div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
							<div className="flex items-center gap-2">
								{/* <!-- Icon --> */}
								<div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
									<ExpenceSvg />
								</div>
								{/* <!-- Text --> */}
								<div>
									<h3 className="text-xl font-semibold leading-7 text-gray-800">
										Expense
									</h3>
								</div>
							</div>

							{/* <!-- Sorting and Filtering Column --> */}
							<div>
								{/* <!-- Sorting --> */}
								<div className="relative inline-block text-left">
									<div>
										<button
											type="button"
											className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
											id="menu-button2"
											onClick={(e) => {
												e.stopPropagation();
												handelDropdown(3);
											}}
										>
											<SvgTwo />
										</button>
									</div>

									<div
										className={`${
											dropdownCondition == 3 ? "visible" : "hidden"
										}  absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
									>
										<div className="py-1" role="none">
											<a
												href="#"
												onClick={LowHighExp}
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
											>
												Low to High
											</a>
											<a
												href="#"
												onClick={HighLowExp}
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
											>
												High to Low
											</a>
										</div>
									</div>
								</div>

								{/* <!-- Filtering --> */}
								<div className="relative inline-block text-left">
									<div>
										<button
											type="button"
											className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
											id="filter-button-2"
											onClick={(e) => {
												e.stopPropagation();
												handelDropdown(4);
											}}
										>
											<SvgThree />
										</button>
									</div>

									<div
										className={`${
											dropdownCondition == 4 ? "visible" : "hidden"
										}  absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="filter-button-2"
										tabIndex="-1"
										id="filter-dropdown2"
									>
										<div
											onClick={(e) => {
												e.stopPropagation();
											}}
											className="py-1"
											role="none"
										>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(5);
														categoriStoradgeexp("Education", 5);
													}}
													checked={inputT === 5}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-1"
												/>
												<span className="ml-2">Education</span>
											</label>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(6);
														categoriStoradgeexp("Food", 6);
													}}
													checked={inputT === 6}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-2"
												/>
												<span className="ml-2">Food</span>
											</label>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(7);
														categoriStoradgeexp("Health", 7);
													}}
													checked={inputT === 7}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-3"
												/>
												<span className="ml-2">Health</span>
											</label>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(8);
														categoriStoradgeexp("Bill", 8);
													}}
													checked={inputT === 8}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-3"
												/>
												<span className="ml-2">Bill</span>
											</label>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(9);
														categoriStoradgeexp("Insurance", 9);
													}}
													checked={inputT === 9}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-3"
												/>
												<span className="ml-2">Insurance </span>
											</label>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(10);
														categoriStoradgeexp("Tax", 10);
													}}
													checked={inputT === 10}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-3"
												/>
												<span className="ml-2">Tax</span>
											</label>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(11);
														categoriStoradgeexp("Transport", 11);
													}}
													checked={inputT === 11}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-3"
												/>
												<span className="ml-2">Transport</span>
											</label>
											<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
												<input
													onClick={() => {
														inputToggoler(12);
														categoriStoradgeexp("TelePhone", 12);
													}}
													checked={inputT === 12}
													type="checkbox"
													className="form-checkbox h-4 w-4 rounded-md text-gray-600"
													id="filter-option-3"
												/>
												<span className="ml-2">TelePhone</span>
											</label>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- Sorting and Filtering Column Ends --> */}
						</div>

						<div className="p-4 divide-y">
							{/* <!-- Expense Row 1 --> */}

							{categorist.categoriCheckerExp === false
								? categorist.filterDataExp.map((e, index) => (
										<>
											<div
												key={index}
												className="flex justify-between items-center py-2 relative group cursor-pointer"
											>
												<div>
													<h3 className="text-base font-medium leading-7 text-gray-600">
														{e.selectedOptionO}
													</h3>
													<p className="text-xs text-gray-600">{e.dateExpO}</p>
												</div>
												<div className="flex items-center gap-2">
													<p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
														BDT {e.expanceDataO}
													</p>

													{/* <!-- 3 Dots --> */}
													<div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
														<button
															className="hover:text-teal-600"
															onClick={() => ExpEdit(index)}
															title="Edit Button"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="18"
																height="18"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path
																	stroke="none"
																	d="M0 0h24v24H0z"
																	fill="none"
																/>
																<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
																<path d="M13.5 6.5l4 4" />
															</svg>
														</button>

														<button
															onClick={() => removeElement(index)}
															className="hover:text-red-600"
															role="button"
															title="Delete"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="18"
																height="18"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path
																	stroke="none"
																	d="M0 0h24v24H0z"
																	fill="none"
																/>
																<path d="M4 7l16 0" />
																<path d="M10 11l0 6" />
																<path d="M14 11l0 6" />
																<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
																<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
															</svg>
														</button>
													</div>
												</div>
											</div>
										</>
								  ))
								: ExpanceAllDataContainer.map((e, index) => (
										<>
											<div
												key={index}
												className="flex justify-between items-center py-2 relative group cursor-pointer"
											>
												<div>
													<h3 className="text-base font-medium leading-7 text-gray-600">
														{e.selectedOptionO}
													</h3>
													<p className="text-xs text-gray-600">{e.dateExpO}</p>
												</div>
												<div className="flex items-center gap-2">
													<p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
														BDT {e.expanceDataO}
													</p>

													{/* <!-- 3 Dots --> */}
													<div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
														<button
															className="hover:text-teal-600"
															onClick={() => ExpEdit(index)}
															title="Edit Button"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="18"
																height="18"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path
																	stroke="none"
																	d="M0 0h24v24H0z"
																	fill="none"
																/>
																<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
																<path d="M13.5 6.5l4 4" />
															</svg>
														</button>

														<button
															onClick={() => removeElement(index)}
															className="hover:text-red-600"
															role="button"
															title="Delete"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="18"
																height="18"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path
																	stroke="none"
																	d="M0 0h24v24H0z"
																	fill="none"
																/>
																<path d="M4 7l16 0" />
																<path d="M10 11l0 6" />
																<path d="M14 11l0 6" />
																<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
																<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
															</svg>
														</button>
													</div>
												</div>
											</div>
										</>
								  ))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
// Define prop types
RightColumn.propTypes = {
	incomeAllDataContainer: PropTypes.array.isRequired,
	ExpanceAllDataContainer: PropTypes.array.isRequired,
	setIncomeAllDataContainer: PropTypes.func.isRequired,
	setExpanceAllDataContainer: PropTypes.func.isRequired,
	TotalInc: PropTypes.number,
	totanExp: PropTypes.number,
	total: PropTypes.number,
};
