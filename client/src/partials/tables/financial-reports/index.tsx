import React, {useState} from 'react';
import { useQuery, gql } from "@apollo/client";
import { GetFinancials } from '@api/queries/financialStatements';
import { financialStatementColumns } from './columns'
import { useEffect } from "react";
import { BalanceSheetTable } from "./data-table";
import mockData from './mock_data.json';
function TableDemo() {
  //const { loading, error, data } = useQuery(GetFinancials);
  const [cols, setCols] = useState([]);

  useEffect(() => {
    setCols(financialStatementColumns(mockData.slice(0,3)));
  },[mockData])

  console.log("got data", mockData);
  //console.log("loading", loading)
  console.log("cols", cols)
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
  return (
    <>
      {false ? <div>loading</div> : <BalanceSheetTable data={transposedData} cols={cols}/>}
    </>
  );
}

export default TableDemo;
