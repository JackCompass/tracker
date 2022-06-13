import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons"

const AddTransaction = () => {
	return (
		<>
			<Button
				borderRadius={'20px'}
				pos={'absolute'}
				bottom={'30px'}
				right={'15px'}
			>
				<AddIcon />
			</Button>
		</>
	)
}

export default AddTransaction;