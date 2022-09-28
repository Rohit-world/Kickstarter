import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './login';
const Allroutes = () => {
    return (
        <Routes>
            <Route>

            </Route>
            <Route path='/login' element={<Login/>}>

            </Route>
        </Routes>
    );
}

export default Allroutes;
