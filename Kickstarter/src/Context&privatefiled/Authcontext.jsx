import { createContext } from "react";
import { useState } from "react";
export const appcontext=createContext()
const Authcontextprovider=({children})=>{
    const [isAuth,setAuth]=useState(true)
    const toggleAuth=()=>{
        setAuth(!isAuth)
    }
return <appcontext.Provider value={{isAuth,toggleAuth}}>
    {children}
</appcontext.Provider>
}
export default Authcontextprovider