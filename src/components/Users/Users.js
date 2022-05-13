import React from 'react';
import useStyles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { CircularProgress, Grow, useScrollTrigger } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const Users = () => {
    const users = useSelector((state) => state.users);
    const classes = useStyles();


    return (

        !users.data ? <CircularProgress /> : (
            <Grow in>
                <>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Users</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.data.map((user) => (
                                    <StyledTableRow className={classes.tableRow} key={user.id}>
                                        <StyledTableCell align="center" component="th" scope="row">
                                        {user.username}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            </Grow>
        )


    );
}

export default Users;