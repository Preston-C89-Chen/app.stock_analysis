import React, { FC, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { EarningsReportItem } from './earnings.types';
import { groupByWeek } from './earnings.utils';
import feb_earnings from './mocks/feb_earnings.json';
import EarningsTable from './partials/EarningsTable';
interface IEarningsTableProps {
  tableData?: [any],
  // columns?: ColumnDef<any>
}

const EarningsContainer:FC<any> = ({}) => {
  // index of weekly earnings
  const [weeklyEarnings, setWeeklyEarnings] = useState([])
  const [selectedWeek,setWeek] = useState(0);
  const [currColumns,setColumns]  = useState();
  const data = feb_earnings;

  const nextPage = () => {
    setWeek((prevWeek) => prevWeek + 1 < weeklyEarnings.length ? prevWeek + 1 : prevWeek);
  }
  const prevPage = () => {
    setWeek((prevWeek) => prevWeek - 1 >= 0 ? prevWeek - 1: prevWeek)
  }
  useEffect(() => {
    // set table columns
    // whenever the data gets updated as a result of the week next / prev being pressed
    // we also update
    setWeeklyEarnings(groupByWeek(data))
  },[])
  return (
    <div className="rounded-md border w-100 p-20 overflow-x-auto">
        <div className="flex w-100 justify-evenly p-5">
          <Button variant="outline" disabled={selectedWeek===0} onClick={prevPage}>
            <ChevronLeftIcon className="h-4 w-4" />
            Previous Week
          </Button>

          <Button variant="outline" onClick={nextPage} disabled={selectedWeek===weeklyEarnings.length - 1}>
            Next Week
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex overflow-hidden">
          {
            weeklyEarnings.length > 0 && weeklyEarnings?.[selectedWeek]
            ? weeklyEarnings[selectedWeek].map((tableData) => <EarningsTable tableData={tableData}/>)
            : null
          }
        </div>

  </div>
  )
};

export default EarningsContainer;
