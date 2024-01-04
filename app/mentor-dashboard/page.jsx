

import MentorDashboard from "./MentorDashboard";
import EmptyState from "../components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getMeetings from "../actions/getMeetings";


const MentorDashboardPage = async () => {
	const currentUser = await getCurrentUser();

	if(currentUser && currentUser.isMentor) {
		const meetings = await getMeetings({ receiverId: currentUser._id });
		return (
			<MentorDashboard meetings={meetings} currentUser={currentUser}/>
		);
	} else {
		return (
			<EmptyState
			  title="Unauthorized"
			  subtitle="You cannot access this page"
			/>
		);
	}
}
 
export default MentorDashboardPage;