import axios from "axios";

const URL = "http://localhost:88";

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

//las funciones de axios son promise, por lo tanto siempre que agregue el then no es necesario que utilice async/await
//Las funciones async/await son básicamente promise simplificadas.

//para manejar los errores con los promise utilizamos try/catch, si deseamos hacer eso
export const getAllVideoGames = (setVideoGames: (data: VideoGame[]) => void) => {

    axios.get(`${URL}/api/v1/games/`).then(response => {

        setVideoGames(response.data);
    });
};


export const getAllVideoGamesWithPagination = (setVideoGames: (data: VideoGame[]) => void, paginationData: any) => {

    axios.get(`${URL}/api/v1/games/pagination/${paginationData.pageSize}/${paginationData.sortIdentifier}/${paginationData.isAscending}`)
        .then(response => {

        setVideoGames(response.data);
    });
};


export const getVideoGameById = (videoGameId: number, setActualVideoGame: (videoGame: VideoGame) => void) => {

    axios.get(`${URL}/api/v1/games/${videoGameId}`).then(response => {

        setActualVideoGame(response.data);
    });
};


export const saveVideoGame = (videoGame: VideoGame, setVideoGames: (data: VideoGame[]) => void) => {

    axios.post(`${URL}/api/v1/games/`, videoGame).then(response => {

        setVideoGames(response.data);
    });
};


export const updateVideoGame = (videoGameToUpdate: VideoGame, setVideoGames: (data: VideoGame[]) => void) => {

    axios.put(`${URL}/api/v1/games/`, videoGameToUpdate).then(response => {

        setVideoGames(response.data);
    });
};


export const deleteVideoGameById = (videoGameId: number, setVideoGames: (data: VideoGame[]) => void) => {

    axios.delete(`${URL}/api/v1/games/${videoGameId}`).then(response => {

        setVideoGames(response.data);
    });
};


export const getAllVideoGamesGenre = (): string[] => {

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


export const sum = (a: number, b: number): number => {

    return a + b;
}
