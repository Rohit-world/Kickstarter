import { Box,Text,Select,Button,Stack,Input ,Textarea} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate=useNavigate()
const handleClick=()=>{
    alert("Project created")
    navigate("/")
}


    return (
        <Box padding="0% 30%">
            <Stack spacing={10}>
                
            <Box><Text fontSize="3xl" >First, let’s get you set up.</Text></Box>
            <Box><Text fontSize="3xl">Select a primary category and subcategory for your new project.</Text></Box>
            <Box><Text fontSize="xl" color="grey"> These will help backers find your project, and you can change them later if you need to.</Text></Box>




            
            <Box display="flex" justifyContent="space-between">
            <Select w="45%" id="category-primary" class="o0p absolute t0 l0 b0 r0 w100p h100p z1 pointer"><option aria-selected="false" value="Q2F0ZWdvcnktMQ==">Art</option><option aria-selected="false" value="Q2F0ZWdvcnktMw==">Comics</option><option aria-selected="false" value="Q2F0ZWdvcnktMjY=">Crafts</option><option aria-selected="false" value="Q2F0ZWdvcnktNg==">Dance</option><option aria-selected="false" value="Q2F0ZWdvcnktNw==">Design</option><option aria-selected="false" value="Q2F0ZWdvcnktOQ==">Fashion</option><option aria-selected="false" value="Q2F0ZWdvcnktMTE=">Film &amp; Video</option><option aria-selected="false" value="Q2F0ZWdvcnktMTA=">Food</option><option aria-selected="false" value="Q2F0ZWdvcnktMTI=">Games</option><option aria-selected="false" value="Q2F0ZWdvcnktMTM=">Journalism</option><option aria-selected="false" value="Q2F0ZWdvcnktMTQ=">Music</option><option aria-selected="true" value="Q2F0ZWdvcnktMTU=">Photography</option><option aria-selected="false" value="Q2F0ZWdvcnktMTg=">Publishing</option><option aria-selected="false" value="Q2F0ZWdvcnktMTY=">Technology</option><option aria-selected="false" value="Q2F0ZWdvcnktMTc=">Theater</option></Select>
                
            <Select w="45%" id="subcategory-primary" class="o0p absolute t0 l0 b0 r0 w100p h100p z1 pointer"><option aria-selected="false" value="">--No subcategory--</option><option aria-selected="false" value="Q2F0ZWdvcnktMjc1">Animals</option><option aria-selected="false" value="Q2F0ZWdvcnktMjc2">Fine Art</option><option aria-selected="false" value="Q2F0ZWdvcnktMjc3">Nature</option><option aria-selected="false" value="Q2F0ZWdvcnktMjc4">People</option><option aria-selected="false" value="Q2F0ZWdvcnktMjgw">Photobooks</option><option aria-selected="false" value="Q2F0ZWdvcnktMjc5">Places</option></Select>
                    </Box>
            
            <Box>
                <Select >
                    <option value="">Select country</option>
                    <option value="">United state</option>
                    <option value="">India</option>
                    <option value="">Japan</option>
                    <option value="">China</option>
                    <option value="">Germany</option>
                    <option value="">Neitherland </option>
                    <option value=""> South africa</option>
                    <option value="">Afghanistan</option>
                    <option value="">Kenya</option>
                    <option value="">Pakistan</option>
                </Select>
            </Box>



<Box><Input type="name" placeholder='Project name'></Input></Box>
<Box><Textarea placeholder='Describe about your project'></Textarea></Box>
            

            </Stack>
            <Box display="flex" justifyContent="flex-end" mt="40px" mb="40px">
                <Button onClick={handleClick} size="lg" backgroundColor="black" color="white" _hover="bacckgrounColor:white" >Create Project</Button>
            </Box>
        </Box>
    );
}

export default Create;
