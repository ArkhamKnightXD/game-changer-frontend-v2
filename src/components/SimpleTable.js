import { withStyles, makeStyles } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {deleteVideoGameById} from "../services/VideoGameService";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

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

export default function SimpleTable(props) {

    const {videoGames, setVideoGames, getActualVideoGame} = props;
    const classes = useStyles();


    const deleteVideoGame = (videoGameId) =>{

        deleteVideoGameById(videoGameId, setVideoGames);
    };


    return (

        <TableContainer component={Paper}>

            <h1>Video Games</h1>

            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="left">Developer</StyledTableCell>
                        <StyledTableCell align="left">Game Modes</StyledTableCell>
                        <StyledTableCell align="left">Genre</StyledTableCell>
                        <StyledTableCell align="left">Rating</StyledTableCell>
                        <StyledTableCell align="left">Price</StyledTableCell>
                        <StyledTableCell align="left">Stock</StyledTableCell>
                        <StyledTableCell align="left">Options</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {videoGames.map((videoGame) => (
                        <StyledTableRow key={videoGame.id} >
                            <StyledTableCell component="th" scope="row">
                                {videoGame.name}
                            </StyledTableCell>
                            <StyledTableCell align="left">{videoGame.developer}</StyledTableCell>
                            <StyledTableCell align="left">{videoGame.gameModes}</StyledTableCell>
                            <StyledTableCell align="left">{videoGame.genre}</StyledTableCell>
                            <StyledTableCell align="left">{videoGame.rating}</StyledTableCell>
                            <StyledTableCell align="left">{videoGame.sellPrice}</StyledTableCell>
                            <StyledTableCell align="left">{videoGame.stock}</StyledTableCell>

                            <StyledTableCell align="left">

                                <Button variant="contained" color="primary"
                                        onClick={() => getActualVideoGame(videoGame.id)}>Edit</Button>

                                <Button variant="contained" color="secondary"
                                        onClick={() => deleteVideoGame(videoGame.id)}>Delete</Button>

                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    );
}

SimpleTable.propTypes = {

    setVideoGames: PropTypes.func.isRequired,
    videoGames: PropTypes.array.isRequired,
    getActualVideoGame: PropTypes.func.isRequired,
};