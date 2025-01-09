import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const fetchData = () => {
    return fetch('/stackline_frontend_assessment_data_2021c.json')
    .then((res) => {
      const data = res.json();
      return data;
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
//   const headCells = [
//     {
//       id: 'weekEnding',
//       numeric: false,
//       disablePadding: true,
//       label: 'Week Ending',
//     },
//     {
//       id: 'retailSales',
//       numeric: true,
//       disablePadding: false,
//       label: 'Retail Sales',
//     },
//     {
//       id: 'wholeSales',
//       numeric: true,
//       disablePadding: false,
//       label: 'Wholesale Sales',
//     },
//     {
//       id: 'unitSold',
//       numeric: true,
//       disablePadding: false,
//       label: 'Unit Sold',
//     },
//     {
//       id: 'retailerMargin',
//       numeric: true,
//       disablePadding: false,
//       label: 'Retailer Margin',
//     },
//   ];
  
  function ProductTable() {
    const [product, setProduct] = useState();
    const [sales, setSales] = useState([]);
  
    useEffect(() => {
      fetchData().then((product) => {
        setProduct(product);
        const {sales} = product;
        setSales(sales);
      })
    }, [])
  
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>WEEK ENDING</TableCell>
              <TableCell align="right">RETAIL SALES</TableCell>
              <TableCell align="right">WHOLESALE SALES</TableCell>
              <TableCell align="right">UNIT SOLD</TableCell>
              <TableCell align="right">REATAILER MARGIN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.weekEnding}
                </TableCell>
                <TableCell align="right">{row.retailSales}</TableCell>
                <TableCell align="right">{row.wholesaleSales}</TableCell>
                <TableCell align="right">{row.unitsSold}</TableCell>
                <TableCell align="right">{row.retailerMargin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default ProductTable;