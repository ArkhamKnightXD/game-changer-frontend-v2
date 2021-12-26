import React from 'react';
// import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";


const VideoGameCard = (props) => {

    return (
        <Card sx={{ minWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

// VideoGameCard.propTypes = {
//
// };

export default VideoGameCard;
