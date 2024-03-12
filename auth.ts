import NextAuth from 'next-auth';
import bcryptjs from 'bcryptjs';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
// import TwitterProvider from 'next-auth/providers/twitter';
import CredentialsProvider from 'next-auth/providers/credentials';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/db';
import { Role } from '@prisma/client';

declare module 'next-auth' {
  interface User {
    role: Role;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  pages: {
    newUser: '/sign-up/onboarding',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Provider your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Provider your password',
        },
      },
      async authorize(credentials, request) {
        const { email, password: credentialsPassword } = credentials;

        const user = await prisma.user.findUnique({
          where: {
            email: email as string,
          },
        });
        return { email: 'email', role: 'USER' };

        // if (user) {
        //   console.log('USER IN AUTH.TS >>>>>>>', user);
        //   const passwordCheck = await bcryptjs.compare(
        //     credentialsPassword as string,
        //     user.password as string
        //   );
        //   if (passwordCheck) {
        //     console.log('PASSWORD CHECK>>>>>>', passwordCheck);
        //     return { email: user.email, role: user.role };
        //   } else {
        //     throw new Error('Invalid password');
        //   }
        // } else {
        //   return null;
        // }
      },
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_CLIENT_ID!,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    // }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      //everytime read or write to the token
      if (user) {
        token.role = user.role;
      }
      return token; //this token will get passed to session
    },
    async session({ session, token }) {
      //will run this also in jwt
      if (token) {
        session.user.role = token.role as Role;
      }
      return session;
    },
  },
});
