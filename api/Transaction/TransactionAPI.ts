import { PostgrestResponse } from "@supabase/supabase-js";
import { TransactionDetailsInterface } from "../../interface/transaction";
import { supabase } from "../../utils/supabaseClient";

export class TransactionAPI {

	public static async addTransaction(transactionDetails: TransactionDetailsInterface): Promise<PostgrestResponse<TransactionDetailsInterface>> {
		return await supabase.from('transactions').insert(transactionDetails);
	}

	public static async getAllTransactions(): Promise<PostgrestResponse<TransactionDetailsInterface>> {
		return await supabase.from('transactions').select();
	}
}