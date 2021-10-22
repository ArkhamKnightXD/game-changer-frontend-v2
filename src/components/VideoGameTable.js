import React, {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {deleteVideoGameById, getVideoGameById, getAllVideoGames} from "../services/VideoGameService";
import FormDialog from "./FormDialog";
import Button from "@material-ui/core/Button";

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

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function VideoGameTable() {

    const classes = useStyles();

    const [videoGames, setVideoGames] = useState([]);
    const [actualVideoGame, setActualVideoGame] = useState(null);
    const [isOpenDialog, setIsOpenDialog] = useState(false);


    useEffect(()=> {

        getAllVideoGames(setVideoGames);

    }, []);


    const handleOpenDialog = () => {

        setIsOpenDialog(true);
    };


    const handleCloseDialog = () => {

        setIsOpenDialog(false);
    };


    const deleteVideoGame = (videoGameId) =>{

        deleteVideoGameById(videoGameId, setVideoGames);
    };


    const getSelectedVideoGameData = (videoGameId) => {

        getVideoGameById(videoGameId, setActualVideoGame);

        handleOpenDialog();
    };

    return (

        <TableContainer component={Paper}>

            <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                Add Video Game
            </Button>

            <h1>Video Games</h1>

            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="left">Developer</StyledTableCell>
                        <StyledTableCell align="left">Genre</StyledTableCell>
                        <StyledTableCell align="left">Game Modes</StyledTableCell>
                        <StyledTableCell align="left">Options</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {videoGames.map((videoGame) => (
                        <StyledTableRow key={videoGame.id}>
                            <StyledTableCell component="th" scope="row">
                                {videoGame.name}
                            </StyledTableCell>
                            <StyledTableCell align="left">{videoGame.developer}</StyledTableCell>
                            <StyledTableCell align="left">{videoGame.genre}</StyledTableCell>
                            <StyledTableCell align="left">{videoGame.gameModes}</StyledTableCell>
                            <StyledTableCell align="left">
                                <Button variant="contained" color="primary" onClick={() => getSelectedVideoGameData(videoGame.id)}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteVideoGame(videoGame.id)}>Delete</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>

            {/*Recomendacion de tener el dialog en el componente que mas lo utilizara y no en el app, tambien los estados*/}
            <FormDialog isOpenDialog={isOpenDialog} setVideoGames={setVideoGames} handleOpen={handleOpenDialog}
                        handleClose={handleCloseDialog} actualVideoGame={actualVideoGame} />

        </TableContainer>
    );
}
