
import EmptyState from "../components/EmptyState";
import EmptyStateMeetings from "./components/EmptyStateMeetings";





const MeetingsPage = async () => {
  
		return (
			<div className="hidden lg:block lg:pl-80 h-full">
				<EmptyState
				title='You have upcoming sessions'
				subtitle="Select a session to view more details or to start a conversation"
				/>
			</div>

			// <div className="flex flex-col gap-4">
			// 	{meetings.map((meeting) => (
			// 		<div key={meeting._id} className="flex flex-col gap-4">
			// 			<div className="flex flex-row items-center gap-4">
			// 			<div className="flex flex-col">
			// 				<div className="font-semibold text-lg">
			// 				{meeting.sender.firstName} {meeting.time} {meeting.date}
			// 				</div>
			// 				<div className="text-sm text-neutral-500">
			// 				{meeting.status}
			// 				</div>
			// 			</div>
			// 			</div>
			// 		</div>
			// 	))}
			// </div>
		)

}
 
export default MeetingsPage;