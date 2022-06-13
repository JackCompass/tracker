import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header/Header";
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
				<LendingForm />
			</Box>
		</>
	);
};

export default Home;
