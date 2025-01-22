import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
 
async function getUser(email: string, password: string): Promise<User | undefined> {
  try 
  {
    //create and return a fake user as authenticated user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = <User>{
        id: '1',
        name: 'ddd',
        email: 'vz@gmail.com',
        password: hashedPassword 
    };
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) 
      {
        /**Login Form data validation */
        const parsedCredentials = z.object({ 
                email: z.string().email(), 
                password: z.string().min(6) 
            }).safeParse(credentials);
               
        if (parsedCredentials.success) 
        {
            //Login Form data is OK - call authentication API 
            console.log('Call authentication api');
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email, password);
            if (!user) return null;
             
            const passwordsMatch = await bcrypt.compare(password, user.password); // - 
            console.log(passwordsMatch);
            if(passwordsMatch) return user;

            /** Above code is for authentication simulation - in order to use api, we use the below **/
            /*
                const authResponse = await fetch("https:/127.0.0.1/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
                })

                if (!authResponse.ok) {
                return null
                }

                const user = await authResponse.json()

                return user
            */
        }
        console.log('Invalid credentials!');
        
        return null;
      },
    }),
  ],
});