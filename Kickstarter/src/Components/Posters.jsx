import React from 'react';
import { Grid,GridItem,Box ,Image,Link, Container,Text,Stack,Divider} from '@chakra-ui/react';


const posters=[
    {ulr:"https://ksr-static.imgix.net/ksr-LSS-2560x1080-HP-LP-V2-e08b5e5.jpg?ixlib=rb-4.0.2&s=c3094863a95ed89ea39989a54ebbe5e3"
,head:"A spotlight on short films",
para:"In March 2023, we’re launching Long Story Short, our annual celebration of bold and brilliant short films—and the visionary people who make them.",
link:"Learn more"},

{ulr:"https://ksr-static.imgix.net/Witchstarter-opencall-IAM-600x210-357f722.png?ixlib=rb-4.0.2&s=4d1fff87d5ca2ac67a590b03fa979a6f"
,head:"Ready to make magic?",
para:"This October, take part in Witchstarter, our first open call for Magic & Divination projects. To participate, launch a project in the theme of magic and the occult, or discover new favorites to pledge to. Deck or dice, book or board game, ideas for Witchstarter campaigns can span any category on Kickstarter.",
link:"Learn more"},

{ulr:"https://ksr-ugc.imgix.net/assets/038/169/938/6e53fe4b3d22d5d2c685c7ea5d953ffb_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1659580039&auto=format&frame=1&q=92&s=a3aacb865a1d53fb5f97def636546d14"
,head:"Meet Kickstarter’s Community Advisory Council",
para:"The Kickstarter Community Advisory Council will offer insight across a range of creative disciplines and help us identify issues, questions, and opportunities we may not be able to see on our own.",
link:"Meet the council"},
{ulr:"https://ksr-static.imgix.net/01-homepage_module-e4102a3.gif?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=067058d08e8bced53ffbbd4366991171"
,head:"Kickstarter’s 2021 Public Benefit Statement",
para:"The Kickstarter Community Advisory Council will offer insight across a range of creative disciplines and help us identify issues, questions, and opportunities we may not be able to see on our own.",
link:"Read more"},
{ulr:"https://ksr-static.imgix.net/Final_magic-and-div_hp-module-1225x525_R-311e886.jpg?ixlib=rb-4.0.2&s=d8fe051bc727dbf42c9bca0ccdbef4c1"
,head:"Kickstarter’s 2021 Public Benefit Statement",
para:"The Kickstarter Community Advisory Council will offer insight across a range of creative disciplines and help us identify issues, questions, and opportunities we may not be able to see on our own.",
link:"Read more"},
{ulr:"https://ksr-static.imgix.net/pub-guide-hp-module-asset-d43bd0d.png?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=7ab937c7bbaf6f81655b43ac4186bf1f"
,head:"How to Create a Great Kickstarter Publishing Project Page",
para:"The Kickstarter Community Advisory Council will offer insight across a range of creative disciplines and help us identify issues, questions, and opportunities we may not be able to see on our own.",
link:"Read more"},
{ulr:"https://ksr-static.imgix.net/kickstarter-web30-16x9-ed39321.png?ixlib=rb-4.0.2&s=b21244444d99f8dd7afc59854929d08f"
,head:"The Future of Crowdfunding Creative Projects",
para:"To truly serve our mission to help bring creative projects to life, we need to build on what made Kickstarter so innovative in the first place: the power of a large network of people working together towards a common goal.",
link:"Discover more"}
]

const Posters = ({number}) => {
  let ele=posters[number]
    return (
        <div >
            <Grid templateColumns='repeat(2, 1fr)'  w="100%" paddingTop="2%" paddingBottom="2%" marginTop="60px">
                <GridItem>
                    <Box w="100%" p="5%">
                        <Image  w="100%"   src={ele.ulr}></Image>
                        </Box>
                </GridItem>


                <GridItem >
                    <Box display="grid" w="100%" justifyContent="flex-start" textAlign="start" h="100%">
                       <Box borderLeft="solid 5px teal" paddingLeft="4%" >
                        <Stack>

                       
                       <Text  fontSize="3xl" fontWeight="semibold"  >{ele.head}</Text>
                        
                        <Text fontSize="large">{ele.para}</Text>
                        </Stack>
                       </Box>
                       <Text marginTop="10px" color="blue">{ele.link}</Text>
                      
                    </Box>
                    
                </GridItem>
            </Grid>
            <Divider/>
            
        </div>
    );
}

export default Posters;


