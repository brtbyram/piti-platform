"use client"

import React from 'react'
import { Bell,  MessagesSquare } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/slices/modalSlice";

function Header() {

    const dispatch = useDispatch();

  return (
         <div className="fixed top-0 right-0 h-20 w-full z-20 bg-neutral-950 flex items-center justify-between px-10">
        <h1 className="text-white text-2xl font-bold italic">yourTrainer</h1>
        <nav className="flex items-center">
            <button
            onClick={() => dispatch(openModal({ id: "messages", props: { tab: "profile" } }))}
            className="text-neutral-300 cursor-pointer p-3 hover:bg-gray-800 rounded-full w-12 h-12">
           <MessagesSquare />
          </button>
          <button 
         onClick={() => dispatch(openModal({ id: "notifications", props: { tab: "profile" } }))}
          className="text-neutral-300 cursor-pointer p-3 hover:bg-gray-800 rounded-full w-12 h-12">
            <Bell size={24} />
          </button>
          <button className="text-white cursor-pointer mx-2">
            <Image
              src="/images/IMG_20190507_232453_781.jpg"
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full"
            />
          </button>
        </nav>
      </div>
  )
}

export default Header