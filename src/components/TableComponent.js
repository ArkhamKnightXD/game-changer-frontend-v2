import React from "react";
import {deleteVideoGameById, getActualVideoGame} from "../services/VideoGameService";

function TableComponent(props){

    const deleteVideoGame = async (videoGameId) =>{

        await deleteVideoGameById(videoGameId, props.setVideoGames);
    };

    const getVideoGameById = (videoGameId) => {

        getActualVideoGame(videoGameId, props.setActualVideoGame);
    };

    return(
        <div className="App">

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

                {props.videoGames.map((videoGame)=> (
                    <tr key={videoGame.id}>
                        <td>{videoGame.name}</td>
                        <td>{videoGame.developer}</td>
                        <td>{videoGame.genre}</td>
                        <td>{videoGame.gameModes}</td>
                        <td><button className="btn-primary" onClick={() => getVideoGameById(videoGame.id)}>Edit</button> <button onClick={() => deleteVideoGame(videoGame.id)} className="btn-danger">Delete</button> </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;
