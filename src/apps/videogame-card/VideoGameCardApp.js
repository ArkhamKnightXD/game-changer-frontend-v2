import React, {useEffect, useState} from 'react';
import VideoGameCard from "./VideoGameCard";
import {getAllVideoGames} from "../../services/VideoGameService";

const VideoGameCardApp = () => {

    const [videoGames, setVideoGames] = useState([]);

    useEffect(() => {

        getAllVideoGames(setVideoGames);
    }, []);

    return (

        <div>

            {videoGames.map((videoGame) => (

                <VideoGameCard actualVideoGame={videoGame}/>
            ))}

        </div>

    );
};


export default VideoGameCardApp;
