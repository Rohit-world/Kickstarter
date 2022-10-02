import React from 'react';
import { useState } from 'react';
import { FormControl,FormLabel,Input, Stack,Link, Box ,Button, Checkbox,Text,Alert} from '@chakra-ui/react';
import{EmailIcon,ExternalLinkIcon} from "@chakra-ui/icons"
import { appcontext } from '../Context&privatefiled/Authcontext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
const Login = () => {
    const navigate=useNavigate()
    const {isAuth,toggleAuth}=useContext(appcontext)
    const credential={
        password:"qwerty123@",
        email:"rohitrs319791@gmail.com"
    }

const[login,setlogin]=useState({
    password:"",
    email:""
})
// console.log(isAuth)
const handlechange=(e)=>{
let value=e.target.value
let name=e.target.name

setlogin({...login,[name]:value})
}



const handlesubmit=(e)=>{
    
    if(login.email==credential.email ){
toggleAuth()
    navigate("/")


    }
    else{
        alert("email or password is wrong")
    }
}




    return (
        <div  >
<div display="grid"   style={{backgroundColor:"white", width:"35%",margin:"auto" ,padding:"20px" ,marginTop:"40px"}}>
<FormControl m="auto" bg="" marginBottom="3%"  >
    <Stack spacing="15px">    <FormLabel fontSize="30px">Login</FormLabel>
      <Input
      id='email'
      name='email'
        type='email'
        placeholder='Email'
        value={login.email}
        onChange={handlechange}
      />
    
      <Input id='password' name='password' value={login.password} onChange={handlechange} placeholder='Password' type="password"/>
     <Box display="flex"> <Link color="blue" fontSize="xs" >Forget password</Link></Box>
     <Button onClick={handlesubmit}  colorScheme="green" color="white" type='submit'>Login</Button>
     <Checkbox >
    Remember me
  </Checkbox>

  <h1>Or</h1>
  <Button fontSize="s" leftIcon={<ExternalLinkIcon />} colorScheme="blackAlpha" backgroundColor="black" color="white">Sign in with Apple</Button>
  <Button fontSize="s" leftIcon={<ExternalLinkIcon />} colorScheme="facebook" color="white">Continue With Facebook</Button>
<Text fontSize="xs">
Get notified when your friends back and launch projects. We'll never post anything on Facebook without your permission.
</Text>



<Box  justifyItems="center">
    <Text padding="5px" fontSize="s">New to Kickstarter? <span><Link color="blue">Sign Up</Link></span></Text>
</Box>


<Box  justifyItems="center">
    <Text color="grey" padding="5px" fontSize="xs"> This site is protected by reCAPTCHA and the Google <span><Link color="blue">privacy Policy </Link></span> and  <span><Link color="blue">Terms of service</Link></span> apply.</Text>
</Box>

      </Stack>
            </FormControl>
            
   </div>
   <Footer/>
        </div>
        
    );
}

export default Login;

