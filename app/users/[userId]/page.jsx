import getUserById from "@/app/actions/getUserById";
import EmptyState from "@/app/components/EmptyState";
import UserProfile from "./UserProfile";


const UserPage = async ({ params }) => {

    const user = await getUserById(params);
  
    if (!user) {
      return (
          <EmptyState showReset/>
      );
    }
  
    return (
        <UserProfile user={user}
        />

     );
  }
   
  export default UserPage;