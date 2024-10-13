import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-white">
			<div className=" p-8 rounded-lg  w-full max-w-md mx-auto">
				<h1 className="text-8xl text-black font-bold mb-6 text-center">
					Hello
				</h1>
				<p className="mb-6 text-center text-gray-600">
					Please sign in to your account
				</p>

				{/* Clerk の SignIn コンポーネント */}
				<SignIn
					routing="hash"
					appearance={{
						elements: {
							formButtonPrimary:
								"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg",
							formFieldInput:
								"border-gray-300 focus:ring-blue-500 focus:border-blue-500",
							formFieldLabel: "font-semibold text-gray-700",
						},
						layout: {
							logoPlacement: "none",
							socialButtonsPlacement: "bottom",
						},
					}}
				/>
			</div>
		</div>
	);
}
