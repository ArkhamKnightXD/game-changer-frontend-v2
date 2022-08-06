import {useEffect, useState} from "react";
import {getAllVideoGames, getVideoGameById} from "../../services/VideoGameService";

const useCrudLogic = () => {

    const [videoGames, setVideoGames] = useState([]);
    const [actualVideoGame, setActualVideoGame] = useState({});
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const getActualVideoGameById = (videoGameId) => {

        getVideoGameById(videoGameId, setActualVideoGame);

        setIsDialogOpen(true);
    };

    //idealmente es mejor manejar los estados desde el componente padre y mandarle esto estados a los componentes hijos
    useEffect(() => {

        getAllVideoGames(setVideoGames);
    }, []);


    return {videoGames, setVideoGames, actualVideoGame, isDialogOpen, setIsDialogOpen, getActualVideoGameById};
};

export default useCrudLogic;
