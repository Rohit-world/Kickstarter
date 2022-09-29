import React from 'react';
import { posters } from '../Components/Data';

import { Box,Link ,Stack,Text,Grid,GridItem,Image} from '@chakra-ui/react';

const Home = () => {
    console.log(posters)
    return (
        <div>
            <Stack spacing="20px">
         <Box display="flex" w="100%"  border="solid 0.1px grey" padding="15px">
         <Box display="flex" gap="30px" margin="auto"  >
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

         <Box  padding="5%">
         <Stack spacing="20px">
        
            <Box>
                <Text fontSize="2xl" >Bring a Creative Project to Life</Text>
                
            </Box>
            <Box>
            <Text color="grey">ON KICKSTARTER:</Text>
            </Box>



           <Box display="flex">
            <Box margin="auto" display="flex"  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"   >
           


            <Box padding="20px 80px" >
            <Text color="teal" fontSize="4xl" >227,224</Text>
                <Text color="grey">projects funded</Text>
            </Box>


            <Box padding="20px 80px"borderLeft="solid 0.1px grey" borderRight="1px solid grey">
            <Text color="teal" fontSize="4xl">$6,261,528,416</Text>
                <Text color="grey">towards creative work</Text>
            </Box>
    
            <Box padding="20px 80px">
                <Text color="teal" fontSize="4xl">69,910,097</Text>
                <Text color="grey">pledges</Text>
            </Box>

            </Box>
           
           </Box>
           </Stack>
                     
<Box>
    <Box display="grid" textAlign="start" marginTop="20px">
        <Stack>
        <p >Featured Project</p>
        <br />
        <Image width="40%" src="https://ksr-ugc.imgix.net/assets/038/425/664/61385629a60211b6d000a17580f1669b_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1661806870&auto=format&frame=1&q=92&s=068aeebd85853dbbedd42215b128945d" alt="" />
        </Stack>
       

    </Box>
</Box>

          
           </Box>
 
         </Stack>
         <Box>

         </Box>


        {/* Data sections starts */}



        </div>
    );
}

export default Home;
