import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import VideoGameTable from "./components/VideoGameTable";
import NavigationBar from "./components/NavigationBar";

export default function App() {

  return (

    <div className="App">

        <NavigationBar/>

        <VideoGameTable />

    </div>
  );
}
