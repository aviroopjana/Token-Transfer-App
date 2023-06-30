import { Box, Card, Spinner, Text } from "@chakra-ui/react";
import { useContract, useContractMetadata } from "@thirdweb-dev/react"

type props= {
    tokenAddress: string,
    isSelected?: boolean
}

export default function TokenSelection ({tokenAddress, isSelected}: props) {
    const { contract } = useContract(tokenAddress);

    const {
        data: tokenMetaData,
        isLoading: isTokenMetadataLoading,
    } = useContractMetadata(contract);

    let coinBorderColor = "grey.200";

    if(isSelected) {
        coinBorderColor="blue.500";
    }

    return(
        <Card p={4} mr={2} border={"2px solid"} borderColor={coinBorderColor} >
            {!isTokenMetadataLoading ? (
                <Box>
                    <Text>{tokenMetaData.symbol}</Text>
                </Box>
            ) : (
                <Spinner/>
            )} 
        </Card>
    )
}


















































