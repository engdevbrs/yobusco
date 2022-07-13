import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAccount from './Components/account/create-account';
import Home from './Components/home/Home';
import Footer from './Components/layouts/footer';
import Navbar from './Components/layouts/NavBar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="create-account" element={ <CreateAccount/> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
};

export default App;