import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Container, Flex, Text, Box, color, background} from "@chakra-ui/react";
import Link from "next/link";


export default function Navbar() {
    const address = useAddress();

    return(
        <Container maxW={"1440px"} py={4} >
            <Flex 
                flexDirection={"row"} 
                justifyContent={"space-between"} 
                alignItems={"center"} 
            >
                <Link href="/" >
                    <Text fontWeight="bold" fontSize="3xl" ml={16}>
                        <span style={{ verticalAlign: "super" }}>Token</span>
                        <Text
                            as="span"
                            fontWeight="bold"
                            fontSize="4xl"
                            color="blue.500"
                            // ml={2}
                        >
                            Swift
                        </Text>
                    </Text>
                </Link>
                {address && (
                    <Flex flexDirection={"row"} >
                        <Link href={"/transfer"} >
                            <Text mr={8}>
                                Transfer
                            </Text>
                        </Link>
                        <Link href={"/claim"} >
                            <Text mr={8} >
                                Claim Tokens
                            </Text>
                        </Link>
                        <Link href={`/profile/${address}`} >
                            <Text>
                                My Accounts
                            </Text>
                        </Link>
                    </Flex>
                )}
                <Box mr={16} >
                    <ConnectWallet theme="dark" />
                </Box>
            </Flex>
        </Container>
    )
}