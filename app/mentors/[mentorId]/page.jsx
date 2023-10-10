import EmptyState from "@/app/components/EmptyState";
import getMentorById from "@/app/actions/getMentorById";
import MentorClient from "./MentorClient";


const MentorPage = async ({ params }) => {

    const mentor = await getMentorById(params);
  
    if (!mentor) {
      return (
          <EmptyState showReset/>
      );
    }
  
    return (
        <MentorClient mentor={mentor}
            //   reservations={reservations}
            //   currentUser={currentUser}
        />

     );
  }
   
  export default MentorPage;