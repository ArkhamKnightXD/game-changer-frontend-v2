import React from "react";
import VideoGameApp from "./apps/videogame/VideoGameApp";
import AboutApp from "./apps/about/AboutApp";
import ErrorApp from "./apps/ErrorApp";
//imports necesarios de react router y a browserRouter le cambie el nombre por router
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NewNavigationBar from "./components/NewNavigationBar";
import Gallery from "./apps/gallery/Gallery";

export default function App() {

    return (

        //Para habilitar enrutamiento en nuestra app debemos envolver todos nuestros componentes en estos tag router y routes
        <Router>

            {/*Es ideal llamar el navigation bar dentro de esto para asi no tener que llamarla en cada componente*/}
            {/*<NavigationBar/>*/}
            <NewNavigationBar/>

            <Routes>

                {/*Dentro de routes solo podre poner elementos del tipo route*/}
                {/*    De esta forma defino las ruta que tendra el componente designada*/}
                {/*En este route agregare el dato de username para luego acceder a este mediante useParams*/}
                <Route path="/about/:username" element={<AboutApp/>}/>

                <Route path="/" element={<VideoGameApp/>}/>
                <Route path="/gallery" element={<Gallery/>}/>

                {/*    Cuando el usuario ingrese una ruta que no existe podemos mostrar una pagina de error */}
                {/* El * Indica cualquier cosa que el usuario haya puesto que no sea una ruta valida redireccionara a errorApp*/}
                <Route path="*" element={<ErrorApp/>}/>

            </Routes>

        </Router>
    );
}
