import {useEffect, useState} from "react";
import {deleteVideoGameById, getAllVideoGames, getVideoGameById} from "../../services/VideoGameService";

const useCrudLogic = () => {

    const [videoGames, setVideoGames] = useState([]);
    const [actualVideoGame, setActualVideoGame] = useState({});
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [idForDelete, setIdForDelete] = useState(0);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);


    const handleOpenDeleteDialog = (videoGameId) => {

        setIdForDelete(videoGameId);

        setIsDeleteDialogOpen(true);
    };


    const getActualVideoGameById = (videoGameId) => {

        getVideoGameById(videoGameId, setActualVideoGame);

        handleOpenFormDialog();
    };


    const deleteRowData = () => {

        deleteVideoGameById(idForDelete, setVideoGames);
    };


    const handleOpenFormDialog = () => {

        setIsDialogOpen(true);
    };

    //idealmente es mejor manejar los estados desde el componente padre y mandarle esto estados a los componentes hijos
    useEffect(() => {

        getAllVideoGames(setVideoGames);
    }, []);


    return {videoGames, setVideoGames, actualVideoGame, isDialogOpen, isDeleteDialogOpen, setIsDeleteDialogOpen,
        setIsDialogOpen, deleteRowData, getActualVideoGameById, handleOpenDeleteDialog, handleOpenFormDialog};
};

export default useCrudLogic;
