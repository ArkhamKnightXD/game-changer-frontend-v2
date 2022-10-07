import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";

interface RowElements {

    isOpen: boolean,
    setIsOpen: (data: boolean) => void,
    deleteData: () => void
}

const DeleteRowElementDialog = ({isOpen, setIsOpen, deleteData}: RowElements) => {

    const handleClose = () => {

        setIsOpen(false);
    };


    const handleDelete = (event: any) => {

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
            <DialogTitle id="alert-dialog-title">Desea eliminar este elemento?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Al "Confirmar" usted estará eliminando este elemento.
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


export default DeleteRowElementDialog;
