import { currentUser } from "@clerk/nextjs/server";
import SignInPage from "./pages/SignIn";
import Dashbord from "./pages/dashbord";

export default async function Home() {
	const user = await currentUser();

	if (user) {
		console.log(user); // 認証されたユーザーの情報を確認
		return <Dashbord user={user} />;
	}
	return <SignInPage />;
}
