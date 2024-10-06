import React from "react";
import DashboardLayout from "./layout";

const UsersPage: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Gerenciar Usuários</h2>
      {/* Aqui você pode implementar a tabela de usuários */}
    </DashboardLayout>
  );
};

export default UsersPage;
