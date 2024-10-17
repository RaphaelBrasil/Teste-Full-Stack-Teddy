import React from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-6">
      <Header />
      <main className="mt-24">{children}</main>
    </div>
  );
};

export default Layout;
