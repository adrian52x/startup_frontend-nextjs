import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };              
        const res = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        
        
        const user = await res.json();
       

        if (res.ok && user) {
          return user;
        } else {
          const error = user?.message || "Something wrong...";
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token = user;
      
      console.log("token1", token);
      
      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token }
      console.log("session", session);
    
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === 'development'

});

export { handler as GET, handler as POST };

// export default NextAuth({
//      providers: [
//       CredentialsProvider({
//          name: 'Credentials',
//          credentials: {
//            email: { label: 'Email', type: 'email' },
//            password: { label: 'Password', type: 'password' },
//          },
//          authorize: async (credentials) => {
//             const payload = {
//               email: credentials.email,
//               password: credentials.password,
//             };
//             // Call your external API here to validate the credentials and generate a JWT
//             const response = await fetch('http://localhost:5000/api/login', {
//               method: 'POST',
//               body: JSON.stringify(payload),
//               headers: { 'Content-Type': 'application/json' },
//             });

//             const data = await response.json();
//             console.log("data login", data);

//            if (response.ok && data.jwt) {
//              return Promise.resolve({ id: data.id, email: data.email, jwt: data.jwt });
//            } else {
//              return Promise.reject(new Error('Invalid credentials'));
//            }
//          },
//        }),
//      ],
// });