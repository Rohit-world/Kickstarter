import React from 'react';
import {
    Box,
    Link,
    Stack,
    Text,
    Grid,
    GridItem,
    Image,
    Divider,
  } from "@chakra-ui/react";

const Footer = () => {
    return (
        <div>
      <Box display="flex" w="100%" borderTop="solid 3px grey" borderBottom="solid 3px grey" padding="15px">
          <Box display="flex" gap="30px" margin="auto">
            <Link>Arts</Link>
            <Link>Comics & Illustration</Link>
            <Link>Design & Tech</Link>
            <Link>Film</Link>
            <Link>Food & Craft</Link>
            <Link>Games</Link>
            <Link>Music</Link>
            <Link>Publishing</Link>
          </Box>
        </Box>


        <Grid templateColumns="repeat(3,1fr)" padding=" 3% 10%">
            <GridItem ><Text fontWeight="semibold" fontSize="2xl" marginBottom="20px">About</Text>
            <Box display="grid" gap="6px">
              <Link>  About us</Link>
                <Link>our charter</Link>
               <Link> stats</Link>

              <Link>  press</Link>
               <Link> jobs</Link>
            </Box>
            </GridItem>


            <GridItem  ><Text fontWeight="semibold" fontSize="2xl"marginBottom="20px">Support</Text>
            <Box display="grid"  gap="6px">
              <Link> Help Center</Link>
                <Link>Our Rules</Link>
               <Link>Creator Resources</Link>
               <Link> Forward Funds</Link>
               <Link> Brand assets</Link>
            </Box>
            </GridItem>
            <GridItem ><Text fontWeight="semibold" fontSize="2xl"marginBottom="20px">More From Kickstarter</Text>
            <Box display="grid"  gap="6px">
            <Link>  Newsletters</Link>

<Link> Kickstarter</Link>           <Link>   Magzines</Link>
            <Link>The Creatives</Link>
         <Link>   Independent</Link>
        <Link> The Kickstarter Blog</Link>

           <Link>  Mobile apps</Link>
             <Link> Research</Link>
                
            </Box>
            </GridItem>
        </Grid>



        <Box> 
            <Box><Text>Kickstarter, PBC © 2022</Text></Box>
            <Box></Box>
        </Box>


        </div>
    );
}

export default Footer;
