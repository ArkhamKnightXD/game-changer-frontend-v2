import '../App.css';
import React from 'react';
import VideoGameTable from "../components/VideoGameTable";

//Esta es la forma ideal en la que manejo mis paginas en react, creo un componente App y aqui llamare los componentes a utilizar
const VideoGameApp = () => {

    return (

        <div className="App">

            <VideoGameTable/>

        </div>

    );
};

export default VideoGameApp;
