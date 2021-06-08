import axios from "axios";

const URL = "http://localhost:88";


export const getAllVideoGames = (setVideoGames) => {

    axios.get(`${URL}/api/v1/video-games`).then(response => {

        setVideoGames(response.data);
    });
};


export const saveVideoGame = async (videoGame, setVideoGames) => {

    await axios.post(`${URL}/api/v1/save-video-game`, videoGame);

    getAllVideoGames(setVideoGames);
};


export const getActualVideoGame = (videoGameId, setActualVideoGame) =>{

    axios.get(`${URL}/api/v1/get-video-game-by/${videoGameId}`).then(response => {

        setActualVideoGame(response.data);
    });
};


export const updateVideoGame = async (videoGameToUpdate, setVideoGames) => {

    await axios.put(`${URL}/api/v1/update-video-game`, videoGameToUpdate);

    getAllVideoGames(setVideoGames);
};


export const deleteVideoGameById = async (videoGameId, setVideoGames) => {

    await axios.delete(`${URL}/api/v1/delete-video-game-by/${videoGameId}`);

    getAllVideoGames(setVideoGames);
};
