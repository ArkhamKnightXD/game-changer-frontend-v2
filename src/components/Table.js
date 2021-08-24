import React, {useEffect, useState} from "react";
import {deleteVideoGameById, getActualVideoGame, getAllVideoGames} from "../services/VideoGameService";
import FormDialog from "./FormDialog";

function Table(){

    const [videoGames, setVideoGames] = useState([]);
    const [actualVideoGame, setActualVideoGame] = useState(null);
    const [isOpenDialog, setIsOpenDialog] = useState(false);


    useEffect(()=>{

        getAllVideoGames(setVideoGames);

    }, []);


    const handleOpenDialog = () =>{

        setIsOpenDialog(true);
    };


    const handleCloseDialog = () => {

        setIsOpenDialog(false);
    };


    const deleteVideoGame = async (videoGameId) =>{

        await deleteVideoGameById(videoGameId, setVideoGames);
    };


    const getVideoGameById = (videoGameId) => {

        getActualVideoGame(videoGameId, setActualVideoGame);

        handleOpenDialog();
    };

    return(

        <div className="App">

            <button className="btn btn-primary" onClick={handleOpenDialog}>Add Video Game</button>

            <h1>Video Games</h1>

            <table className="table table-striped">

                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Developer</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Game Modes</th>
                    <th scope="col">Options</th>
                </tr>
                </thead>
                <tbody>

                {videoGames.map((videoGame)=> (
                    <tr key={videoGame.id}>
                        <td>{videoGame.name}</td>
                        <td>{videoGame.developer}</td>
                        <td>{videoGame.genre}</td>
                        <td>{videoGame.gameModes}</td>
                        <td><button className="btn-primary" onClick={() => getVideoGameById(videoGame.id)}>Edit</button>
                            <button onClick={() => deleteVideoGame(videoGame.id)} className="btn-danger">Delete</button> </td>
                    </tr>
                ))}

                </tbody>
            </table>

            {/*Recomendacion de tener el dialog en el componente que mas lo utilizara y no en el app, tambien los estados*/}
            <FormDialog isOpenDialog={isOpenDialog} setVideoGames={setVideoGames} handleOpen={handleOpenDialog}
                        handleClose={handleCloseDialog} actualVideoGame={actualVideoGame} />
        </div>
    );
}

export default Table;
