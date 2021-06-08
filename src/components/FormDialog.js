import React, {useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {saveVideoGame} from "../services/VideoGameService";


function FormDialog(props) {

    const [name, setName] = useState("");
    const [developer, setDeveloper] = useState("");
    const [genre, setGenre] = useState("");
    const [gameModes, setGameModes] = useState("");

    const handleNameChange = (event) =>{

        setName(event.target.value);
    };

    const handleDeveloperChange = (event) => {

        setDeveloper(event.target.value);
    };

    const handleGenreChange = (event) => {

        setGenre(event.target.value);
    };

    const handleGameModesChange = (event) => {

        setGameModes(event.target.value);
    };

    const resetFormData = () => {

        setName("");
        setDeveloper("");
        setGenre("");
        setGameModes("");
    };

    const handleSubmit = async () => {

        const videoGameToSave = {name, developer, genre, gameModes};

        await saveVideoGame(videoGameToSave, props.setVideoGames);

        resetFormData();

        props.handleClose();
    };

    const handleCancel = () => {

        resetFormData();

        props.handleClose();
    };

    return (
        <div>

            <Dialog open={props.isOpenDialog} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Videogame</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        name="developer"
                        id="developer"
                        label="Developer"
                        type="text"
                        value={developer}
                        onChange={handleDeveloperChange}
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        name="genre"
                        id="genre"
                        label="Genre"
                        type="text"
                        value={genre}
                        onChange={handleGenreChange}
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        name="gameModes"
                        id="gameModes"
                        label="Game Modes"
                        type="text"
                        value={gameModes}
                        onChange={handleGameModesChange}
                        fullWidth
                    />

                </DialogContent>

                <DialogActions>
                    <button onClick={handleCancel} className="btn-danger">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} type="submit" className="btn-primary">
                        Add Videogame
                    </button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default FormDialog;
