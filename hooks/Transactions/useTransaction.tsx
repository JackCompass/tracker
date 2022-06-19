import { useEffect, useState } from "react";
import { TransactionAPI } from "../../api/Transaction/TransactionAPI";
import { TransactionDetailsInterface } from "../../interface/transaction";

const useTransaction = () => {


	const [transactions, setTransactions] = useState<TransactionDetailsInterface[] | null>([]);

	const getAllTransactions = async () => {
		const transactions = await TransactionAPI.getAllTransactions();
		setTransactions(transactions.data);
	}

	useEffect( () => {
		getAllTransactions();
	}, []);

	return {
		transactions,
	}
}

export default useTransaction;