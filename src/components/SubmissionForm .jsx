import { useState, useEffect } from "react";
import PropTypes from "prop-types";
export default function SubmissionForm({
	ExpanceAllDataContainer,
	setExpanceAllDataContainer,
	incomeAllDataContainer,
	setIncomeAllDataContainer,
	setTotal,
	totanExp,
	TotalInc,
	setTotanInc,
	setTotanExp,
	setIncomeData,
	incomeData,
	setDate,
	date,
	selectedIncome,
	setSelectedincome,
	editChecker,
	setEditChecker,
	expanceData,
	setExpanceData,
	dateExp,
	setExp,
	selectedOption,
	setSelectedOption,
	checkForm,
	setCheckform,
	catagorieTypeExp,
	setCatagorieTypeexp,
	categorist,
	setCategori,
	catagorieType,
}) {
	useEffect(() => {
		const total = incomeAllDataContainer
			.map((e) => {
				const income = Number(e.incomeDataO);
				return isNaN(income) ? 0 : income;
			})
			.reduce((acc, curr) => acc + curr, 0);

		setTotanInc(total);

		const totalr = ExpanceAllDataContainer.map((e) => {
			const expance = Number(e.expanceDataO);
			return isNaN(expance) ? 0 : expance;
		}).reduce((acc, curr) => acc + curr, 0);

		setTotanExp(totalr);
		setTotal(TotalInc - totanExp);
	}, [
		ExpanceAllDataContainer,
		setTotanExp,
		incomeAllDataContainer,
		setTotanInc,
		TotalInc,
		totanExp,
		setTotal,
	]);

	//Compare expance with Income start

	//Compare expance with Income end

	function handelForm() {
		if (checkForm === true) {
			setCheckform(!checkForm);
			setExpanceData("");
			setSelectedOption("");
			setDate("");
		}
	}
	function handelFormOne() {
		if (checkForm === false) {
			setCheckform(!checkForm);
			setIncomeData("");
			setSelectedOption("");
			setExp("");
		}
	}
	function handelSubmissionDataIn() {
		if (editChecker.CheckIncome == true) {
			//edit data submission start
			const updatedData = {
				incomeDataO: incomeData,
				dateO: date,
				selectedIncome: selectedIncome,
			};
			setIncomeAllDataContainer(
				incomeAllDataContainer.map((item, i) =>
					i === editChecker.Index ? { ...item, ...updatedData } : item
				)
			);
			if (categorist.categoriChecker === false) {
				setCategori({
					...categorist,
					filterData: incomeAllDataContainer
						.filter((item) => item.selectedIncome === catagorieType)
						.map((item, i) =>
							i === editChecker.Index ? { ...item, ...updatedData } : item
						),
				});
			}
			setEditChecker((prevEdit) => ({
				...prevEdit,
				CheckIncome: false,
			}));
			setIncomeData("");
			setDate("");
			//edit data submission end
		} else {
			if (incomeData > 0 && date) {
				setIncomeAllDataContainer([
					...incomeAllDataContainer,
					{
						incomeDataO: incomeData,
						dateO: date,
						selectedIncome: selectedIncome,
					},
				]);
				setIncomeData("");
				setDate("");
			} else {
				alert("Submit all Income related data !!");
			}
		}
	}

	function handelSubmissionDataEx() {
		if (editChecker.CheckExpece == true) {
			const updatedData = {
				expanceDataO: expanceData,
				selectedOptionO: selectedOption,
				dateExpO: dateExp,
			};
			setExpanceAllDataContainer(
				ExpanceAllDataContainer.map((item, i) =>
					i === editChecker.Index ? { ...item, ...updatedData } : item
				)
			);
			if (categorist.categoriCheckerExp === false) {
				setCategori({
					...categorist,
					filterDataExp: ExpanceAllDataContainer.filter(
						(item) => item.selectedOptionO === catagorieTypeExp
					).map((item, i) =>
						i === editChecker.Index ? { ...item, ...updatedData } : item
					),
				});
			}
			setEditChecker((prevEdit) => ({
				...prevEdit,
				CheckExpece: false,
			}));
			setExpanceData("");
			setExp("");
		} else {
			if (expanceData > 0 && dateExp) {
				setExpanceAllDataContainer([
					...ExpanceAllDataContainer,
					{
						expanceDataO: expanceData,
						selectedOptionO: selectedOption,
						dateExpO: dateExp,
					},
				]);
				setExpanceData("");

				setExp("");
			} else {
				alert("Submit all Income related data !!");
			}
		}
	}
	return (
		<>
			<div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
				<h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
					Expense Tracker
				</h2>

				<form onSubmit={(e) => e.preventDefault()}>
					<div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
						<div
							onClick={handelForm}
							className={`${
								checkForm === false ? "active" : ""
							} cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900  `}
						>
							Expense
						</div>
						<div
							onClick={handelFormOne}
							className={`${
								checkForm === true ? "active" : ""
							} cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900`}
						>
							Income
						</div>
					</div>

					{/* <!-- Note --> */}
					{/* <!-- Income Categories - Salary, Outsourcing, Bond, Dividend --> */}
					<div className={`${checkForm === false ? "visible" : "hidden"}`}>
						<div className="mt-3">
							<label
								htmlFor="category"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Category
							</label>

							<div className="mt-2">
								<select
									value={selectedOption}
									onChange={(e) => setSelectedOption(e.target.value)}
									id="category"
									name="category"
									autoComplete="category-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								>
									<option>Education</option>
									<option>Food</option>
									<option>Health</option>
									<option>Bill</option>
									<option>Insurance</option>
									<option>Tax</option>
									<option>Transport</option>
									<option>Telephone</option>
								</select>
							</div>
						</div>

						<div className="mt-3">
							<label
								htmlFor="amount"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Amount
							</label>
							<div className="mt-2">
								<input
									value={expanceData}
									onChange={(e) => setExpanceData(e.target.value)}
									type="number"
									name="amount"
									id="amount"
									autoComplete="off"
									placeholder="12931"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="mt-3">
							<label
								htmlFor="date"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Date
							</label>

							<div className="mt-2">
								<input
									value={dateExp}
									onChange={(e) => setExp(e.target.value)}
									type="date"
									name="date"
									id="date"
									autoComplete="off"
									placeholder="12931"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<button
							onClick={handelSubmissionDataEx}
							type="submit"
							className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
						>
							Save
						</button>
					</div>
					<div className={`${checkForm === true ? "visible" : "hidden"}`}>
						<div className="mt-3">
							<label
								htmlFor="category"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Category
							</label>
							<div className="mt-2">
								<select
									value={selectedIncome}
									onChange={(e) => setSelectedincome(e.target.value)}
									id="category"
									name="category"
									autoComplete="category-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								>
									<option>Salary </option>
									<option>Outsourcing</option>
									<option>Bond</option>
									<option>Dividend</option>
								</select>
							</div>
							<div className="mt-3">
								<label
									htmlFor="amount"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Amount
								</label>
								<div className="mt-2">
									<input
										value={incomeData}
										onChange={(e) => setIncomeData(e.target.value)}
										type="number"
										name="amount"
										id="amount"
										autoComplete="off"
										placeholder="12931"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="mt-3">
								<label
									htmlFor="date"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Date
								</label>
								<div className="mt-2">
									<input
										value={date}
										onChange={(e) => setDate(e.target.value)}
										type="date"
										name="date"
										id="date"
										autoComplete="off"
										placeholder="12931"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<button
								onClick={handelSubmissionDataIn}
								type="submit"
								className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
							>
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
SubmissionForm.propTypes = {
	setIncomeAllDataContainer: PropTypes.func.isRequired,
	incomeAllDataContainer: PropTypes.array.isRequired,
	setTotanInc: PropTypes.func.isRequired,
	setTotanExp: PropTypes.func.isRequired,
	ExpanceAllDataContainer: PropTypes.array.isRequired,
	setExpanceAllDataContainer: PropTypes.func.isRequired,
	setTotal: PropTypes.func,
	totanExp: PropTypes.number,
	TotalInc: PropTypes.number,
};
