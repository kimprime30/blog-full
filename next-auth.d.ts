// Não é necessário importar NextAuth aqui
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // garante que o id será sempre uma string
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
