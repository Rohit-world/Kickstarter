import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import People2 from "./people2";
import Peoples from "./peoples";
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
  AspectRatio,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Addproject = () => {
    const navigate=useNavigate()
  return (
    <Box mt="50px">
      <Box display="flex">
        <Box w="600px" marginLeft="20%" textAlign="left">
          <Text fontSize="6xl" fontFamily="serif">
            Bring your creative project to life.
          </Text>

          <Button
            marginTop="40px"
            size="lg"
            colorScheme="green"
            borderRadius="none"
            onClick={()=>navigate("/add_project/create")}
          >
            Start Project
          </Button>
        </Box>
      </Box>

      {/* image section */}

      <Box mt="80px">
        <Box display="flex" gap="20px">
          <Box>
            <Image
              w="full"
              src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-1-6e68a182e1340ce87d9b3c9f9a25da52935d14be496a4e88085025ae54bb870d.jpg"
            ></Image>
          </Box>

          <Box display="grid">
            {" "}
            <Image
              w="95%"
              src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-3-48fe9583f16524ea8412cbb862901b00af1aaf669fdcf43f466f34af5696fc08.jpg"
            ></Image>
            <Image
              mt="20px"
              w="95%"
              src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-2-8c80ae939629f8b10087e097c965990ff4b3eae72b90b51fc597c7f794420881.jpg"
            ></Image>
          </Box>
        </Box>
      </Box>

      {/* 
greensection */}

      <Box
        w="100%"
        backgroundColor="#034752"
        display="flex"
        justifyContent="center"
        padding="8% 20%"
        mt="40px"
      >
        <Box textAlign="left" display="flex">
          <Text fontSize="4xl" fontFamily="serif" color="white">
            `` We see Kickstarter as a home for creative minds and a wonderful
            platform; where people who believe, respect, and see the vision can
            support an idea and make it a reality.
          </Text>
        </Box>
      </Box>

      <Box w="100%" padding="8% 20%" mt="40px">
        <Stack spacing="80px">
          <Box textAlign="left" display="flex">
            <Text fontSize="4xl" fontWeight="bold">
              A Kickstarter project does more than raise money. It builds
              community around your work.
            </Text>
          </Box>

          <Box display="flex" justifyContent="space-between" textAlign="left">
            <Box w="30%">
              {" "}
              <Text fontSize="2x" fontWeight="semibold">
                What can I use Kickstarter to fund?
              </Text>
            </Box>
            <Box w="50%">
              {" "}
              <Text>
                Kickstarter is specifically for creative projects in the
                following categories: Art, Comics, Crafts, Dance, Design,
                Fashion, Film & Video, Food, Games, Journalism, Music,
                Photography, Publishing, Technology, and Theater. Make an album,
                write a book, create an immersive theater experience, score a
                film — you name it. Read more about{" "}
                <Link textDecoration="underline" color="blue" href="">
                  our project guidelines.
                </Link>
              </Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" textAlign="left">
            <Box w="30%">
              {" "}
              <Text fontSize="2xl" fontWeight="semibold">
                Who can I get pledges from?
              </Text>
            </Box>
            <Box w="50%">
              {" "}
              <Text>
                Millions of people visit Kickstarter every week, but support
                always begins with people you know. Friends, fans, and the
                communities you’re a part of will likely be some of your
                earliest supporters, not to mention your biggest resources for
                spreading the word about your project.
              </Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between" textAlign="left">
            <Box w="30%">
              {" "}
              <Text fontSize="2xl" fontWeight="semibold">
                How much work is it to run a project?
              </Text>
            </Box>
            <Box w="50%">
              {" "}
              <Text>
                Every Kickstarter project has its share of exhilarating and
                challenging moments, but the amount of work generally depends on
                the size and complexity of the project. Expect the first few
                days after launch to be very busy as you spread the word to your
                <Link textDecoration="underline" color="blue" href="">
                  Community answers and questions
                </Link>{" "}
                from potential backers, and more. You may need to spend the last
                few days rallying your social networks in order to reach your
                funding goal. Projects sometimes take on a life of their own,
                and in that case you should expect to spend more time creating
                and fulfilling rewards.
              </Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between" textAlign="left">
            <Box w="30%">
              {" "}
              <Text fontSize="2xl" fontWeight="semibold">
                How do I get in touch with questions?
              </Text>
            </Box>
            <Box w="50%">
              {" "}
              <Text>
                You can reach out with your questions through this{" "}
                <Link textDecoration="underline" color="blue" href="">
                  contact form
                </Link>
                We also recommend taking a look at{" "}
                <Link textDecoration="underline" color="blue" href="">
                  our FAQ
                </Link>{" "}
                for more detailed information, along with the creator handbook
                for guidance on starting and running a project.
              </Text>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box padding="4% 12%" backgroundColor="#282828">
        <AspectRatio ratio={16 / 9}>
          <iframe src="https://d3mlfyygrfdi2i.cloudfront.net/175c/startpage_20130916_supercut_hi.mp4" />
        </AspectRatio>
      </Box>

      <Box w="100%" padding="8% 20%" >
        <Stack spacing="80px">
          <Box textAlign="left" display="flex">
            <Text fontSize="5xl" fontWeight="bold">
              Why Kickstarter?
            </Text>
          </Box>

          <Box display="flex" justifyContent="space-between" textAlign="left">
            <Box w="30%">
              {" "}
              <Text fontSize="2xl" fontWeight="semibold">
                Kickstarter is just for creative projects.
              </Text>
            </Box>
            <Box w="50%">
              {" "}
              <Text>
                We built Kickstarter as a tool for artists, designers, makers,
                musicians, and creative people everywhere. We’re proud to be the
                only platform that’s fully dedicated to building community
                around creative projects.{" "}
                <Link textDecoration="underline" color="blue" href="">
                  our project guidelines.
                </Link>
              </Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" textAlign="left">
            <Box w="30%">
              {" "}
              <Text fontSize="2xl" fontWeight="semibold">
                All-or-nothing funding works.
              </Text>
            </Box>
            <Box w="50%">
              {" "}
              <Text>
                Kickstarter’s all-or-nothing model allows you to choose a
                funding goal and a set number of days to reach that goal. This
                way, you don’t get stuck without enough funds to realize your
                project. It also gives backers incentive to pledge more to help
                you reach your goal.
              </Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between" textAlign="left">
            <Box w="30%">
              {" "}
              <Text fontSize="2xl" fontWeight="semibold">
              Our community wants to support you.
              </Text>
            </Box>
            <Box w="50%">
              {" "}
              <Text>
                
Millions of backers agree — helping to create something new is exciting. People love peeking behind the creative curtain and directly supporting the creative process. In fact, 13.9 million people have pledged more than $3.39 billion to bring Kickstarter projects to life over the years.{" "}
                from potential backers, and more. You may need to spend the last
                few days rallying your social networks in order to reach your
                funding goal. Projects sometimes take on a life of their own,
               
              </Text>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box padding="0px 2%">
        <Peoples/>
      </Box>

      <Box display="flex" backgroundColor="#FFCBA9" padding="8% 0% " >
        <Box w="700px" marginLeft="20%" textAlign="left">
          <Text fontSize="6xl" fontFamily="serif">
            Bring your creative project to life.
          </Text>

          <Button
            marginTop="40px"
            size="lg"
            colorScheme="green" backgroundColor="blackAlpha.800"
            borderRadius="none"
            onClick={()=>navigate("/add_project/create")}
          >
            Start Project
          </Button>
        </Box>
      </Box>
    

      <Footer />
    </Box>
  );
};

export default Addproject;
