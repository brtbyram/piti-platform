"use client";

import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { Icon } from "../../../../public/Icons";
import { usePathname } from "next/navigation";

function Header() {
  //  pathname e göre görünür yapma

  const pathname = usePathname();

  const isTrainersPage = pathname.startsWith("/trainers");

  return (
    <div className="bg-[var(--color-background)] sticky top-0 left-0 w-full z-10">
      <div className="h-20 container mx-auto justify-between flex items-center space-x-4">
        <Link href="/" className="text-4xl font-bold cursor-pointer">
          yourTrainer
        </Link>

        {/* search input */}

        {isTrainersPage && (
          <div className="flex items-center w-5/12">
            <Icon name="search" size={24} />
            <input
              type="text"
              placeholder="Aradığınız antrenörü bulun..."
              className="w-7/12 h-10 px-4 border-b-2 focus:border-b-1 border-white  focus:outline-none "
            />
          </div>
        )}
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
