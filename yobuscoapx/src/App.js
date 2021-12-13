import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/NavBar/NavBar';


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home/> }/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;