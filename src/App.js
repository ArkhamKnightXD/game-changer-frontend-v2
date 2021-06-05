import './App.css';
import TableComponent from "./components/TableComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {getAllVideoGames} from "./services/VideoGameService";
import FormDialog from "./components/FormDialog";

function App() {

    const [videoGames, setVideoGames] = useState([]);
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

        <TableComponent tableName="Video Games" videoGames={videoGames} setVideoGames={setVideoGames}/>

        <FormDialog isOpenDialog={isOpenDialog} handleOpen={handleOpenDialog} handleClose={handleCloseDialog} />
    </div>
  );
}

export default App;
