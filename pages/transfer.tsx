import { Container, Flex } from "@chakra-ui/react";
import TransferCard from "../component/TransferCard";
import Events from "../component/Events";


export default function TransferPage() {
    return(
        <Container maxW={"1440px"} py={4} >
            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <TransferCard/>
                <Events/>
            </Flex>
        </Container>
    )
}