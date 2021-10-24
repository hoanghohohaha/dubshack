import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ShelfLifeOverTime from "../../config/Shelf_Life_Over_Time.json";
import ShelfLifeAnalysis from "../../config/Shelf_Life_Analysis.json"

function createData(id, count, product, eliminated, mean, min, max) {
  return { id, count, product, eliminated, mean, min, max };
}

function createData2(id, cate, farmer, product, quantity, type, rottenDay, damage) {
  return { id, cate, farmer, product, quantity, type, rottenDay, damage };
}
const row = []
ShelfLifeOverTime.map((e) => row.push(createData(e.id, e.count, e.product, e.Eliminated, e.Mean, e.Min, e.Max)));

const row2 = []
ShelfLifeAnalysis.map((e) => row2.push(createData2(e.id, e.category, e.Farmer, e.Product, e.Quantity, e.Type, e['Days until Rotten'], e['Damage Rate'])));

const column = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'count', headerName: 'Count', width: 130 },
  { field: 'product', headerName: 'Product', width: 200 },
  {
    field: 'eliminated',
    headerName: 'Eliminated',
    width: 200,
  },
  {
    field: 'mean',
    headerName: 'Mean',
    sortable: false,
    width: 160,
  },
  { field: 'min', headerName: 'Min(days)', width: 200 },
  { field: 'max', headerName: 'Max(days)', width: 200 },

]

const column2 = [
  { field: 'id', headerName: 'orderNumber', width: 130 },
  { field: 'cate', headerName: 'Category', width: 130 },
  { field: 'farmer', headerName: 'Farmer', width: 130 },
  {
    field: 'product',
    headerName: 'Product',
    width: 90,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    sortable: false,
    width: 160,
  },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'rottenDay', headerName: 'Rotten Days', width: 130 },
  { field: 'damage', headerName: 'Damage Rate', width: 130 },
]




export default function DashBoardUser() {
  return (<Grid>
    <Grid container justifyContent='space-between' style={{ marginTop: 80 }}>
      <Grid container>
        <Typography style={{ fontSize: 56, fontWeight: 700, marginBottom: 60 }}>Dashboard</Typography>
      </Grid>
      <Grid container direction='column' justifyContent='flex-start'>
        <Grid item>
          <Typography align='left' style={{ fontSize: 24, marginBottom: 40 }}>Shelf Life Over Time</Typography>
        </Grid>
        <Grid item style={{ width: "80%", height: 400, }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {column.map((e) => (<TableCell align="right">
                    {e.headerName}
                  </TableCell>))}
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((e) => (
                  <TableRow
                    key={e.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">
                      {e.id}
                    </TableCell>
                    <TableCell align="right">{e.count}</TableCell>
                    <TableCell align="right">{e.product}</TableCell>
                    <TableCell align="right">{e.eliminated}</TableCell>
                    <TableCell align="right">{e.mean}</TableCell>
                    <TableCell align="right">{e.min}</TableCell>
                    <TableCell align="right">{e.max}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container direction='column' justifyContent='flex-start'>
        <Grid item>
          <Typography align='left' style={{ fontSize: 36, fontWeight: 700, marginBottom: 40, marginTop: 90 }}>Shelf Life Analysis</Typography>
        </Grid>
        <Grid item style={{ width: "100%", height: 500 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {column2.map((e) => (<TableCell align="right">
                    {e.headerName}
                  </TableCell>))}
                </TableRow>
              </TableHead>
              <TableBody>
                {row2.map((e) => (
                  <TableRow
                    key={e.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">
                      {e.id}
                    </TableCell>
                    <TableCell align="right">{e.cate}</TableCell>
                    <TableCell align="right">{e.farmer}</TableCell>
                    <TableCell align="right">{e.product}</TableCell>
                    <TableCell align="right">{e.quantity}</TableCell>
                    <TableCell align="right">{e.type}</TableCell>
                    <TableCell align="right">{e.rottenDay}</TableCell>
                    <TableCell align="right">{e.damage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  </Grid>)
}
