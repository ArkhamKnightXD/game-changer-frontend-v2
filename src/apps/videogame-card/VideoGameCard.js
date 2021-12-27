import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";


const VideoGameCard = (props) => {

    const {actualVideoGame} = props;

    return (

        <Card className="w-25">

            <CardMedia
                component="img"
                width=""
                height="500"
                image="logo192.png"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {actualVideoGame.name}
                </Typography>
                <Typography variant="body2" color="primary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" size="small">Share</Button>
                <Button variant="contained" color="success" size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

VideoGameCard.propTypes = {

    actualVideoGame: PropTypes.object.isRequired,
};

export default VideoGameCard;
