import React from 'react';
import { Grid,GridItem ,Image,Text} from '@chakra-ui/react';

const Peoples = () => {
    return (
        <>
        <Grid templateColumns="repeat(4,1fr)" marginTop="80px" marginBottom="80px" gap={4} >
            <GridItem textAlign="center"><Image width="250px" h="300px" src='https://images.unsplash.com/photo-1518893883800-45cd0954574b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbnRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'></Image> <Text fontSize="2xl" >Uusi's Secrets for Kickstarter Success behind the comics</Text> <Text fontSize="xs">Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text> </GridItem>
            <GridItem textAlign="center"><Image width="250px" h="300px" src='https://images.unsplash.com/photo-1453856908826-6bbeda0f8490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHZpbnRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'></Image> <Text fontSize="2xl" >Composer Christopher Tin wants to create an album </Text> <Text fontSize="xs">Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text> </GridItem>
            <GridItem textAlign="center"><Image width="250px" h="300px" src='https://images.unsplash.com/photo-1516615899477-35c5ecb7a67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUyfHx2aW50YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'></Image> <Text fontSize="2xl" >9 creators share advice from their journeys to help guide yours</Text> <Text fontSize="xs">Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text> </GridItem>
            <GridItem textAlign="center"><Image width="250px" h="300px" src='https://images.unsplash.com/photo-1652197881268-d625ad54402b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHZpbnRhZ2UlMjBnYW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'></Image> <Text fontSize="2xl" >Focusing on the artist behind the comics sensation</Text> <Text fontSize="xs">Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text> </GridItem>

            
        </Grid>
        </>
    );
}

export default Peoples;
