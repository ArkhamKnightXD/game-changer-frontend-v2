import './App.css';
import TableComponent from "./components/TableComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {getAllVideoGames} from "./services/VideoGameService";

function App() {

    const [videoGames, setVideoGames] = useState([]);

    useEffect(()=>{

        getAllVideoGames(setVideoGames);

    }, [])

  return (

    <div className="App">

      <h1>Inicio</h1>

        <button className="btn btn-outline-primary">Inicio</button>

        {videoGames.map((videoGame)=>(
            <h1>{videoGame.name}</h1>
        ))}

        <TableComponent name="test"/>

    </div>
  );
}

export default App;
