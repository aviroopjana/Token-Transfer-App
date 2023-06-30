import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { TOKEN_TRANSFER_ADDRESS } from "../const/addresses";
import { useState } from "react";
import TokenSelection from "./TokenSelection";


export default function TransferCard() {
    const address = useAddress();

    const { contract } = useContract(TOKEN_TRANSFER_ADDRESS);

    const {
        data: verifiedTokens,
        isLoading: isVerifiedTokenLoading,
    } = useContractRead(
        contract,
        "getVerifiedTokens",
    );
    
    const [selectedToken, setSelectedToken] = useState('');

    const handleTokenSelection = (tokenAddress: string) => {
        setSelectedToken(tokenAddress);
    };

    return(
        <Card w={"50%"} p={20} >
            <Heading> Transfer: </Heading>

            <Text mt={4} fontWeight={"bold"} > Select token: </Text>
            <Flex flexDirection={"row"} mt={4} >
            {!isVerifiedTokenLoading && 
                    verifiedTokens.map((token: string) => (
                        <Box
                            key={token}
                            onClick={() => handleTokenSelection(token)}
                            // className={styles.tokenButton}
                        >
                            <TokenSelection
                                tokenAddress={token}
                                isSelected={selectedToken === token}
                            />
                        </Box>
                        
                    ))}
            </Flex>
        </Card>
    )
}