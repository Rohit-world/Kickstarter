
import { Link } from "react-router-dom"
import{Box, Button, Container, Image} from "@chakra-ui/react"
import "./navbar.css" 
import Login from "../pages/login"
import { appcontext } from "../Context&privatefiled/Authcontext"
import {useContext} from "react"


function Navbar(){


    const{isAuth,toggleAuth}=useContext(appcontext)

return(
    <div className="parent">
        <div  className="boxes">
            <Link to="/" >Home</Link>
            <Link to="/add_project">Start a project</Link>    
        </div>
       
        
       <img src="https://logos-world.net/imageup/Kickstarter/Kickstarter-Logo-PNG3.png"/>
        

        <div className="boxes">
            <Link>Search</Link>
            {!isAuth && <Link to="/login">Discover</Link>}
            {isAuth && <Button size="xs" colorScheme='teal' onClick={()=>toggleAuth()}>Logout</Button>}
        </div>


    </div>
)
}


export default Navbar