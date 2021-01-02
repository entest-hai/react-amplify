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
          {props.records.map((row) => (
            <TableRow key={row.recordname}>
              <TableCell component="th" scope="row"> {row.recordname} </TableCell>
              <TableCell align="center" className={row.pass==1 ? classes.tableCellPass : classes.tableCellFail}>{row.pass==1 ? "PASS" : "FAIL" }</TableCell>
              <TableCell align="center">{Number(row.ch1msqi).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.ch2msqi).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.ch3msqi).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.ch4msqi).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.ch1fsqi).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.ch2fsqi).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.ch3fsqi).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.ch4fsqi).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.rawecgsqi).toFixed(2)}</TableCell>
              <TableCell align="center">{Number(row.signallostratio).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
