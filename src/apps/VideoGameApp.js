import '../App.css';
import React, {useEffect, useState} from 'react';
import VideoGameTable from "../components/VideoGameTable";
import {getAllVideoGames} from "../services/VideoGameService";

//Esta es la forma ideal en la que manejo mis paginas en react, creo un componente App y aqui llamare los componentes a utilizar
const VideoGameApp = () => {

    const [videoGames, setVideoGames] = useState([]);

    //idealmente es mejor manejar los estados desde el componente padre y mandarle esto estados a los componentes hijos
    useEffect(() => {

        getAllVideoGames(setVideoGames);
    }, []);


    return (

        <div className="App">

            <VideoGameTable videoGames={videoGames} setVideoGames={setVideoGames}/>

        </div>

    );
};

export default VideoGameApp;
