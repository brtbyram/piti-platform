import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen ">
      {/* This is where the children components will be rendered */}
      {children}
    </main>
  );
}

export default layout;
