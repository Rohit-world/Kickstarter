import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './login';
import Home from './home';
const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>

            </Route>
            <Route path='/login' element={<Login/>}>

            </Route>
        </Routes>
    );
}

export default Allroutes;
