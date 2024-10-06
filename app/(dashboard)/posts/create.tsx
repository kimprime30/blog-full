import React from "react";
import DashboardLayout from "../layout";

const CreatePostPage: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Criar Novo Post</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Título:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Conteúdo:</label>
          <textarea className="border p-2 w-full h-64" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Criar Post
        </button>
      </form>
    </DashboardLayout>
  );
};

export default CreatePostPage;
