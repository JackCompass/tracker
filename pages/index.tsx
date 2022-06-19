import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header/Header";
import LendingHistory from "../components/History/LendingHistory";
import LendingForm from "../components/Loan/LendingForm";

const Home: NextPage = () => {
	return (
		<>
			<Box
				bg={'#000000'}
				w={'100vw'}
				h={'100vh'}
			>
				<Header />
				<LendingHistory />
				<LendingForm />
			</Box>
		</>
	);
};

export default Home;
