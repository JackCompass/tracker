import { PostgrestResponse } from "@supabase/supabase-js";
import { MemberDetailsInterface } from "../../interface/member";
import { supabase } from "../../utils/supabaseClient";

export class MemberAPI {
	
	public static async addMember(memberDetails: MemberDetailsInterface): Promise<PostgrestResponse<MemberDetailsInterface>> {
		return await supabase.from('members').insert(memberDetails);
	}

	public static async getMember(): Promise<PostgrestResponse<MemberDetailsInterface>> {
		return await supabase.from('members').select();
	}
}