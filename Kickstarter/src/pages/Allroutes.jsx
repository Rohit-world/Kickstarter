import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './login';
import Home from './home';
import Addproject from '../Components/addproject';
import Privatefield from '../Context&privatefiled/privatefield';
import Create from './create';

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Privatefield><Home/></Privatefield>}>

            </Route>
            <Route path='/login' element={<Login/>}>


            </Route>


            <Route path='/add_project' element={<Privatefield><Addproject/></Privatefield>}></Route>
            <Route path='/add_project/create' element={<Privatefield><Create/></Privatefield>}></Route>
        </Routes>
    );
}

export default Allroutes;
