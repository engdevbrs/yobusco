import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateAccount from './Components/account/CreateAccount';
import { LoginContextProvider } from './Components/contexts/AuthContext';
import Home from './Components/home/Home';
import About from './Components/layouts/About';
import FAQ from './Components/layouts/FAQ';
import Menu from './Components/layouts/NavBar';
import Login from './Components/login/Login';
import Profile from './Components/profile/Profile';
import Workers from './Components/workers/Workers';


const App = () => {
    return (
        <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path='' element= { <LoginContextProvider><Menu/></LoginContextProvider>}>
                    <Route index element= { <Home />} />
                    <Route path='crear-cuenta' element= { <CreateAccount />  } />
                    <Route path='trabajadores' element= { <Workers /> } />
                    <Route path='perfil' element= { <Profile /> } />
                    <Route path='login' element= { <Login /> } />
                    <Route path='preguntas-frecuentes' element= { <FAQ /> } />
                    <Route path='sobre-nosotros' element= { <About /> } />
                    <Route path='*' element={ <Navigate replace to = "/"/> } />
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
};

export default App;