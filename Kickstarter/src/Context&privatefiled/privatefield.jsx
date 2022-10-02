import React from 'react';
import { appcontext } from './Authcontext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const Privatefield = ({children}) => {
    const{isAuth,toggleAuth}=useContext(appcontext)
    if(isAuth){
        return (
            children
        );
    }
    else{
 return <Navigate to="/login"/>
    }
   
}

export default Privatefield;
