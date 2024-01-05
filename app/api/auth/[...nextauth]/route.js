import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

// https://medium.com/ascentic-technology/authentication-with-next-js-13-and-next-auth-9c69d55d6bfd
// https://next-auth.js.org/v3/getting-started/client

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET 
    }),
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
    async signIn({ account, profile }) {
		if (account.provider === 'google'){

			//console.log("signIn callback account", account);
			//console.log("signIn callback profile", profile);

			//assert if  user exists in our custom DB
			const response = await axios.post(
				"http://localhost:5000/api/userExists",
				{ email: profile.email }
			);

			if (response && response.data?.value === true) {
				// user exists return true passing control to the next callback
				return true;
			} else {
				// second axios call which creates a new user in our database
				const data = {
				firstName: profile.given_name || " ",
				lastName: profile.family_name || " ",
				email: profile.email
				};

				//console.log(data);
				await axios.post("http://localhost:5000/api/register-oauth", data);
				// retruns true thereby passing control to the next callback
				return true;
			}
    	} else {
			return true;
		}      
          
    },

    jwt: async ({ token, user }) => {
      if (user) token = user;
      
      //console.log("token1", token);
      
      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token }
      //console.log("session", session);
    
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  //debug: process.env.NODE_ENV === 'development'

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
