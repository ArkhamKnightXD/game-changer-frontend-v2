import React, {useEffect, useState} from 'react';
import {getAllVideoGames, getVideoGameById} from "../../services/VideoGameService";
import FormDialog from "../../components/form-components/FormDialog";
import Button from "@material-ui/core/Button";
import EnhancedTable from "../../components/EnhancedTable";

//Esta es la forma ideal en la que manejo mis paginas en react, creo un componente App y aqui llamare los componentes a utilizar
const VideoGameApp = () => {

    const [videoGames, setVideoGames] = useState([]);
    const [actualVideoGame, setActualVideoGame] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const handleOpenDialog = () => {

        setIsDialogOpen(true);
    };


    const handleCloseDialog = () => {

        setIsDialogOpen(false);
    };


    const getActualVideoGame = (videoGameId) => {

        getVideoGameById(videoGameId, setActualVideoGame);

        handleOpenDialog();
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

            {/*<VideoGameTable videoGames={videoGames} setVideoGames={setVideoGames} getActualVideoGame={getActualVideoGame}/>*/}

            <EnhancedTable dataList={videoGames} getActualData={getActualVideoGame} setDataList={setVideoGames} />

            {/*Si no hay necesidad de tener componentes anidados, lo ideal es llamarlo todos aqui, para asi no tener que
            enviar props innecesarios a componentes intermedios para pasarlos al componente deseado*/}
            <FormDialog isDialogOpen={isDialogOpen} setVideoGames={setVideoGames}
                        handleClose={handleCloseDialog} actualVideoGame={actualVideoGame} />

        </div>

    );
};

export default VideoGameApp;
