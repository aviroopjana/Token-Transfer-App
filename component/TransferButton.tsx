import { Web3Button, useContract } from "@thirdweb-dev/react";
import { TOKEN_TRANSFER_ADDRESS } from "../const/addresses";
import { ethers } from "ethers";
import { useToast } from "@chakra-ui/react";

type Props = {
    tokenAddress: string;
    receiver: string;
    amount: string;
    message: string;
};

export default function TransferButton({ tokenAddress, receiver, amount, message }: Props) {
    const toast = useToast();

    const {
        contract: tokenContract
    } = useContract(tokenAddress, 'token');

    const {
        contract: transferContract
    } = useContract(TOKEN_TRANSFER_ADDRESS);

    return (
        <Web3Button
            contractAddress={TOKEN_TRANSFER_ADDRESS}
            action={async (contract) => {
                await tokenContract?.setAllowance(
                    TOKEN_TRANSFER_ADDRESS,
                    ethers.utils.parseEther(amount).toString()
                );
                
                await transferContract?.call(
                    "transfer",
                    [
                        tokenAddress,
                        receiver,
                        ethers.utils.parseEther(amount),
                        message
                    ]
                );
            }}
            onSuccess={() => toast({
                title: 'Transfer Successful',
                description: "You have successfully transferred tokens!",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })}
        >Transfer Token</Web3Button>
    );
}