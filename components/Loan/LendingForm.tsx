import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	FormControl,
	FormLabel,
	Input,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import AddTransaction from "../Transaction/AddTransaction";

const LendingForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<AddTransaction onOpen={onOpen} />
			<Drawer placement={"bottom"} isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent bg={'#28282B'}>
					<DrawerHeader borderBottomWidth="1px">
						<Text color={'white'}>Add Transaction</Text>
					</DrawerHeader>
					<DrawerBody>
						<FormControl mb={'8px'}>
							<FormLabel color={'white'}>Amount</FormLabel>
							<Input 
								color={'white'} 
								type={"number"} 
								placeholder={'100'}
								border={'1px solid white'}
								_focusVisible={{boxShadow: '0 0 0 1px #ffffff'}}
							/>
						</FormControl>
						<FormControl mb={'8px'}>
							<FormLabel color={'white'}>Borrower</FormLabel>
							<Input 
								color={'white'} 
								type={"text"} 
								placeholder={'John doe'}
								border={'1px solid white'}
								_focusVisible={{boxShadow: '0 0 0 1px #ffffff'}}
							/>
						</FormControl>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default LendingForm;
