"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { Icon } from "../../../../public/Icons";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import clsx from "clsx";

function Header() {
  //  pathname e göre görünür yapma

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isTrainersPage = pathname.startsWith("/trainers");

  return (

      <div className={clsx("flex justify-between xl:h-16 px-6 py-2.5 xl:pr-2.5 shadow-md xl:bg-black/50  text-white fixed top-5 xl:top-5 mx-auto left-0 right-0 xl:w-6/12 max-w-[800px] z-50 transition-all duration-800 ease-in-out", isMenuOpen && " w-11/12 lg:w-10/12 h-96 bg-black items-start rounded-[2rem]" , !isMenuOpen && "w-64 md:w-72 rounded-[2.5rem] bg-black/50 items-center backdrop-blur-xl")}>
        <Link href="/" className="text-2xl font-semibold cursor-pointer italic flex-1">
          yourTrainer
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={clsx("xl:hidden flex items-center h-8 justify-center", 
          isMenuOpen && "")}>
          {isMenuOpen ? <Icon name="close" size={20} /> : <Menu />}
        </button>

        {/* search input */}

        {isTrainersPage && (
          <div className="hidden items-center w-5/12 text-white/40">
            <Icon name="search" size={24} />
            <input
              type="text"
              placeholder="Aradığınız antrenörü bulun..."
              className="w-7/12 h-10 px-4 border-b-1 focus:border-b-1 border-white/40  focus:outline-none "
            />
          </div>
        )}
        <Navigation />

      </div>

  );
}

export default Header;
