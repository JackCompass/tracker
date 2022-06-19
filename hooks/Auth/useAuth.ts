import { supabase } from "../../utils/supabaseClient";

const useAuth = () => {
	
	const authenticateUserWithGoogle = async () => {
		const {user, session, error} = await supabase.auth.signIn({
			provider: 'google'
		})

		if (user) {
			console.log(user);
		} else {
			console.log('There is something else');
		}
	}
	
	return {
		authenticateUserWithGoogle
	}
}

export default useAuth;