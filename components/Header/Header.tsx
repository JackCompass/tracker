import { Container, Divider, Heading } from "@chakra-ui/react";

const Header = () => {
	return (
		<>
			<Container 
				textAlign={'center'}
				p={'5px'}
			>
				<Heading
					color={'white'}
				>Tracker</Heading>
			</Container>
			<Divider />
		</>
	)
}

export default Header;