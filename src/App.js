import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import VideoGameTable from "./components/VideoGameTable";
import MenuAppBar from "./components/MenuAppBar";

function App() {

  return (

    <div className="App">

        <MenuAppBar/>

        <VideoGameTable />

    </div>
  );
}

export default App;
