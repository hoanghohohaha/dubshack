import { FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { Line } from "react-chartjs-2";
import Calendar from '../../components/Calendar/Calendar';
import Invetory from "../../config/Inventory.json"


function createData(id, status, operator, type, product, quantity, rottenDay, location, deliveryDay) {
  return { id, status, operator, type, product, quantity, rottenDay, location, deliveryDay };
}

const row = []
Invetory.map((e) => row.push(createData(e['Shipping Number'], e.Status, e.Operator, e.Type, e.Products, e.Quantity, e['Days until Rotten'], e.Location, e['Delivery Date'])))

const columns = [
  { field: 'id', headerName: 'Shipping Number', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'operator', headerName: 'Operator', width: 130 },
  {
    field: 'type',
    headerName: 'Type',
    width: 90,
  },
  {
    field: 'product',
    headerName: 'Product',
    sortable: false,
    width: 160,
  },
  { field: 'quantity', headerName: 'Last name', width: 130 },
  { field: 'rottenDay', headerName: 'Day Rotten', width: 130 },
  { field: 'location', headerName: 'Location', width: 130 },
  { field: 'deliveryDay', headerName: 'Day delivery', width: 130 },

];




export default function DashBoardSaler() {
  const [name, setName] = React.useState("Hoang Long");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  let data1 = [];
  let label = [];
  let prev = 100;
  for (let i = 0; i < 30; i++) {
    if (i % 2 === 0) {
      prev -= Math.random() * 10
    }
    else if (!(i % 2 === 0)) {
      prev += Math.random() * 2
    }
    if (prev <= 10) {
      i = 101;
    }
    data1.push({ x: i, y: prev });
    label.push(i)

  }
  const data = {
    labels: label,
    datasets: [
      {
        label: name + "'s product",
        data: data1,
        fill: true,
        borderColor: "#FCC1AB",
        backgroundColor: "#FEECE4",
      },
    ]
  };
  return <Grid style={{ marginTop: 124 }}>
    <Grid container>
      <Typography style={{ fontSize: 56, fontWeight: 700, marginBottom: 80 }}>Dashboard</Typography>
    </Grid>
    <Grid container justifyContent="space-between">
      <Grid item>
        <Grid container justifyContent="space-between" alignItems='center'>
          <Grid item>
            <Typography>Fresh %</Typography>
          </Grid>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography>
                  Decay Chart for Rotten Level
                </Typography>
              </Grid>
              <Grid item>
                <div style={{ position: "relative", height: 400, width: 600 }}>
                  <Line data={data}
                    options={{ maintainAspectRatio: false }} config />
                </div>
              </Grid>
              <Grid item>
                <Typography>
                  Days after Received
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Grid container style={{ width: "100%" }}>
              <Typography>Seller</Typography>
              <FormControl style={{ marginTop: 16 }} fullWidth>
                <Select
                  value={name}
                  onChange={handleChange}
                >
                  <MenuItem value={"Hoang Long"}>Hoang Long</MenuItem>
                  <MenuItem value={"Michelle"}>Michelle</MenuItem>
                  <MenuItem value={"Anna Kim"}>Anna Kim</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: 16 }}>
            <Calendar />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container justifyContent='space-between' style={{ marginTop: 80 }}>
      <Grid item>
        <Typography>Inventory</Typography>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Typography>Status</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ marginLeft: 8 }}>Rotten Days</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ marginLeft: 8 }}>More Filter</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container style={{ width: '100%', marginTop: 40, marginBottom: 100 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((e) => (<TableCell align="right">
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
                <TableCell align="right">{e.status}</TableCell>
                <TableCell align="right">{e.operator}</TableCell>
                <TableCell align="right">{e.type}</TableCell>
                <TableCell align="right">{e.product}</TableCell>
                <TableCell align="right">{e.quantity}</TableCell>
                <TableCell align="right">{e.rottenDay}</TableCell>
                <TableCell align="right">{e.location}</TableCell>
                <TableCell align="right">{e.deliveryDay}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>
}
