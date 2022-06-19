import { useState } from "react";
import { MemberAPI } from "../../api/Member/MemberAPI";
import { TransactionAPI } from "../../api/Transaction/TransactionAPI";
import { MemberDetailsInterface } from "../../interface/member";
import { TransactionDetailsInterface } from "../../interface/transaction";

const useLending = () => {
	
	const [amount, setAmount] = useState<number | string>(() => '');
	const [borrower, setBorrower] = useState<string>(() => '');


	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isNaN(parseInt(e.target.value, 10))) {
			setAmount(parseInt(e.target.value, 10));
		} else {
			setAmount('');
		}
	}

	const handleBorrowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBorrower(e.target.value);
	}


	const validateLendingForm = (): boolean => {
		return amount !== '' && borrower !== '';
	}

	/**
	 * @description: Adds a transaction to the database if the form is valid and updates the state of the form.
	 * @returns: void
	 */
	const addTransaction = async () => {

		// Validating the form and adding the transaction to the database.
		if (validateLendingForm()) {

			const memberDetails: MemberDetailsInterface = {
				name: borrower,
				phone: ''
			}

			const transactionDetails: TransactionDetailsInterface = {
				user_id: 1,
				amount: amount,
				member_id: 1,
				mode: 'UPI'
			}


			// Adding the transaction to the database.
			await MemberAPI.addMember(memberDetails);
			await TransactionAPI.addTransaction(transactionDetails);
		}

		// clearing the form.
		setAmount('');
		setBorrower('');

	}


	return {
		amount,
		borrower,
		handleAmountChange,
		handleBorrowerChange,
		addTransaction,
	}

}
export default useLending;