import NextAuth from 'next-auth';
import Providers from 'next-auth/providers/credentials';

   const options = {
     providers: [
       Providers.Credentials({
         name: 'Credentials',
         credentials: {
           email: { label: 'Email', type: 'email' },
           password: { label: 'Password', type: 'password' },
         },
         authorize: async (credentials) => {
           // Call your external API here to validate the credentials and generate a JWT
           const response = await fetch('http://localhost:5000/api/login', {
             method: 'POST',
             body: JSON.stringify(credentials),
             headers: { 'Content-Type': 'application/json' },
           });

           const data = await response.json();

           if (response.ok && data.jwt) {
             return Promise.resolve({ id: data.id, email: data.email, jwt: data.jwt });
           } else {
             return Promise.reject(new Error('Invalid credentials'));
           }
         },
       }),
     ],
   };

   export default (req, res) => NextAuth(req, res, options);