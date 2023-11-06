import { getServerSession } from "next-auth/next"

//import { GET } from "@/app/api/auth/[...nextauth]/route.js";


export async function getSession() {
  return await getServerSession()
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    // const currentUser = await prisma.user.findUnique({
    //   where: {
    //     email: session.user.email as string,
    //   }
    // });

    // if (!currentUser) {
    //   return null;
    // }

    // return currentUser;

   console.log("currentUser", session.user);

   return session.user;

  } catch (error) {
    return null;
  }
}