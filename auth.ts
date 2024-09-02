import { UserRole } from "@prisma/client";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  // events: {
  //   async linkAccount({ user }) {
  //     await dbConfig.user.update({
  //       where: {
  //         id: user.id,
  //       },
  //       data: { emailVerified: new Date() },
  //     });
  //   },
  // },
  callbacks: {
    /***
     * if user is not email verified then they can't  login
     *  ****/
    // async signIn({ user }) {
    //   if (!user || !user.id) return false;
    //   const existingUser = await getUserById(user.id);
    //   if (!existingUser || !existingUser.emailVerified) return false;
    //   return true;
    // },
    async signIn({ user, account, profile }) {
      return true;
    },
    async session({ token, session }) {
      console.log("session dataset token : ", token);
      console.log("session dataset session : ", session);
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token, user }) {
      // console.log("token in jwt : ", token);
      // if (!token || !token.email) return token;

      // const existingUser = await getUserByEmail(token.email);
      // if (!existingUser) return token;
      // token.role = existingUser.role;

      return token;
    },
  },
  // adapter: PrismaAdapter(dbConfig),
  session: { strategy: "jwt" },
  ...authConfig,
});
