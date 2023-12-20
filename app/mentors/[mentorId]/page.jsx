import EmptyState from "@/app/components/EmptyState";
import getMentorById from "@/app/actions/getMentorById";
import getCurrentUser from "@/app/actions/getCurrentUser";
import MentorClient from "./MentorClient";


const MentorPage = async ({ params }) => {
    const currentUser = await getCurrentUser();
    const mentor = await getMentorById(params);
  
    if (!mentor) {
      return (
          <EmptyState showReset/>
      );
    }
  
    return (
        <MentorClient mentor={mentor} currentUser={currentUser}
            //   reservations={reservations} 
        />

     );
  }
   
  export default MentorPage;