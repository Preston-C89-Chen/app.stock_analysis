export let balanceSheetLabels = {
  date: "",
  symbol: "",
  cashAndCashEquivalents: "Cash And Equivalents",
  shortTermInvestments: "Short Term Investments",
  totalAssets: "Total Assets",
  totalLiabilities: "Total Liabilities"
}

const transposedData = [{
  "2021-09-25": 34940000000,
  "2022-09-24": 23646000000,
  "2023-09-30": 29965000000,
  label: "Cash And Equivalents"
}, {
  "2021-09-25": 27699000000,
  "2022-09-24": 24658000000,
  "2023-09-30": 31590000000,
  label: "Short Term Investments"
}, {
  "2021-09-25": 62639000000,
  "2022-09-24": 48304000000,
  "2023-09-30": 61555000000,
  label: "Cash And Short Term Investments"
}]

const tableData = [
  {
    "date": "2023-09-30",
    "cashAndCashEquivalents": 29965000000,
    "shortTermInvestments": 31590000000,
    "cashAndShortTermInvestments": 61555000000
  },
  {
    "date": "2022-09-24",
    "cashAndCashEquivalents": 23646000000,
    "shortTermInvestments": 24658000000,
    "cashAndShortTermInvestments": 48304000000
  },
  {
    "date": "2021-09-25",
    "cashAndCashEquivalents": 34940000000,
    "shortTermInvestments": 27699000000,
    "cashAndShortTermInvestments": 62639000000,
  }
];

let balanceSheetLabels = {
  date: "",
  symbol: "",
  cashAndShortTermInvestments: "Cash And Short Term Investments",
  cashAndCashEquivalents: "Cash And Equivalents",
  shortTermInvestments: "Short Term Investments",
  totalAssets: "Total Assets",
  totalLiabilities: "Total Liabilities"
}

const tableRows = ["cashAndCashEquivalents","shortTermInvestments","cashAndShortTermInvestments"]
const generateRowDataTable = (tableRows) => {
	return tableRows.reduce((acc,c) => {
  	acc[c] = {
    	"label": balanceSheetLabels[c]
    }
  	return acc;
  }, {})
}
function transposeTableData(tableData,colKey,tableRows) {
	//
  // for
  // iterate through all the data and grab the dates and render them as a list
  const cols = tableData.map((d) => d[colKey] || null);
	const rowDataTable = generateRowDataTable(tableRows);
  console.log("should have", rowDataTable)
  const transposedData = tableData.reduce((acc,entry) => {
    const colKeyName = entry[colKey];
    console.log('date col', colKeyName)
    for (let entryKey in entry) {
    	if (entryKey === colKey) continue;
      acc[entryKey][colKeyName] = entry[entryKey]
    }
  	return acc;
  }, rowDataTable);
  console.log("transposedData",transposedData);
}
