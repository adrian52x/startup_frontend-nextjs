
import EmptyState from "../components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getMeetings from "@/app/actions/getMeetings";
import MeetingList from "./components/MeetingList";
import MeetingContent from "./components/MeetingContent";



const MeetingsPage = async ({ searchParams }) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<EmptyState
			  title="Unauthorized"
			  subtitle="Please login"
			/>
		);
	}
  
	const meetings = await getMeetings({ senderId: currentUser._id });
	const meeting = meetings.find(m => m._id === searchParams.meeting);
  
	if (meetings.length === 0) {
		return (
			<EmptyState
			  title="No sessions found"
			  subtitle="Looks like you haven't arranged any sessions."
			/>
		);
	}
  
	return (
		<div className="flex justify-center" style={{ height: 'calc(100vh - 100px)' }}>
			<div className="w-full max-w-5xl mx-auto flex">
				<div className="min-w-[20rem] sm:w-40  lg:w-80 overflow-y-auto overflow-x-hidden">
					{/* Sidebar content */}
					<MeetingList meetings={meetings} />
				</div>
				<div className="flex-grow hidden sm:block lg:block">
					{/* Main content */}
					{meeting ? 
						<MeetingContent meeting={meeting} /> 
						: 
						<EmptyState
							title={`You have upcoming sessions`}
							subtitle="Select a session to view more details"
						/>
					}	
				</div>
			</div>	
    	</div>

		

			  
	);
  
		
}
 
export default MeetingsPage;


//   <div className="h-full">
		// 	  <MeetingList meetings={meetings} />
		// 	  <EmptyState
		// 		title={`You have upcoming sessions ${searchParams.meeting}`}
		// 		subtitle="Select a session to view more details or to start a conversation"
		// 		/>
		//   </div>

// return (
		// 	<div className="hidden lg:block lg:pl-80 h-full">
		// 		<EmptyState
		// 		title={`You have upcoming sessions ${searchParams.meeting}`}
		// 		subtitle="Select a session to view more details or to start a conversation"
		// 		/>
		// 	</div>
		// )
