import {makeStyles} from "@mui/styles";

const useGalleryStyles = makeStyles(() => ({

    container: {
        paddingRight: '50px'
    },
    icon: {
        marginRight: '20px',

    },
    buttons: {
        marginTop: '40px',
        paddingLeft: '750px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'   //16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        padding: '50px 0'
    }
}))

export default useGalleryStyles;





