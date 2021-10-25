import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Main_content from "./Components/Main_content/Main_content";
import {BrowserRouter} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <div className="App_wrapper">
                <Header/>
                <Navbar/>
                <Main_content />
            </div>
        </BrowserRouter>
    );
}

export default App;
