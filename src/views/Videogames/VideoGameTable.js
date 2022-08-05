import {useState} from 'react';
import TableRow from "@mui/material/TableRow";
import {Box, Paper, TableCell, TablePagination} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import VideoGameTableHead from "./VideoGameTableHead";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DeleteRowElementDialog from "../../components/DeleteRowElementDialog";
import {deleteVideoGameById} from "../../services/VideoGameService";

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'developer',
        numeric: true,
        disablePadding: false,
        label: 'Developer',
    },
    //El id debe de ser igual que la propiedad que se envia desde el backend
    {
        id: 'gameModes',
        numeric: true,
        disablePadding: false,
        label: 'Game Modes',
    },
    {
        id: 'genre',
        numeric: true,
        disablePadding: false,
        label: 'Genre',
    },
    {
        id: 'rating',
        numeric: true,
        disablePadding: false,
        label: 'Rating',
    },
    {
        id: 'sellPrice',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'stock',
        numeric: true,
        disablePadding: false,
        label: 'Stock',
    },
    {
        id: 'options',
        numeric: false,
        disablePadding: false,
        label: 'Options',
    },
];

export default function VideoGameTable({dataList, getActualData, setVideoGames}) {

    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("name");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [idForDelete, setIdForDelete] = useState(0);


    const handleOpenDeleteDialog = (videoGameId) => {

        setIdForDelete(videoGameId);

        setIsOpenDialog(true);
    };


    const deleteRowData = () => {

        deleteVideoGameById(idForDelete, setVideoGames);
    };


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
                        <VideoGameTableHead order={order} orderBy={orderBy}
                                            onRequestSort={handleRequestSort} headCells={headCells}/>

                        <TableBody>

                            {dataList.slice().sort(getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.id}
                                        >

                                            <TableCell onClick={() => getActualData(row.id)}>{row.name}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.developer}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.gameModes}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.genre}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.rating}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.sellPrice}</TableCell>
                                            <TableCell onClick={() => getActualData(row.id)} align="right">{row.stock}</TableCell>

                                            <TableCell><Button variant="contained" color="secondary"
                                                               onClick={() => handleOpenDeleteDialog(row.id)}>Delete</Button> </TableCell>

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
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    onPageChange={handleChangePage}/>
            </Paper>

            <DeleteRowElementDialog isOpen={isOpenDialog} deleteData={deleteRowData} setIsOpen={setIsOpenDialog}/>
        </Box>
    );
}

VideoGameTable.propTypes = {

    dataList: PropTypes.array.isRequired,
    getActualData: PropTypes.func.isRequired,
    setVideoGames: PropTypes.func.isRequired
};
