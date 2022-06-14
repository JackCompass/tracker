import { Avatar, Box, Container, Flex, Text } from "@chakra-ui/react";

const LendingHistory = () => {
	return (
		<>
			<Flex flexWrap={'wrap'} mt={'50px'} gap={'5px'}>
				<Container bg={'#2C3333'} pt={'8px'} borderRadius={'8px'}>
					<Flex h={'inherit'}>
						<Avatar name={'Sanskar Agarwal'} m={'auto 0'}/>
						<Flex m={'auto 0'}>
							<Text color={'white'} as={'h2'} pl={'15px'} fontSize={'3xl'}>Sanskar Agarwal</Text>
						</Flex>
					</Flex>
					<Flex justifyContent={'right'}>
						<Box maxW={'70%'}>
							
							<Text color="white" fontSize={'md'}>₹2000</Text>
						</Box>
					</Flex>
				</Container>
			</Flex>
		</>
	);
};

export default LendingHistory;
