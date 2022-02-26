import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle,} from "@mui/material";
import {getAllVideoGamesGenre, saveVideoGame, updateVideoGame} from "../../services/VideoGameService";
//Este es el modulo a importar para utilizar los proptypes, esto la primera vez debe ser agregado al package-json
import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
import GeneralTextField from "./GeneralTextField";
import GeneralSelect from "./GeneralSelect";

export default function FormDialog(props) {

    //obtengo todos los elementos que utilizare de mi props mediante Destructuring
    const {actualVideoGame, handleClose, isDialogOpen, setVideoGames} = props;

    //En mi componente lo ideal es solo definir estados y variables que seran utilizados solos en este mismo, hay excepciones claro
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [developer, setDeveloper] = useState("");
    const [genre, setGenre] = useState("RPG");
    const [gameModes, setGameModes] = useState("");
    const [sellPrice, setSellPrice] = useState(0);
    const [stock, setStock] = useState(0);

    //la forma mas facil de tener el mismo dialog para crear y editar es simplemente pasarle los datos del actualgame
    //a los estados correspondientes, siempre y cuando el juego actual este presente
    useEffect(() => {

        //verifico que el videojuego actual este para asi llenar los estados
        if(actualVideoGame){

            setId(actualVideoGame.id);
            setName(actualVideoGame.name);
            setDeveloper(actualVideoGame.developer);
            setGenre(actualVideoGame.genre);
            setGameModes(actualVideoGame.gameModes);
            setSellPrice(actualVideoGame.sellPrice);
            setStock(actualVideoGame.stock);
        }

        //el useEffect se ejecutara cada vez el videojuego actual cambie por lo tanto siempre tendre el juego correcto a la hora de editar
    }, [actualVideoGame]);

    //creada funcion general para el manejo de cambio de datos en los formularios
    const generalHandleChange = (setData, event) => {

        setData(event.target.value);
    };


    const handleSubmit = () => {

        const videoGameToSave = {id, name, developer, genre, gameModes, sellPrice, stock};

        //si el id actual esta disponible que actualice el videogame y sino que solo cree uno nuevo
        if (id)
            updateVideoGame(videoGameToSave, setVideoGames);

        else
            saveVideoGame(videoGameToSave, setVideoGames);

        resetFormData();
    };


    const resetFormData = () => {

        setId(0);
        setName("");
        setDeveloper("");
        setGenre("RPG");
        setGameModes("");
        setSellPrice(0);
        setStock(0);

        handleClose();
    };

    const handleCancel = () => {

        resetFormData();
    };


    return (
        <div>

            <Dialog open={isDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">

                {id === 0 ? (

                        <DialogTitle id="form-dialog-title">New Video Game</DialogTitle>
                    ):

                    <DialogTitle id="form-dialog-title">{name}</DialogTitle>
                }

                <DialogContent>

                    <GeneralTextField value={name} handleChange={generalHandleChange}
                                      label={"Name"} type={"text"} setData={setName}/>

                    <GeneralTextField value={developer} handleChange={generalHandleChange}
                                      label={"Developer"} type={"text"} setData={setDeveloper}/>

                    <GeneralTextField value={gameModes} handleChange={generalHandleChange}
                                      label={"Game Modes"} type={"text"} setData={setGameModes}/>

                    <GeneralTextField value={sellPrice} handleChange={generalHandleChange}
                                      label={"Selling Price"} type={"number"} setData={setSellPrice}/>

                    <GeneralTextField value={stock} handleChange={generalHandleChange}
                                      label={"Stock"} type={"number"} setData={setStock}/>

                    <GeneralSelect value={genre} handleChange={generalHandleChange}
                                   label={"Genre"} setData={setGenre} dataList={getAllVideoGamesGenre()}/>

                </DialogContent>

                <DialogActions>

                    {id === 0 ? (
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Add Video Game
                        </Button>
                    ):

                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Update Video Game
                        </Button>
                    }

                    <Button variant="contained" color="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

//De esta form-components declaro los tipos de datos que tienen los props que recibo, esto no es completamente necesario
//pero le da claridad al codigo ya que asi se de forma clara lo que llega en cada prop
FormDialog.propTypes = {

    isDialogOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    setVideoGames: PropTypes.func.isRequired,
    actualVideoGame: PropTypes.object
};
