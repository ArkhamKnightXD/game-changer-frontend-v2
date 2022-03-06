import React, {useEffect, useState} from "react";
import {Dialog, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField,} from "@mui/material";
import {getAllVideoGamesGenre, saveVideoGame, updateVideoGame} from "../../services/VideoGameService";
//Este es el modulo a importar para utilizar los proptypes, esto la primera vez debe ser agregado al package-json
import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";

export default function FormDialog(props) {

    //obtengo todos los elementos que utilizare de mi props mediante Destructuring
    const {actualVideoGame, handleClose, isDialogOpen, setVideoGames} = props;

    //Comento getValues ya que por ahora no lo utilizo, solo lo defini para entendimiento de su uso
    const {register, handleSubmit, setValue, /*getValues,*/} = useForm();

    //En mi componente lo ideal es solo definir estados y variables que seran utilizados solos en este mismo, hay excepciones claro
    const [id, setId] = useState(0);
    const [name, setName] = useState("");

    //la forma mas facil de tener el mismo dialog para crear y editar es simplemente pasarle los datos del actualgame
    //a los estados correspondientes, siempre y cuando el juego actual este presente
    useEffect(() => {

        //verifico que el videojuego actual este para asi llenar los estados
        if(actualVideoGame){

            setValue("id", actualVideoGame.id)
            setValue("name", actualVideoGame.name);
            setValue("developer", actualVideoGame.developer);
            setValue("genre", actualVideoGame.genre);
            setValue("gameModes", actualVideoGame.gameModes);
            setValue("sellPrice", actualVideoGame.sellPrice);
            setValue("rating", actualVideoGame.rating);
            setValue("stock", actualVideoGame.stock);

            setId(actualVideoGame.id);
            setName(actualVideoGame.name);
        }

        //el useEffect se ejecutara cada vez el videojuego actual cambie por lo tanto siempre tendre el juego correcto a la hora de editar
    }, [actualVideoGame, setValue]);


    const onSubmit = (data) => {

        const videoGameToSave = data;

        //si el id actual esta disponible que actualice el videogame y sino que solo cree uno nuevo
        if (data.id)
            updateVideoGame(videoGameToSave, setVideoGames);

        else
            saveVideoGame(videoGameToSave, setVideoGames);

        resetFormData();
    };


    const resetFormData = () => {

        //Mediante getValues podremos obtener todos los valores del form mediante un objeto
        // const {name, developer, genre, stock, sellPrice, rating} = getValues();

        //Mediante setValue podemos llenar los campos del formulario mediante codigo,
        // perfecto para cuando se quier limpiar los valores del formulario o para cuando vayamos a editar
        //Primero indicamos el nombre del campo y luego el valor que tendra el campo
        setValue("name", "");
        setValue("developer", "");
        setValue("genre", "");
        setValue("gameModes", "");
        setValue("sellPrice", "");
        setValue("rating", "");
        setValue("stock", "");

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

                    {/*"handleSubmit" will validate your inputs before invoking "onSubmit" */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}

                        {/*Para hacer uso de react hook-form debemos de agregar el campo de register, seguido del
                            nombre que tendra nuestro campo, esto sera lo que se evaluara a la hora de presionar el boton submit*/}
                        <TextField{...register("name")} autoFocus margin="dense" label="Nombre" type="text" fullWidth/>

                        <TextField{...register("developer")} autoFocus margin="dense"
                                  label="Developer" type="text" fullWidth/>

                        <TextField {...register("gameModes")} autoFocus margin="dense"
                                   label="Game Modes" type="text" fullWidth/>

                        <TextField {...register("rating")} autoFocus margin="dense"
                                   label="Rating" type="number" fullWidth/>

                        <TextField {...register("sellPrice")} autoFocus margin="dense"
                                  label="Selling Price" type="number" fullWidth/>

                        <TextField {...register("stock")} autoFocus margin="dense"
                                   label="Stock" type="number" fullWidth/>


                        <FormControl fullWidth>

                            <InputLabel id="demo-simple-select-label">Genero</InputLabel>

                            <Select
                                {...register("genre")}
                                defaultValue={"RPG"}
                            >
                                {getAllVideoGamesGenre().map((data, index) => (

                                    <MenuItem key={index} value={data}>{data}</MenuItem>
                                ))}
                            </Select>

                        </FormControl>

                        {id === 0 ? (
                                <Button variant="contained" color="primary" type="submit">
                                    Add Video Game
                                </Button>
                            ):

                            <Button variant="contained" color="primary" type="submit">
                                Update Video Game
                            </Button>
                        }

                        <Button variant="contained" color="secondary" onClick={handleCancel}>
                            Cancel
                        </Button>

                    </form>

                </DialogContent>

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
