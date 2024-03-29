import {useNavigate, useParams} from "react-router-dom";
import Button from "@mui/material/Button";

const AboutPage = () => {

    //Si deseamos que desde un componente me redireccione a otro utilizamos useNavigate
    const navigate = useNavigate();

    //Este useParams funciona igual que el de redux
    const {username} = useParams();

    return (

        <div>
            <h1>This is the user page for {username}</h1>
            <Button onClick={() => navigate("/")}>Go to Video Games</Button>
        </div>
    );
};


export default AboutPage;
