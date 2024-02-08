
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

export function BalanceSheetTable({data,cols}:any) {
  let balanceSheets = data?.balanceSheets || data
  console.log("balanceSheets",balanceSheets)
  const table = useReactTable({
    data: balanceSheets,
    columns: cols,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log("table",table,"got data",data)
  return (
    <Table className="table-container">
      <TableCaption>Balance Sheet for Ticker Symbol</TableCaption>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
      {/* <TableHeader>
          <TableRow>
            {cols.map((col: any) => {
              return (
                <TableHead className="w-[100px]" key={col.accessorKey}>{col?.header || null}</TableHead>
              );
            })}
          </TableRow>
      </TableHeader>
      <TableBody>
        {balanceSheets?.length ? (
          balanceSheets.map((row: any, i: any) => (
            <TableRow key={i}>
                {
                  row.map((cell: any) => (
                    <TableCell>{cell}</TableCell>
                  ))
                }
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={2} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody> */}
    </Table>
  )
}
