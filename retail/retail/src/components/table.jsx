import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Product_name, Product_code, Stock, Price) {
  return { Product_name, Product_code, Stock, Price };
}

const rows = [
  createData("Kurta",'159A73',4,1500),
  createData("Shirt",'169D73',10,2500),
  createData("Saree",'579B2Y',20,3500),
  createData("Pants",'164P7R',15,2000)
];

export default function BasicTable() {
  return (
    <main className='main-container'>
      <div className='main-title'>
          <h3>Inventory</h3>
      </div>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product name</TableCell>
            <TableCell align="left">Product code</TableCell>
            <TableCell align="left">Stock</TableCell>
            <TableCell align="left">Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Product_code}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Product_name}
              </TableCell>
              <TableCell align="left">{row.Product_code}</TableCell>
              <TableCell align="left">{row.Stock}</TableCell>
              <TableCell align="left">{row.Price}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
   </main>
  );
}