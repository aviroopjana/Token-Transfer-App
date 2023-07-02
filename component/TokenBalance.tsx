import { Box, Text } from "@chakra-ui/react";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";

type Props = {
    tokenAddress: string;
};

export default function TokenBalance({ tokenAddress } : Props ){

    const address = useAddress();

    const { contract } = useContract(tokenAddress);

    const  {
        data: balance,
        isLoading: isTokenBalanceLoading,
    } = useTokenBalance(contract, address);
    
    return (
        <Box mt={4}>
            {!isTokenBalanceLoading && (
                <Text>Balance: {balance?.displayValue}</Text>
            )}
        </Box>
    )
}