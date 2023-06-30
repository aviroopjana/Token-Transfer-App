import { Card, Flex, Stack, Text, Heading } from "@chakra-ui/react";

type props = {
  step: string;
  title: string;
  description: string;
};

export default function FeatureCard({ step, title, description }: props) {
  return (
    <Card
      px={6}
      py={5}
      bg="white"
      borderRadius="lg"
      boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: "100%",
        zIndex: 1,
        background:
          "linear-gradient(45deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: "40%",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        background: "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)",
      }}
    >
      <Flex
        flexDirection="column"
        position="relative"
        zIndex={2}
        transform="translateZ(1px)"
      >
        <Stack spacing={4}>
          <Flex flexDirection="row" alignItems="center" mt={"-3.5"} >
            <Text fontSize="2xl" fontWeight="bold" mr={4}>
              {step}
            </Text>
            <Heading fontSize="xl" fontWeight="bold">
              {title}
            </Heading>
          </Flex>
          <Text fontSize="lg" fontWeight={"semibold"} fontFamily={"body"}>
            {description}
          </Text>
        </Stack>
      </Flex>
    </Card>
  );
}
