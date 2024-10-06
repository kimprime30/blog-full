import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../utils/dbConnect";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await dbConnect();

        if (!credentials) {
          return null;
        }

        // Simular um usuário autenticado
        const user = { id: "1", name: "User", email: "user@example.com" };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/register",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.id) {
        // Usar uma coerção de tipo para garantir que o `id` seja aceito
        (session.user as { id: string }).id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});

// Extensão dos tipos do NextAuth para incluir `id` no `Session`
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // O ID do usuário como string
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
