import React from 'react';
import { Grid,GridItem ,Image,Text} from '@chakra-ui/react';
const People2 = () => {
    return (
       <>
         <Grid templateColumns="repeat(4,1fr)" marginTop="80px" marginBottom="80px" gap={4} >
          
            <GridItem textAlign="center"><Image width="250px" h="300px" borderTop="solid 8px green" src='https://images.unsplash.com/photo-1619107187488-ae0b914b1811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHxjcmVhdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'></Image> <Text fontSize="2xl" >Composer Christopher Tin wants to create an album </Text> <Text fontSize="xs">Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text> </GridItem>
           
            <GridItem textAlign="center"><Image width="250px" h="300px" borderTop="solid 8px brown" src='https://images.unsplash.com/photo-1633443245758-6a507463c89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxjcmVhdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'></Image> <Text fontSize="2xl" >Focusing on the artist behind the comics sensation</Text> <Text fontSize="xs">Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text> </GridItem>
            <GridItem textAlign="center"><Image width="250px" h="300px" borderTop="solid 8px teal" src='https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNyZWF0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'></Image> <Text fontSize="2xl" >Uusi's Secrets for Kickstarter Success behind the comics</Text> <Text fontSize="xs">Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text> </GridItem>
            <GridItem textAlign="center"><Image width="250px" h="300px" borderTop="solid 8px purple" src='https://images.unsplash.com/photo-1609019328833-abb69e1049b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUzfHxjcmVhdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'></Image> <Text fontSize="2xl" >9 creators share advice from their journeys to help guide yours</Text> <Text fontSize="xs">Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text> </GridItem>
        </Grid>
       </>
    );
}

export default People2;
