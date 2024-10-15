import TableControls from "../components/Dashbord/tableControls";
import DashboardTable from "../components/Dashbord/dashbordTable";
import type { User } from "../Types/type";

interface dashbordProps {
	user: User;
}

export default function Dashbord({ user }: dashbordProps) {
	return (
		<div className=" ">
			<div className="flex items-center space-x-2">
				<img
					src={user.iconImage}
					alt={`${user.name}'s icon`}
					className="ml-5 rounded-full size-10"
				/>
				<h1 className="my-8 text-4xl text-bold ml-5">{user.name}</h1>
			</div>
			<TableControls />
			<DashboardTable />
		</div>
	);
}
