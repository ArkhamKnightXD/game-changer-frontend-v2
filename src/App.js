import './App.css';
import TableComponent from "./components/TableComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {getAllVideoGames} from "./services/VideoGameService";
import FormDialog from "./components/FormDialog";

function App() {

    const [videoGames, setVideoGames] = useState([]);
    const [actualVideoGame, setActualVideoGame] = useState(null);
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const handleOpenDialog = () =>{

        setIsOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setIsOpenDialog(false);
    };

    useEffect(()=>{

        getAllVideoGames(setVideoGames);

    }, []);


  return (

    <div className="App">

        <button className="btn btn-primary" onClick={handleOpenDialog}>Add Video Game</button>

        <TableComponent  videoGames={videoGames} setVideoGames={setVideoGames} setActualVideoGame={setActualVideoGame}/>

        <FormDialog isOpenDialog={isOpenDialog} setVideoGames={setVideoGames} handleOpen={handleOpenDialog} handleClose={handleCloseDialog} actualVideoGame={actualVideoGame} />
    </div>
  );
}

export default App;
