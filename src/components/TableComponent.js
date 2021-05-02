import React from "react";
import {deleteVideoGameById} from "../services/VideoGameService";

function TableComponent(props){

    const deleteVideoGame = async (videoGameId) =>{

        await deleteVideoGameById(videoGameId, props.setVideoGames);
    };

    return(
        <div className="App">

            <h1>{props.tableName}</h1>

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

                {props.videoGames.map((videoGame)=>(
                    <tr key={videoGame.id}>
                        <td>{videoGame.name}</td>
                        <td>{videoGame.developer}</td>
                        <td>{videoGame.genre}</td>
                        <td>{videoGame.gameModes}</td>
                        <td><button className="btn-primary">Edit</button> <button onClick={() => deleteVideoGame(videoGame.id)} className="btn-danger">Delete</button> </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;