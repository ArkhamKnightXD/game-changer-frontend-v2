import {useEffect, useState} from 'react';
import {getAllVideoGames, getVideoGameById} from "../../services/VideoGameService";
import FormDialog from "../../components/FormDialog";
import Button from "@mui/material/Button";
import VideoGameTable from "./VideoGameTable";

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


    //idealmente es mejor manejar los estados desde el componente padre y mandarle esto estados a los componentes hijos
    useEffect(() => {

        getAllVideoGames(setVideoGames);
    }, []);


    return (

        <>

            <Button variant="contained" color="primary" className="align-content-center" onClick={handleOpenDialog}>
                Add Video Game
            </Button>

            <VideoGameTable dataList={videoGames} getActualData={getActualVideoGame}
                            setVideoGames={setVideoGames}/>

            {/*Si no hay necesidad de tener componentes anidados, lo ideal es llamarlo todos aqui, para asi no tener que
            enviar props innecesarios a componentes intermedios para pasarlos al componente deseado*/}
            <FormDialog isDialogOpen={isDialogOpen} setVideoGames={setVideoGames}
                        setIsDialogOpen={setIsDialogOpen} actualVideoGame={actualVideoGame} />

        </>
    );
};

export default VideoGameApp;
