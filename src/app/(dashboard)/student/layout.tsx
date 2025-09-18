import React from "react";

import ModalContainer from "@/components/modals/ModalContainer";
import Header from "./components/Header";

function layout({ children }: { children: React.ReactNode }) {
  


  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      {/* This is where the children components will be rendered */}
      <div className="pt-20 flex-1">{children}</div>
      <ModalContainer />
    </main>
  );
}

export default layout;
