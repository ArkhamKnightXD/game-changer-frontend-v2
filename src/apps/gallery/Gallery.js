import useGalleryStyles from "./useGalleryStyles";
import {Card, CardActions, CardContent, CardMedia, CssBaseline, Grid} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {PhotoCamera} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import {getAllShips} from "../../services/VideoGameService";


function Gallery (){

    const classes = useGalleryStyles();

    const [ships, setShips] = useState([]);

    useEffect(() => {

        getAllShips(setShips);

    }, []);


    return (

        <div style={{background: 'none'}}>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone This is a photo album and i'm trying to make this sentence as long as
                            possible so we
                            can see how does it look like on the screen
                        </Typography>
                    </Container>
                </div>
                <div className={classes.buttons}>

                    <Grid container spacing={2} justify="center">

                        <Grid item>
                            <Button variant="contained" color="primary">
                                See my photos
                            </Button>
                        </Grid>


                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary action
                            </Button>
                        </Grid>

                    </Grid>

                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {ships.map((ship) => (


                            <Grid item key={ship.shipName} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia}
                                               image={ship.shipPhotoUrl}
                                               title="Image title"

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            {ship.shipName}
                                        </Typography>
                                        <Typography>
                                            {ship.relationshipStatus}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}


                    </Grid>

                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
        </div>
    );
}

export default Gallery;
