import React, {useEffect, useState} from 'react';
import {deleteVideoGameById, getAllVideoGames, getVideoGameById} from "../../services/VideoGameService";
import FormDialog from "../../components/form-components/FormDialog";
import Button from "@mui/material/Button";
import VideoGameTable from "./VideoGameTable";

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'developer',
        numeric: true,
        disablePadding: false,
        label: 'Developer',
    },
    //El id debe de ser igual que la propiedad que se envia desde el backend
    {
        id: 'gameModes',
        numeric: true,
        disablePadding: false,
        label: 'Game Modes',
    },
    {
        id: 'genre',
        numeric: true,
        disablePadding: false,
        label: 'Genre',
    },
    {
        id: 'rating',
        numeric: true,
        disablePadding: false,
        label: 'Rating',
    },
    {
        id: 'sellPrice',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'stock',
        numeric: true,
        disablePadding: false,
        label: 'Stock',
    },
    {
        id: 'options',
        numeric: false,
        disablePadding: false,
        label: 'Options',
    },
];

//Esta es la forma ideal en la que manejo mis paginas en react, creo un componente App y aqui llamare los componentes a utilizar
const VideoGameApp = () => {

    const [videoGames, setVideoGames] = useState([]);
    const [actualVideoGame, setActualVideoGame] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const handleOpenDialog = () => {

        setIsDialogOpen(true);
    };


    const getActualVideoGame = (videoGameId) => {

        getVideoGameById(videoGameId, setActualVideoGame);

        handleOpenDialog();
    };


    const deleteVideoGame = (videoGameId) =>{

        deleteVideoGameById(videoGameId, setVideoGames);
    };

    //idealmente es mejor manejar los estados desde el componente padre y mandarle esto estados a los componentes hijos
    useEffect(() => {

        getAllVideoGames(setVideoGames);
    }, []);


    return (

        <div className="text-center">

            <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                Add Video Game
            </Button>

            <VideoGameTable dataList={videoGames} getActualData={getActualVideoGame}
                            deleteVideoGame={deleteVideoGame} headCells={headCells} setVideoGames={setVideoGames}/>

            {/*Si no hay necesidad de tener componentes anidados, lo ideal es llamarlo todos aqui, para asi no tener que
            enviar props innecesarios a componentes intermedios para pasarlos al componente deseado*/}
            <FormDialog isDialogOpen={isDialogOpen} setVideoGames={setVideoGames}
                        setIsDialogOpen={setIsDialogOpen} actualVideoGame={actualVideoGame} />

        </div>

    );
};

export default VideoGameApp;
