import axios from "axios";

const URL = "http://localhost:88/api/v1";


export const getAllVideoGames = (setVideoGames) => {

    axios.get(`${URL}/video-games`).then(response => {

        setVideoGames(response.data);
    });
};


export const getVideoGameById = (videoGameId, setActualVideoGame) => {

    axios.get(`${URL}/video-games/${videoGameId}`).then(response => {

        setActualVideoGame(response.data);
    });
};


export const saveVideoGame = async (videoGame, setVideoGames) => {

    await axios.post(`${URL}/video-games`, videoGame);

    getAllVideoGames(setVideoGames);
};


export const updateVideoGame = async (videoGameToUpdate, setVideoGames) => {

    await axios.put(`${URL}/video-games`, videoGameToUpdate);

    getAllVideoGames(setVideoGames);
};


export const deleteVideoGameById = async (videoGameId, setVideoGames) => {

    await axios.delete(`${URL}/video-games/${videoGameId}`);

    getAllVideoGames(setVideoGames);
};
