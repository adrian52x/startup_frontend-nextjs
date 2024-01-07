import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route";

//import { GET } from "@/app/api/auth/[...nextauth]/route.js";


export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    //console.log("session getCurrentUser", session);

    

    if (!session?.user?.email) { // if not logged in
      return null;
    } else {

        if (!session?.user?.registerMethod) { // if logged in with Google Auth
            const url = `${process.env.BACKEND_URL}/api/user/email/${session?.user?.email}`;
            const response = await fetch(url, { cache: 'no-store' });

            if (!response.ok) {
                return null;
            }
        
            const user = await response.json();
            return user;
        }
        
        return session?.user; // if logged in with email/password
    }

  } catch (error) {
    return null;
  }
}