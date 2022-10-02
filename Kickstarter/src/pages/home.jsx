import React from "react";
import { posters } from "../Components/Data";
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

import Gamepagination from "../Components/gamepagination";
import Posters from "../Components/Posters";
import Movies from "../Components/Movies";
import Gamescard from "../Components/gamescard";
import Peoples from "../Components/peoples";
import People2 from "../Components/people2";
import Footer from "../Components/Footer";
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}
const Home = () => {
  return (
    <div>
      <Stack spacing="20px">
        <Box display="flex" w="100%" borderTop="solid 0.1px grey" borderBottom="solid 0.1px grey" padding="15px">
          <Box display="flex" gap="30px" margin="auto">
            <Link >Arts</Link>
            <Link>Comics & Illustration</Link>
            <Link>Design & Tech</Link>
            <Link>Film</Link>
            <Link>Food & Craft</Link>
            <Link>Games</Link>
            <Link>Music</Link>
            <Link>Publishing</Link>
          </Box>
        </Box>

        <Box padding="5%">
          <Stack spacing="20px">
            <Box>
              <Text fontSize="2xl">Bring a Creative Project to Life</Text>
            </Box>
            <Box>
              <Text color="grey">ON KICKSTARTER:</Text>
            </Box>

            <Box display="flex">
              <Box
                margin="auto"
                display="flex"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                width="90%"
              >
                <Box padding="20px 80px">
                  <Text color="teal" fontSize="4xl">
                    227,224
                  </Text>
                  <Text color="grey">projects funded</Text>
                </Box>

                <Box
                  padding="20px 80px"
                  borderLeft="solid 0.1px grey"
                  borderRight="1px solid grey"
                >
                  <Text color="teal" fontSize="4xl">
                    $6,261,528,416
                  </Text>
                  <Text color="grey">towards creative work</Text>
                </Box>

                <Box padding="20px 100px">
                  <Text color="teal" fontSize="4xl">
                    69,910,097
                  </Text>
                  <Text color="grey">pledges</Text>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Box></Box>

      {/* Data sections starts */}

      <div style={{ padding: "5%" }}>
        <Box paddingBottom="20px" display="flex" justifyContent="space-between">
          <Box w="50%" display="flex" textAlign="start">
            <Text fontWeight="bold">FEATURED PROJECT</Text>
          </Box>{" "}
          <Box w="50%" display="flex" textAlign="start" paddingLeft="2%">
            {" "}
            <Text fontWeight="bold">RECOMMENDED FOR YOU</Text>
          </Box>{" "}
        </Box>

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem h="10">
            <br />
            <Image
              borderBottom="Teal solid 8px"
              width="100%"
              src="https://ksr-ugc.imgix.net/assets/038/425/664/61385629a60211b6d000a17580f1669b_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1661806870&auto=format&frame=1&q=92&s=068aeebd85853dbbedd42215b128945d"
              alt=""
            />
            <Link color="teal.800" fontSize="xl">
              The jfa Human Rights Journal: Issue #2
            </Link>
            <Text>
              An online and print publication amplifying under-platformed human{" "}
            </Text>
            <Text color="grey" fontSize="small">
              By Human Rights Journal
            </Text>
          </GridItem>

          <GridItem h="10">
            <br />
            <Gamepagination />
          </GridItem>
        </Grid>

        <Box marginTop="450px" w="100%">
          <Posters number={0}></Posters>
        </Box>

        <Box w="100%">
          <Text fontSize="lg" textAlign="start">
            Games projects
          </Text>
          <Gamescard></Gamescard>
        </Box>
        <Divider></Divider>

        <Posters number={3}></Posters>

        
        <Movies />

        <Posters number={2} />

        <Gamescard></Gamescard>
        <Posters number={4}></Posters>
        <Peoples></Peoples>
        <Divider></Divider>
        <Posters number={6}></Posters>
        <People2></People2>
        <Posters number={5}></Posters>

       
      </div>
<Footer></Footer>

    </div>
  );
};

export default Home;
