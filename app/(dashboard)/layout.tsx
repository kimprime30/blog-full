import React from "react";
import Link from "next/link";
import { FaHome, FaUser, FaComments, FaCog } from "react-icons/fa";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-gray-900 text-white flex flex-col">
        <h1 className="text-xl font-bold p-6">Admin Dashboard</h1>
        <ul className="flex-1">
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaHome className="mr-2" />
            <Link href="/dashboard/posts">Posts</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaUser className="mr-2" />
            <Link href="/dashboard/users">Usuários</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaComments className="mr-2" />
            <Link href="/dashboard/comments">Comentários</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaCog className="mr-2" />
            <Link href="/dashboard/settings">Configurações</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
