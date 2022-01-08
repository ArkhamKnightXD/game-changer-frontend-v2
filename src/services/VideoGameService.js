import axios from "axios";

const URL = "http://localhost:88/api/v1";

//las funciones de axios son promise, por lo tanto siempre que agregue el then no es necesario que utilice async/await
//Las funciones async/await son basicamente promise simplificadas

//para manejar los errores con los promise utilizamos try/catch, si deseamos hacer eso
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


export const saveVideoGame = (videoGame, setVideoGames) => {

    axios.post(`${URL}/video-games`, videoGame).then(response => {

        setVideoGames(response.data);
    });
};


export const updateVideoGame = (videoGameToUpdate, setVideoGames) => {

    axios.put(`${URL}/video-games`, videoGameToUpdate).then(response => {

        setVideoGames(response.data);
    });
};


export const deleteVideoGameById = (videoGameId, setVideoGames) => {

    axios.delete(`${URL}/video-games/${videoGameId}`).then(response => {

        setVideoGames(response.data);
    });
};


export const getAllVideoGamesGenre = () => {

    return [

        "JRPG",
        "RPG",
        "Action",
        "Strategy",
        "Racing",
        "Sport",
        "Fighting",
        "Hack"
    ];
};
