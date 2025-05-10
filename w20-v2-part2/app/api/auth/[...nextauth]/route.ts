/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email", // this is : login with what? -> for us it's email
      credentials: {
        username: { label: "Username", type: "text", placeholder: "random@random.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
       
        //hardcoded a user and returned it.
        return {
            username: "qwerty",
            id:1,
            email: "qwerty@gmail.com"
        }
      },
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
