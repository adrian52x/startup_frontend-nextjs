import getCurrentUser from "@/app/actions/getCurrentUser";
import getMeetings from "@/app/actions/getMeetings";
import MeetingList from "./components/MeetingList";
import EmptyState from "../components/EmptyState";



export default async function MeetingsLayout({children}) {
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

    if (meetings.length === 0) {
		return (
			<EmptyState
			title="No sessions found"
			subtitle="Looks like you haven't arranged any sessions."
			/>
		);
  	}

    return (
        <div className="h-full">
            <MeetingList meetings={meetings} />
            {children}
        </div>
    );
  }