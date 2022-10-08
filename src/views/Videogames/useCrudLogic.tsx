import {useEffect, useState} from "react";
import {getAllVideoGames, getVideoGameById} from "../../services/VideoGameService";

interface VideoGame {
    id: number;
    name: string;
    developer: string;
    gameModes: string;
    genre: string;
    rating: number;
    sellPrice: number;
    stock: number;
}

const initialState: VideoGame = {id: 0, developer: "test", name: "test",
    gameModes: "test", stock: 1, genre: "RPG", rating: 7, sellPrice: 100};

const useCrudLogic = () => {

    //Para arreglos y objetos, si tengo la interfaz definida, la mejor forma de declarar los useState es de esta forma.
    const [videoGames, setVideoGames] = useState<VideoGame[]>([initialState]);
    const [actualVideoGame, setActualVideoGame] = useState<VideoGame>(initialState);
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const getActualVideoGameById = (videoGameId: number): void => {

        getVideoGameById(videoGameId, setActualVideoGame);

        setIsDialogOpen(true);
    };

    //idealmente es mejor manejar los estados desde el componente padre y mandarle estos estados a los componentes hijos.
    useEffect(() => {

        getAllVideoGames(setVideoGames);
    }, []);


    return {videoGames, setVideoGames, actualVideoGame, isDialogOpen, setIsDialogOpen, getActualVideoGameById};
};

export default useCrudLogic;
