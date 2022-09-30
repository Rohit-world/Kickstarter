import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link ,Box,Text,Image,Stack ,Grid,GridItem,Button,Icon, Divider} from '@chakra-ui/react';
import{ArrowBackIcon,ArrowForwardIcon} from "@chakra-ui/icons"
const Gamepagination = () => {
    const [data,setdata]=useState([])
    const [page,setpage]=useState(1)
    const limit=3
const getdata=()=>{
    axios.get(`https://rohit-mock-server.onrender.com/Games?_page=${page}&_limit=${limit}`).then((res)=>{
       setdata(res.data)
       
    })
}

    useEffect(()=>{
getdata()
    },[page])


    return (
        <div>

       
        <Grid gap={8} borderLeft="solid 1px grey"  paddingLeft="5%">


         {data.map((ele)=>(
            
            <GridItem key={ele.id} display="flex" borderBottom="solid 1px grey"paddingBottom="2%" >
              <Box w="50%">  <Image w="180px" h="100px" src={ele.background_image} alt="" />
              </Box>
                <Box display="grid" textAlign="start" width="50%">
                    <Link>Realesed Date: {ele.released}</Link>
                    <Link>Name:  {ele.name}   </Link>
                    <Text color="teal">Rating: {ele.rating}</Text>
                    <Box></Box>
                </Box>
                

            </GridItem>
            
           
         ))}
         


         


        </Grid>
      <Box marginTop="30px">  <Button onClick={()=>setpage(page-1)} disabled={page==1}><Icon as={ArrowBackIcon}></Icon></Button>
            <Button>{page}</Button>
          <Button disabled={page==7} onClick={()=>setpage(page+1)}> <Icon as={ArrowForwardIcon}></Icon></Button>
          </Box>
        </div>
    );
}

export default Gamepagination;
