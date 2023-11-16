
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getMeetings from "@/app/actions/getMeetings";


const MeetingsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
    );
  }

  const meetings = await getMeetings({ senderId: currentUser.id });

  if (meetings.length === 0) {
    return (
        <EmptyState
          title="No meetings found"
          subtitle="Looks like you havent arranged any meetings."
        />
    );
  }

}
 
export default MeetingsPage;