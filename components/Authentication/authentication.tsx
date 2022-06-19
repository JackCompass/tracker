import { Box, Button, Center } from "@chakra-ui/react";
import useAuth from "../../hooks/Auth/useAuth";

const Authentication = () => {

	const {authenticateUserWithGoogle} = useAuth();

	return (
		<>
			<Box bg={"#000000"} h={"100vh"} w={"100vw"}>
				<Center>
					<Button mt={'50vh'} onClick={authenticateUserWithGoogle}>SignUp With Google</Button>
				</Center>
			</Box>
		</>
	);
};

export default Authentication;
