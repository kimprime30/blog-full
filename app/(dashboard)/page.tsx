import React from "react";
import DashboardLayout from "./layout";

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h2>
      <p className="mb-6">
        Aqui você pode gerenciar posts, usuários e configurações do seu blog.
      </p>
    </DashboardLayout>
  );
};

export default DashboardPage;
