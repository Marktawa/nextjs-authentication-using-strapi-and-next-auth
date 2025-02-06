import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, 
  session: {
    strategy: "jwt", 
  },
  callbacks: {
    async session({ session, token, user }) { 
      if (token) {
        session.jwt = token.jwt;
        session.id = token.id;
      }
      return session;
    },
    async jwt({ token, user, account }) { 
      if (account && user) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account.access_token}`
          );
          const data = await response.json();
          token.jwt = data.jwt;
          token.id = data.user.id;
        } catch (error) {
          console.error("Error in JWT callback:", error);
        }
      }
      return token;
    }
  }
}

export default NextAuth(authOptions)