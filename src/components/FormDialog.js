import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";


function FormDialog(props) {

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
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        name="developer"
                        id="developer"
                        label="Developer"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        name="genre"
                        id="genre"
                        label="Genre"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        name="gameModes"
                        id="gameModes"
                        label="Game Modes"
                        type="text"
                        // value={}
                        fullWidth
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.handleClose} color="primary">
                        Add Videogame
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default FormDialog;
