import { currentUser } from "@clerk/nextjs/server";
import SignInPage from "./pages/SignIn";
import Dashbord from "./pages/dashbord";
import { Login } from "./supabase/user/login";

export default async function Home() {
	const authUser = await currentUser();
	if (authUser) {
		const user = await Login(authUser.id);
		console.log(user); // 認証されたユーザーの情報を確認
		return <Dashbord user={user} />;
	}

	return <SignInPage />;
}
