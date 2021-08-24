import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
//recomendacion de quitar los tags de strict mode de aqui para evitar errores con material ui
    //El strict mode solo afecta el modo developer, pero no es necesario en produccion asi que puedo quitarlo sin problema
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
