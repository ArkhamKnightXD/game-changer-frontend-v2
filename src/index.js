import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
//recomendacion de quitar los tags de strict mode de aqui para evitar errores con material ui
    //El strict mode solo afecta el modo developer, pero no es necesario en produccion asi que puedo quitarlo sin problema
    <App />,
  document.getElementById('root')
);

