import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";


function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen w-screen">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-black text-white hidden max-lg:flex items-center justify-center text-center">
    
      </div>
    </>
  );
}

export default layout;
