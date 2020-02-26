import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

export default function CustomizedTable(props){
  const { heads, rows } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              { heads.map(row => (<TableCell key={row}>{row}</TableCell>))}
            </TableRow>
          </TableHead>
          <TableBody>
           { rows.map( (row, index_r) => {
               return (
                 <TableRow key={`${index_r}row`}>
                   {row.map((column,index_c) => {
                     return (
                       <TableCell
                         component="th"
                         scope="row"
                         key={`${index_c}column`}
                         >
                         {column}
                       </TableCell>
                     );
                   })}
                 </TableRow>
               );
             })
           }
          </TableBody>
        </Table>
       </TableContainer>
    </Paper>
  );
}
