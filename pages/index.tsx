import type { NextPage } from "next";
import { Container, Flex, Box, Text, Stack, Heading, Button, SimpleGrid} from "@chakra-ui/react";
import Link from "next/link";
import { MediaRenderer } from "@thirdweb-dev/react";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../component/FeatureCard";


const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"} py={4} ml={16} overflowX={"hidden"} >
      <Flex flexDirection={"row"} h={"75vh"}>
        <Flex flexDirection={"column"} justifyContent={"center"} w={"50%"}>
          <Stack spacing={4} >
            <Heading fontSize={"xl"} >
              Transfer Token
            </Heading>
            <Heading fontSize={"5xl"} >
              Send tokens to your friends and family with ease
            </Heading>
            <Text fontSize={"xl"}>
              Select from a selection of tokens to transfer to your friends and family. Write a message to go along with your token transfer. Connect your wallet to get started now!
            </Text>
            <Link href={"/transfer"} >
              <Button
                _hover={{ boxShadow: "0 0 20px rgba(0, 0, 255, 0.8)" }}
                _active={{ boxShadow: "0 0 20px rgba(0, 0, 255, 1)" }}
                background="blue.500"
                borderRadius="md"
                color="white"
                fontWeight="bold"
                p={4}
                fontSize="lg"
                mt={2}
              >
                Make a Transfer
              </Button>
            </Link>
          </Stack>
        </Flex>
        <Box ml={8} >
          <MediaRenderer
            src={HERO_IMAGE_URL}
            height="100%"
            width="80vh"
          />
        </Box>
      </Flex>
      <Flex flexDirection={"row"} mt={4} >
        <Flex mr={16} ml={"-6"} >
          <MediaRenderer
            src={FEATURES_IMAGE_URL}
            height="80%"
            width="80vh"
          />
        </Flex>
        <Box flexDirection={"column"} w={"50%"} justifyContent={"center"} alignItems={"center"} ml={8} mr={16}>
          <Stack spacing={4} >
            <FeatureCard
              step={"STEP 1:"}
              title={"Select a Token"}
              description={"Select from a list of verified tokens from the drop down to send to your friends and family."}
            />
            <FeatureCard
              step={"STEP 2:"}
              title={"Who to send to"}
              description={"Enter the wallet address of the person you want to send the token to. This is non-reversible so make sure you have the right address."}
            />
            <FeatureCard
              step={"STEP 3:"}
              title={"Write a message"}
              description={"Write a message to go along with your token transfer. This is optional but it's always nice to send a message to your friends and family."}
            />
          </Stack>
        </Box>
      </Flex>
    </Container>
  )
};

export default Home;
