import axios from "axios";

const URL = "http://localhost:88";


export const getAllVideoGames = (setVideoGames) => {

    axios.get(`${URL}/api/v1/video-games`).then(response => {

        setVideoGames(response.data);
    });
};


export const saveVideoGame = async (videoGame, setVideoGames) => {

    await axios.post(`${URL}/api/v1/video-games`, videoGame);

    getAllVideoGames(setVideoGames);
};


export const getActualVideoGame = (videoGameId, setActualVideoGame) =>{

    axios.get(`${URL}/api/v1/video-games/${videoGameId}`).then(response => {

        setActualVideoGame(response.data);
    });
};


export const updateVideoGame = async (videoGameToUpdate, setVideoGames) => {

    await axios.put(`${URL}/api/v1/video-games`, videoGameToUpdate);

    getAllVideoGames(setVideoGames);
};


export const deleteVideoGameById = async (videoGameId, setVideoGames) => {

    await axios.delete(`${URL}/api/v1/video-games/${videoGameId}`);

    getAllVideoGames(setVideoGames);
};
