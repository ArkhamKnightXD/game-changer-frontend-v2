import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import VideoGameApp from "./apps/videogame/VideoGameApp";
import AboutApp from "./apps/about/AboutApp";
import ErrorApp from "./apps/ErrorApp";
import NavigationBar from "./components/NavigationBar";
import VideoGameCardApp from "./apps/videogame-card/VideoGameCardApp";
import Footer from "./components/Footer";
//imports necesarios de react router y a browserRouter le cambie el nombre por router
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App() {

    return (

        //Para habilitar enrutamiento en nuestra app debemos envolver todos nuestros componentes en estos tag router y routes
        <Router>

            {/*Es ideal llamar el navigation bar dentro de esto para asi no tener que llamarla en cada componente*/}
            <NavigationBar/>

            <Routes>

                {/*Dentro de routes solo podre poner elementos del tipo route*/}
                {/*    De esta forma defino las ruta que tendra el componente designada*/}
                {/*En este route agregare el dato de username para luego acceder a este mediante useParams*/}
                <Route path="/about/:username" element={<AboutApp/>}/>

                <Route path="/" element={<VideoGameApp/>}/>

                {/*Probare que funcione la tarjeta de esta forma*/}
                <Route path="/video-games" element={<VideoGameCardApp/>}/>

                {/*    Cuando el usuario ingrese una ruta que no existe podemos mostrar una pagina de error */}
                {/* El * Indica cualquier cosa que el usuario haya puesto que no sea una ruta valida redireccionara a errorApp*/}
                <Route path="*" element={<ErrorApp/>}/>

            </Routes>

            <Footer/>

        </Router>
    );
}
