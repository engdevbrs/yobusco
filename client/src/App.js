import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateAccount from './Components/account/CreateAccount';
import Home from './Components/home/Home';
import Navbar from './Components/layouts/NavBar';
import Login from './Components/login/Login';
import Profile from './Components/profile/Profile';
import Workers from './Components/workers/Workers';

const App = () => {
    return (
        <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path='' element= { <Navbar/>}>
                    <Route index element= { <Home />} />
                    <Route path='crear-cuenta' element= { <CreateAccount />  } />
                    <Route path='trabajadores' element= { <Workers /> } />
                    <Route path='perfil' element= { <Profile /> } />
                    <Route path='login' element= { <Login /> } />
                    <Route path='*' element={ <Navigate replace to = "/"/> } />
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
};

export default App;