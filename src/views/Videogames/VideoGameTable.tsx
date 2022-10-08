import {useState} from 'react';
import {
    Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow
} from "@mui/material";
import VideoGameTableHead from "./VideoGameTableHead";
import DeleteRowElementDialog from "../../components/DeleteRowElementDialog";
import FormDialog from "../../components/FormDialog";
import useCrudLogic from "./useCrudLogic";
import useTableLogic from "./useTableLogic";
import {deleteVideoGameById} from "../../services/VideoGameService";

export default function VideoGameTable() {

    const {
        videoGames, setVideoGames, isDialogOpen, setIsDialogOpen,
        actualVideoGame, getActualVideoGameById
    } = useCrudLogic();

    const {page, rowsPerPage, handleChangeRowsPerPage, handleChangePage, getComparator} = useTableLogic();

    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("name");
    const [idForDelete, setIdForDelete] = useState(0);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);


    const handleOpenDeleteDialog = (videoGameId: number) => {

        setIdForDelete(videoGameId);

        setIsDeleteDialogOpen(true);
    };


    const deleteRowData = () => {

        deleteVideoGameById(idForDelete, setVideoGames);
    };


    const handleRequestSort = (event: any, property: string) => {

        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - videoGames.length) : 0;


    return (

        <Box sx={{width: '100%'}}>

            <Button variant="contained" color="primary" className="align-content-center"
                    onClick={() => setIsDialogOpen(true)}>
                Add Video Game
            </Button>

            <FormDialog isDialogOpen={isDialogOpen} setVideoGames={setVideoGames}
                        setIsDialogOpen={setIsDialogOpen} actualVideoGame={actualVideoGame}/>

            <Paper sx={{width: '100%', mb: 2}}>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby="tableTitle"
                    >
                        <VideoGameTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort}/>

                        <TableBody>

                            {videoGames.slice().sort(getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.id}
                                        >

                                            <TableCell
                                                onClick={() => getActualVideoGameById(row.id)}>{row.name}</TableCell>
                                            <TableCell onClick={() => getActualVideoGameById(row.id)}
                                                       align="right">{row.developer}</TableCell>
                                            <TableCell onClick={() => getActualVideoGameById(row.id)}
                                                       align="right">{row.gameModes}</TableCell>
                                            <TableCell onClick={() => getActualVideoGameById(row.id)}
                                                       align="right">{row.genre}</TableCell>
                                            <TableCell onClick={() => getActualVideoGameById(row.id)}
                                                       align="right">{row.rating}</TableCell>
                                            <TableCell onClick={() => getActualVideoGameById(row.id)}
                                                       align="right">{row.sellPrice}</TableCell>
                                            <TableCell onClick={() => getActualVideoGameById(row.id)}
                                                       align="right">{row.stock}</TableCell>

                                            <TableCell><Button variant="contained" color="secondary"
                                                               onClick={() => handleOpenDeleteDialog(row.id)}>Delete</Button>
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={videoGames.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    onPageChange={handleChangePage}/>
            </Paper>

            <DeleteRowElementDialog isOpen={isDeleteDialogOpen} deleteData={deleteRowData}
                                    setIsOpen={setIsDeleteDialogOpen}/>
        </Box>
    );
}

