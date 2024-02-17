import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender
} from '@tanstack/react-table';

interface IEarningsTableProps {
  tableData: [any]
}

const columns = [
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Symbol',
    accessor: 'symbol',
  },
  {
    Header: 'EPS',
    accessor: 'eps',
  },
  {
    Header: 'Estimated EPS',
    accessor: 'epsEstimated',
  },
  {
    Header: 'Time',
    accessor: 'time',
  },
  {
    Header: 'Revenue',
    accessor: 'revenue',
  },
  {
    Header: 'Estimated Revenue',
    accessor: 'revenueEstimated',
  },
  {
    Header: 'Fiscal Date Ending',
    accessor: 'fiscalDateEnding',
  },
  {
    Header: 'Updated From Date',
    accessor: 'updatedFromDate',
  },
];

const EarningsTable:FC<IEarningsTableProps> = ({tableData}) => {
  const data = [
    {
      date: "2024-02-01",
      symbol: "PIONEEREMB.BO",
      eps: 0.01216,
      epsEstimated: null,
      time: "bmo",
      revenue: 853174000,
      revenueEstimated: null,
      fiscalDateEnding: "2023-12-30",
      updatedFromDate: "2024-02-16"
    },
    {
      date: "2024-02-01",
      symbol: "2692.T",
      eps: 248.84,
      epsEstimated: null,
      time: "bmo",
      revenue: null,
      revenueEstimated: null,
      fiscalDateEnding: "2023-12-30",
      updatedFromDate: "2024-02-16"
    }
  ];
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
  const [{pageIndex, pageSize}, setPagination] = useState({pageIndex: 0, pageSize: 10})
  return (
    <div>
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <th key={column.id}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td key={cell.id}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  )
};

export default EarningsTable;
