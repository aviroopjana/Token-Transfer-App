import { Box, Card, Flex, Heading, Text, Input } from "@chakra-ui/react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { TOKEN_TRANSFER_ADDRESS } from "../const/addresses";
import { useState } from "react";
import TokenSelection from "./TokenSelection";
import TokenBalance from "./TokenBalance";
import TransferButton from "./TransferButton";


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

    const [formData, setFormData] = useState({
        receiver: " ",
        amount: " ",
        message: " "
    });

    const handleChange = (event:any, name:any) => {
        setFormData((prevState)=> ({
            ...prevState,
            [name]: event.target.value,
        }))
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
            <TokenBalance tokenAddress={selectedToken}/>
            <Text mt={4} fontWeight={"bold"} > Send To:</Text>
            <Input
                placeholder="0x0000000"
                type="text"
                value={formData.receiver}
                onChange={(event)=> handleChange(event,"receiver")}
            />
            <Text mt={4} fontWeight={"bold"} > Amount:</Text>
            <Input
                placeholder="0.0"
                type="number"
                value={formData.amount}
                onChange={(event)=> handleChange(event,"amount")}
            />
            <Text mt={4} fontWeight={"bold"} > Message:</Text>
            <Input
                placeholder="Add short message here."
                type="text"
                value={formData.message}
                onChange={(event)=> handleChange(event,"message")}
            />
            <Box mt={8} >
                {address ? (
                    <TransferButton
                        tokenAddress={selectedToken}
                        receiver={formData.receiver}
                        amount={formData.amount}
                        message={formData.message}
                    />
                ) : (
                    <Text></Text>
                )}
            </Box>
        </Card>
    )
}