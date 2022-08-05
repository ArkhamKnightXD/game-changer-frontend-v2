import PropTypes from 'prop-types';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";

const DeleteRowElementDialog = ({isOpen, setIsOpen, deleteData}) => {

    const handleClose = () => {

        setIsOpen(false);
    };


    const handleDelete = (event) => {

        event.stopPropagation();
        deleteData();
        handleClose();
    };


    return (

        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Desea eliminar elemento?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Al "Confirmar" usted estará eliminando elemento.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button
                    onClick={handleDelete}
                    color="primary"
                    autoFocus
                >
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

DeleteRowElementDialog.propTypes = {

    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired
};

export default DeleteRowElementDialog;
