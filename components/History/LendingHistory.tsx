import { Avatar, Box, Container, Flex, Text } from "@chakra-ui/react";
import useTransaction from "../../hooks/Transactions/useTransaction";
import { TransactionDetailsInterface } from "../../interface/transaction";

const LendingHistory = () => {
	const { transactions } = useTransaction();

	return (
		<>
			<Flex flexWrap={"wrap"} mt={"50px"} gap={"5px"}>
				{transactions?.map(
					(transaction: TransactionDetailsInterface, index: number) => {
						return <HistoryCard key={index} transaction={transaction} />;
					}
				)}
			</Flex>
		</>
	);
};

export default LendingHistory;

const HistoryCard = ({
	transaction,
}: {
	transaction: TransactionDetailsInterface;
}) => {
	const { amount } = transaction;

	return (
		<Container bg={"#2C3333"} pt={"8px"} borderRadius={"8px"} gap={"5px"}>
			<Flex h={"inherit"}>
				<Avatar name={"Sanskar Agarwal"} m={"auto 0"} />
				<Flex m={"auto 0"}>
					<Text
						color={"white"}
						as={"h2"}
						pl={"15px"}
						fontSize={"3xl"}
					>
						{"jacob"}
					</Text>
				</Flex>
			</Flex>
			<Flex justifyContent={"right"}>
				<Box maxW={"70%"}>
					<Text color="white" fontSize={"md"}>
						{amount}
					</Text>
				</Box>
			</Flex>
		</Container>
	);
};
