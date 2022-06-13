import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
	return (
		<>
			<Box
				bg={'#000000'}
				w={'100vw'}
				h={'100vh'}
			>
				<Header />
			</Box>
		</>
	);
};

export default Home;
