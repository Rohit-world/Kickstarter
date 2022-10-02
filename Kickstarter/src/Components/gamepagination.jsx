import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link ,Box,Text,Image,Stack ,Grid,GridItem,Button,Icon, Divider,Skeleton} from '@chakra-ui/react';
import{ArrowBackIcon,ArrowForwardIcon} from "@chakra-ui/icons"
const Gamepagination = () => {
    const[isloading ,setloading]=useState(true)
    const [data,setdata]=useState([])
    const [page,setpage]=useState(1)
    const limit=3
const getdata=()=>{
    setloading(true)
    axios.get(`https://rohit-mock-server.onrender.com/Games?_page=${page}&_limit=${limit}`).then((res)=>{
       setdata(res.data)
       setloading(false)
       
    })
}

    useEffect(()=>{
getdata()
    },[page])


    return (
        <div>

       
        <Grid gap={8} borderLeft="solid 1px grey"  paddingLeft="5%">
{isloading && <Stack>
  <Skeleton height='80px' />
  <Skeleton height='80px' />
  <Skeleton height='80px' />
  <Skeleton height='80px' />
</Stack>}

         {!isloading && data.map((ele)=>(
            
            <GridItem key={ele.id} display="flex" borderBottom="solid 1px rgb(169,169,169)"paddingBottom="2%" >
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
