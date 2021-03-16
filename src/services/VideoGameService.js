import axios from "axios";


export const getAllVideoGames = (setVideoGames) => {

    axios.get(`http://localhost:88/api/v1/games`).then(res => {

        setVideoGames(res.data);
    });
};