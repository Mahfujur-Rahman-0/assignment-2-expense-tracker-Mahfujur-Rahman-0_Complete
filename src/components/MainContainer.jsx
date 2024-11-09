import SubmissionForm from "./SubmissionForm ";
import RightColumn from "./RightColumn";
import { useEffect, useState } from "react";
export default function MainContainer() {
	const incc = [];
	const expnc = [];
	const [TotalInc, setTotanInc] = useState();
	const [totanExp, setTotanExp] = useState();
	const [incomeAllDataContainer, setIncomeAllDataContainer] = useState(incc);
	const [ExpanceAllDataContainer, setExpanceAllDataContainer] = useState(expnc);
	const [total, setTotal] = useState(0);
	const [dropdownCondition, setDropdownCondition] = useState(0);
	const [incomeData, setIncomeData] = useState("");
	const [date, setDate] = useState();
	const [selectedIncome, setSelectedincome] = useState("Salary");
	const [expanceData, setExpanceData] = useState("");
	const [dateExp, setExp] = useState();
	const [selectedOption, setSelectedOption] = useState("Education");
	const [catagorieType, setCatagorieType] = useState("");
	const [catagorieTypeExp, setCatagorieTypeexp] = useState("");

	const [inputT, setCheckInput] = useState(0);

	const [categorist, setCategori] = useState({
		categoriChecker: true,
		categoriCheckerExp: true,
		filterData: incomeAllDataContainer,
		filterDataExp: ExpanceAllDataContainer,
	});
	const [checkForm, setCheckform] = useState(false);
	const [editChecker, setEditChecker] = useState({
		CheckIncome: false,
		CheckExpece: false,
		Index: 0,
	});
	useEffect(() => {
		const handleClickOutside = () => {
			setDropdownCondition(0);
		};
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);
	return (
		<>
			<main className="relative mx-auto mt-10 w-full max-w-7xl">
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* <!-- Submission Form --> */}
					<SubmissionForm
						setDate={setDate}
						dateExp={dateExp}
						setExp={setExp}
						expanceData={expanceData}
						setExpanceData={setExpanceData}
						editChecker={editChecker}
						setEditChecker={setEditChecker}
						date={date}
						setTotal={setTotal}
						TotalInc={TotalInc}
						totanExp={totanExp}
						incomeAllDataContainer={incomeAllDataContainer}
						setIncomeAllDataContainer={setIncomeAllDataContainer}
						setTotanInc={setTotanInc}
						setTotanExp={setTotanExp}
						setExpanceAllDataContainer={setExpanceAllDataContainer}
						ExpanceAllDataContainer={ExpanceAllDataContainer}
						setIncomeData={setIncomeData}
						incomeData={incomeData}
						selectedIncome={selectedIncome}
						setSelectedincome={setSelectedincome}
						setSelectedOption={setSelectedOption}
						selectedOption={selectedOption}
						setCheckform={setCheckform}
						checkForm={checkForm}
						categorist={categorist}
						setCategori={setCategori}
						catagorieType={catagorieType}
						catagorieTypeExp={catagorieTypeExp}
						setCatagorieTypeexp={setCatagorieTypeexp}
					/>
					{/* <!-- Right Column --> */}
					<RightColumn
						total={total}
						setExp={setExp}
						expanceData={expanceData}
						TotalInc={TotalInc}
						totanExp={totanExp}
						incomeAllDataContainer={incomeAllDataContainer}
						ExpanceAllDataContainer={ExpanceAllDataContainer}
						setExpanceAllDataContainer={setExpanceAllDataContainer}
						setIncomeAllDataContainer={setIncomeAllDataContainer}
						dropdownCondition={dropdownCondition}
						setDropdownCondition={setDropdownCondition}
						setIncomeData={setIncomeData}
						setDate={setDate}
						setSelectedincome={setSelectedincome}
						editChecker={editChecker}
						setEditChecker={setEditChecker}
						setSelectedOption={setSelectedOption}
						setExpanceData={setExpanceData}
						checkForm={checkForm}
						inputT={inputT}
						setCheckInput={setCheckInput}
						categorist={categorist}
						setCategori={setCategori}
						catagorieType={catagorieType}
						setCatagorieType={setCatagorieType}
						catagorieTypeExp={catagorieTypeExp}
						setCatagorieTypeexp={setCatagorieTypeexp}
					/>
				</section>
			</main>
		</>
	);
}
