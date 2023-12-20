

import MentorDashboard from "./MentorDashboard";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getMeetings from "../actions/getMeetings";


const MentorDashboardPage = async () => {
	const currentUser = await getCurrentUser();
	const meetings = await getMeetings({ receiverId: currentUser._id });
	
		return (
			<MentorDashboard meetings={meetings} currentUser={currentUser}/>
		);

}
 
export default MentorDashboardPage;