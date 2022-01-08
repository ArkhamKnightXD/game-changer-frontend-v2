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

                <div key={videoGame.id}>
                    <VideoGameCard actualVideoGame={videoGame}/>
                </div>
            ))}

        </div>

    );
};


export default VideoGameCardApp;
