import React, {useEffect} from "react";
import {Dialog, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField,} from "@mui/material";
import {getAllVideoGamesGenre, saveVideoGame, updateVideoGame} from "../../services/VideoGameService";
//Este es el modulo a importar para utilizar los proptypes, esto la primera vez debe ser agregado al package-json
import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
import {useForm, Controller} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


//Siempre es recomendable tener un objeto con los valores por defecto que deberia de tener el formulario
const defaultValues = {

    id: 0,
    name: "",
    developer: "",
    genre: "RPG",
    gameModes: "",
    sellPrice: 0,
    rating: 0,
    stock: 0
};

//Aqui especifico me schema de validacion de mi formulario
const schema = yup.object().shape({

    name: yup.string().required("Ingrese el nombre").min(2, "Debe de tener minimo 2 caracteres"),
    developer: yup.string().required("Ingrese la desarrolladora").min(2, "Debe de tener minimo 2 caracteres"),
    gameModes: yup.string().required("Ingrese el modo de juego").min(2, "Debe de tener minimo 2 caracteres"),
    sellPrice: yup.number().required("Ingrese el precio").min(0, "El valor debe de ser mayor que 0"),
    rating: yup.number().required("Ingrese el rating").min(0, "El valor debe de ser mayor que 0"),
    stock: yup.number().required("Ingrese el stock").min(0, "El valor debe de ser mayor que 0"),
}).required();


export default function FormDialog(props) {

    //obtengo todos los elementos que utilizare de mi props mediante Destructuring
    const {actualVideoGame, setIsDialogOpen, isDialogOpen, setVideoGames} = props;

    //Mediante getValues podremos obtener todos los valores del form mediante un objeto
    // const {name, developer, genre, stock, sellPrice, rating} = getValues();
    //Comento getValues ya que por ahora no lo utilizo, solo lo defini para entendimiento de su uso
    const {handleSubmit, reset, watch, control, formState: {errors, isValid}} = useForm({
        //Mediante formState puedo acceder a los errores enviados por schema
        // y el campo isValid es un boolean que me dara true si no hay errores en el formulario

        //Aqui paso el objeto con los valores iniciales del formulario
        defaultValues,

        //Aqui le indico que deseo que se revise las validaciones que debe de tener el formulario, cada vez que haya un cambio en algun input
        mode: "onChange",

        //De esta forma indico el metodo que estare utilizando para validar los campos de mi formulario
        // en este caso estare utilizando yup, por lo tantos utilizo el metodo yupResolver
        resolver: yupResolver(schema)
    });

    //Con watch puedo obtener los datos de los campos de los formularios, parecido a getValues, pero esto me da los datos 1 por 1
    const id = watch("id");
    const name = watch("name");


    //la forma mas facil de tener el mismo dialog para crear y editar es simplemente pasarle los datos del actualgame
    //a los estados correspondientes, siempre y cuando el juego actual este presente
    useEffect(() => {

        //verifico que el videojuego actual este para asi llenar los estados
        //el campo reset setea todos los campos del formulario con los datos del objeto que le enviemos
        if(actualVideoGame)
            reset(actualVideoGame);

        else
            reset(defaultValues);

        //el useEffect se ejecutara cada vez el videojuego actual cambie por lo tanto siempre tendre el juego correcto a la hora de editar
    }, [actualVideoGame, reset]);


    const onSubmit = (data) => {

        const videoGameToSave = data;

        //si el id actual esta disponible que actualice el videogame y sino que solo cree uno nuevo
        if (data.id)
            updateVideoGame(videoGameToSave, setVideoGames);

        else
            saveVideoGame(videoGameToSave, setVideoGames);

        handleCloseDialog();
    };


    const handleCloseDialog = () => {

        reset(defaultValues);

        setIsDialogOpen(false);
    }


    return (
        <div>

            <Dialog open={isDialogOpen} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">

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
                        {/*<TextField{...register("name")} autoFocus margin="dense"*/}
                        {/*          label="Nombre" type="text" fullWidth/>*/}

                        {/*Cuando se utiliza controller no hay que utilizar register*/}
                        {/*En controller seteamos dentro de render el textField y le enviamos un campo field,
                        que dentro contiene los valores value y onChange, por lo tanto no debemos especificar
                        estos valores en el textField, el controller tiene ventajas vs la forma normal
                         a la hora de validacion y renderizado*/}
                        <Controller
                            name="name"
                            control={control}
                            render={({field}) => (

                                <TextField
                                    {...field}
                                    autoFocus
                                    margin="dense"
                                    label="Nombre"
                                    type="text"
                                    error={!!errors.name}
                                    helperText={errors?.name?.message}
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="developer"
                            control={control}
                            render={({field}) => (

                                <TextField
                                    {...field}
                                    autoFocus
                                    margin="dense"
                                    label="Developer"
                                    type="text"
                                    error={!!errors.developer}
                                    helperText={errors?.developer?.message}
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="gameModes"
                            control={control}
                            render={({field}) => (

                                <TextField
                                    {...field}
                                    autoFocus
                                    margin="dense"
                                    label="Game Modes"
                                    type="text"
                                    error={!!errors.gameModes}
                                    helperText={errors?.gameModes?.message}
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="rating"
                            control={control}
                            render={({field}) => (

                                <TextField
                                    {...field}
                                    autoFocus
                                    margin="dense"
                                    label="Rating"
                                    type="number"
                                    error={!!errors.rating}
                                    helperText={errors?.rating?.message}
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="sellPrice"
                            control={control}
                            render={({field}) => (

                                <TextField
                                    {...field}
                                    autoFocus
                                    margin="dense"
                                    label="Selling Price"
                                    type="number"
                                    error={!!errors.sellPrice}
                                    helperText={errors?.sellPrice?.message}
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="stock"
                            control={control}
                            render={({field}) => (

                                <TextField
                                    {...field}
                                    autoFocus
                                    margin="dense"
                                    label="Stock"
                                    type="number"
                                    error={!!errors.stock}
                                    helperText={errors?.stock?.message}
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="genre"
                            control={control}
                            render={({field}) => (

                                <FormControl fullWidth>

                                    <InputLabel id="demo-simple-select-label">Genre</InputLabel>

                                    <Select
                                        {...field}
                                    >
                                        {getAllVideoGamesGenre().map((data, index) => (

                                            <MenuItem key={index} value={data}>{data}</MenuItem>
                                        ))}
                                    </Select>

                                </FormControl>
                            )}
                        />


                        {/*Los botones para crear y editar estaran desabilitado siempre y cuando haya errores en el form */}
                        {id === 0 ? (
                                <Button variant="contained" color="primary" type="submit" disabled={!isValid}>
                                    Add Video Game
                                </Button>
                            ):

                            <Button variant="contained" color="primary" type="submit" disabled={!isValid}>
                                Update Video Game
                            </Button>
                        }

                        <Button variant="contained" color="secondary" onClick={handleCloseDialog}>
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
    setIsDialogOpen: PropTypes.func.isRequired,
    setVideoGames: PropTypes.func.isRequired,
    actualVideoGame: PropTypes.object
};
