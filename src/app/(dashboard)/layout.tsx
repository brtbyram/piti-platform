import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";
import { Icon } from "../../../public/Icons";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="hidden max-lg:flex justify-between items-center text-white p-5">
        <h1 className="text-4xl">yourTrainer</h1>
        <button className=" text-white py-2 rounded-md hover:bg-gray-700 transition-colors">
          <Icon name="menu" size={24} />
        </button>
      </div>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-black text-white hidden max-lg:flex items-center justify-center text-center">
      
      </div>
    </div>
  );
}

export default layout;
