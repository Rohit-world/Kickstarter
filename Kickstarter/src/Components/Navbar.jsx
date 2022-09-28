
import { Link } from "react-router-dom"
import{Box, Container, Image} from "@chakra-ui/react"
import "./navbar.css" 
import Login from "../pages/login"


function Navbar(){
return(
    <div className="parent">
        <div  className="boxes">
            <Link >Discover</Link>
            <Link>Start a project</Link>    
        </div>
       
        
       <img src="https://logos-world.net/imageup/Kickstarter/Kickstarter-Logo-PNG3.png"/>
        

        <div className="boxes">
            <Link>Search</Link>
            <Link to="/login">Login</Link>
        </div>


    </div>
)
}


export default Navbar