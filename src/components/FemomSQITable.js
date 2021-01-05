// 05 JAN 2020
// re-use table for displaying queries from record DB table

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
    minWidth: 650,
  },
  tableCellPass: {
      backgroundColor: '#0CB5F3',
   },
   tableCellFail: {
    backgroundColor: '#f7a8b0',
 },
}));


export default function BasicTable(props) {

  const classes = useStyles();

  const getStatus = (state) => {
      switch (state) {
          case 1:
              return "PASS"
          case 0:
              return "FAIL"
          default:
              return "N/A"
      }
  }
  
  return (
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>record</TableCell>
            <TableCell align="center">status</TableCell>
            <TableCell align="center">mSQICh1</TableCell>
            <TableCell align="center">mSQICh2</TableCell>
            <TableCell align="center">mSQICh3</TableCell>
            <TableCell align="center">mSQICh4</TableCell>
            <TableCell align="center">mSQICh1</TableCell>
            <TableCell align="center">fSQICh2</TableCell>
            <TableCell align="center">fSQICh3</TableCell>
            <TableCell align="center">fSQICh4</TableCell>
            <TableCell align="center">rawECGSQI</TableCell>
            <TableCell align="center">signallost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.records ? (
              props.records.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row"> {row.name} </TableCell>
              <TableCell align="center" className={row.pass==1 ? classes.tableCellPass : classes.tableCellFail}>{getStatus(row.pass)}</TableCell>
              <TableCell align="center">{Number(row.mSQICh1).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.mSQICh2).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.mSQICh3).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.mSQICh4).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.fSQICh1).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.fSQICh2).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.fSQICh3).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.fSQICh4).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.rawECGSQI).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(1.0-row.signalLost).toFixed(2)}</TableCell>
            </TableRow>
          ))
          ) : (
            <TableRow key={1}>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
