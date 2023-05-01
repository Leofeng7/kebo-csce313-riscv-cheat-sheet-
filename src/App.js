import "./App.css";
import arithmeticData from "./arithmetic.json";
import logicalData from "./logical.json"
import instructionData from "./instructions.json"
import compareData from "./compare.json"
import jumpData from "./jumps.json"
import storeData from "./stores.json"
import branchData from "./branches.json"

import * as React from "react";
import { useTable } from "react-table";

function App() {
  const data = React.useMemo(() => instructionData, []);
  const data1 = React.useMemo(() => arithmeticData, []);
  const data2 = React.useMemo(() => logicalData, []);

  const data3 = React.useMemo(() => storeData, []);
  const data4 = React.useMemo(() => compareData, []);
  const data5 = React.useMemo(() => branchData, []);
  const data6 = React.useMemo(() => jumpData, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Type of Instruction",
        accessor: "Type of Instruction",
      },     
      {
        Header: "Description",
        accessor: "description",
      },
      
    ],
    []
  );
  const columns1 = React.useMemo(
    () => [
      {
        Header: "Instruction",
        accessor: "instruction",
      },
      {
        Header: "Syntax",
        accessor: "syntax",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      
    ],
    []
  );
  const columns2 = React.useMemo(
    () => [
      {
        Header: "Instruction",
        accessor: "instruction",
      },
      {
        Header: "Syntax",
        accessor: "syntax",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      
    ],
    []
  );
  const columns3 = React.useMemo(
    () => [
      {
        Header: "Instruction",
        accessor: "instruction",
      },
      {
        Header: "Syntax",
        accessor: "syntax",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      
    ],
    []
  );
  const columns4 = React.useMemo(
    () => [
      {
        Header: "Instruction",
        accessor: "instruction",
      },
      {
        Header: "Syntax",
        accessor: "syntax",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      
    ],
    []
  );
  const columns5 = React.useMemo(
    () => [
      {
        Header: "Instruction",
        accessor: "instruction",
      },
      {
        Header: "Syntax",
        accessor: "syntax",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      
    ],
    []
  );
  const columns6 = React.useMemo(
    () => [
      {
        Header: "Instruction",
        accessor: "instruction",
      },
      {
        Header: "Syntax",
        accessor: "syntax",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      
    ],
    []
  );

  const table1 =
    useTable({ columns, data });
  const table2 =
    useTable({ columns:columns1, data:data1 });
  const table3 =
    useTable({ columns:columns2, data:data2 });
  const table4 =
    useTable({ columns:columns3, data:data3 });
  const table5 =
    useTable({ columns:columns4, data:data4 });
  const table6 =
    useTable({ columns:columns5, data:data5 });
  const table7 =
    useTable({ columns:columns6, data:data6 });   

  return (
    <div className="App">
      <div className="header">
        <img className = "logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/RISC-V-logo.svg/2560px-RISC-V-logo.svg.png"/>
        <span className="Cheat">Cheat </span>
        <span className = "Sheet">Sheet </span>
      </div>
    
      <div className="largeContainer">

        <div className="container">
          <h2 className="Instruction">Instruction Types</h2>

          <table {...table1.getTableProps()}>
            <thead>
              {table1.headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...table1.getTableBodyProps()}>
              {table1.rows.map((row) => {
                table1.prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container">
          <h2 className="Arithmetic">Arithmetic Operations</h2>
          <table {...table2.getTableProps()}>
            <thead>
              {table2.headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...table2.getTableBodyProps()}>
              {table2.rows.map((row) => {
                table2.prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>

        </div>
        <div className="container">
          <h2 className="Logical">Logical Operations</h2>

          <table {...table3.getTableProps()}>
            <thead>
              {table3.headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...table3.getTableBodyProps()}>
              {table3.rows.map((row) => {
                table3.prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container">
          <h2 className="Compare">Load/Store Operations</h2>

          <table {...table4.getTableProps()}>
            <thead>
              {table4.headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...table4.getTableBodyProps()}>
              {table4.rows.map((row) => {
                table4.prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container">
          <h2 className="stores">Comparisons</h2>

          <table {...table5.getTableProps()}>
            <thead>
              {table5.headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...table5.getTableBodyProps()}>
              {table5.rows.map((row) => {
                table5.prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container">
          <h2 className="Branch">Branch Instructions</h2>

          <table {...table6.getTableProps()}>
            <thead>
              {table6.headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...table6.getTableBodyProps()}>
              {table6.rows.map((row) => {
                table6.prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container">
          <h2 className="Jumps">Jump instructions</h2>

          <table {...table7.getTableProps()}>
            <thead>
              {table7.headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...table1.getTableBodyProps()}>
              {table7.rows.map((row) => {
                table7.prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}

export default App;
