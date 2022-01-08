import React, {useState} from 'react';
import TableRow from "@material-ui/core/TableRow";
import {Box, Paper, TableCell, TablePagination} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import EnhancedTableHead from "./EnhancedTableHead";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

export default function EnhancedTable(props) {

    const {dataList, deleteVideoGame, getActualData, headCells} = props;

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const descendingComparator = (a, b, orderBy) => {

        if (b[orderBy] < a[orderBy]) {

            return -1;
        }
        if (b[orderBy] > a[orderBy]) {

            return 1;
        }

        return 0;
    };


    const getComparator = (order, orderBy) => {

        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    };


    const handleRequestSort = (event, property) => {

        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    const handleChangePage = (event, newPage) => {

        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {

        setRowsPerPage(event.target.value);

        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataList.length) : 0;


    return (

        <Box sx={{ width: '100%' }}>

            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} headCells={headCells}/>

                        <TableBody>
                      
                            {dataList.slice().sort(getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            // aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            // selected={isItemSelected}
                                        >

                                            <TableCell onClick={() => getActualData(row.id)}>{row.name}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.developer}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.gameModes}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.genre}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.rating}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.sellPrice}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.stock}</TableCell>

                                            <TableCell><Button variant="contained" color="secondary"
                                                               onClick={() => deleteVideoGame(row.id)}>Delete</Button> </TableCell>

                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={dataList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    onChangePage={handleChangePage}/>
            </Paper>
        </Box>
    );
}

EnhancedTable.propTypes = {

    headCells: PropTypes.array.isRequired,
    dataList: PropTypes.array.isRequired,
    deleteVideoGame: PropTypes.func.isRequired,
    getActualData: PropTypes.func.isRequired,
};