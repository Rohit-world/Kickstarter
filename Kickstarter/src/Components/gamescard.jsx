import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link ,Box,Text,Image,Stack ,Grid,GridItem,Button,Icon} from '@chakra-ui/react';
import{ArrowBackIcon,ArrowForwardIcon} from "@chakra-ui/icons"
const Gamescard = () => {
    const [data,setdata]=useState([])
    
const getdata=()=>{
    axios.get(`https://rohit-mock-server.onrender.com/Games`).then((res)=>{
       setdata(res.data)
       
    })
}

    useEffect(()=>{
getdata()
    },[])





  
 return (
        <div style={{}}>

            <div style={ {
         overflow: "scroll",
        margin: "4px 4px",
        padding: "3% 0%",
        width: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        
        
       
        display:"flex",
        gap:"20px",
       
       
       
    }}>
{data.map((ele)=>(


    <div display="grid" key={Math.random()}>
    <img style={{width:"600px",height:"150px",borderBottom:"8px solid teal"}} src={ele.background_image} alt="" />
    <Text fontSize="Large" >{ele.name}</Text>
    <Text color="grey"> year: {ele.released}  imdb:{ele.rating}</Text>
    </div>
))}



    </div>
        </div>
    );
}

export default Gamescard;
