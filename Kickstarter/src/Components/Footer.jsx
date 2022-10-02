import React from "react";
import {
  Box,
  Link,
  Stack,
  Text,
  Grid,
  GridItem,
  Image,
  Divider,
  Button,
  Select,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Box
        display="flex"
        w="100%"
        borderTop="solid 3px grey"
        borderBottom="solid 3px grey"
        padding="15px"
      >
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
        <GridItem>
          <Text fontWeight="semibold" fontSize="2xl" marginBottom="20px">
            About
          </Text>
          <Box display="grid" gap="4px">
            <Link> About us</Link>
            <Link>our charter</Link>
            <Link> stats</Link>

            <Link> press</Link>
            <Link> jobs</Link>
          </Box>
        </GridItem>

        <GridItem>
          <Text fontWeight="semibold" fontSize="2xl" marginBottom="20px">
            Support
          </Text>
          <Box display="grid" gap="4px">
            <Link> Help Center</Link>
            <Link >Start project</Link>
            <Link>Creator Resources</Link>
            <Link> Forward Funds</Link>
            <Link> Brand assets</Link>
          </Box>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" fontSize="2xl" marginBottom="20px">
            More From Kickstarter
          </Text>
          <Box display="grid" gap="4px">
            <Link> Newsletters</Link>
            <Link> Kickstarter</Link> <Link> Magzines</Link>
            <Link>The Creatives</Link>
            <Link> Independent</Link>
            <Link> The Kickstarter Blog</Link>
            <Link> Mobile apps</Link>
            <Link> Research</Link>
          </Box>
        </GridItem>
      </Grid>

      <Box display="flex" padding="0px 5%" justifyContent="space-between" borderBottom="solid 0.1px grey" marginBottom="30px"  paddingBottom="20px">
        <Box>
          <Text>Kickstarter, PBC © 2022</Text>
        </Box>

        {/* <Box display="flex">
          <img width="2%" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-256.png"></img>
          <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-256.png"></img>
          <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/linked_in_online_social_media-256.png"></img>
          <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-256.png"></img>
        </Box> */}

        <Box display="flex" gap={4} >
          <Select w="100px">
            <option value="option1">English</option>
            <option value="option2">German</option>
            <option value="option3">Dutch</option>
          </Select>
          <Select w="200px">
          <option value="EUR">€  Euro   (EUR)</option>
          <option value="AUD">$  Australian Dollar   (AUD)</option>
          <option value="CAD">$  Canadian Dollar   (CAD)</option>
          <option value="DKK">kr  Danish Krone   (DKK)</option>
          <option value="JPY">¥  Japanese Yen   (JPY)</option>
          <option value="PLN">zł  Zloty   (PLN)</option>
          <option value="SEK">kr  Swedish Krona   (SEK)</option>
          <option value="USD" selected="">$  US Dollar   (USD)</option>
          </Select>
          
        </Box>
        
      </Box>
     
    </div>
  );
};

export default Footer;
