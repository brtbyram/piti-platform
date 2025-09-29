"use client"

import React from 'react'
import { Bell,  MessagesSquare } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/slices/modalSlice";
import Link from 'next/link';

function Header() {

    const dispatch = useDispatch();

  return (
         <div className="fixed top-0 right-0 h-20 w-full z-30 bg-neutral-950 flex items-center justify-between px-10">
        <Link href="/" className="text-3xl font-bold italic text-gray-200">your<span className='text-green-500 text-3xl'>Trainer</span></Link>
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
        <label>
                    <button className="text-white cursor-pointer mx-2 relative">
            <Image
              src="/images/IMG_20190507_232453_781.jpg"
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full"
            />
          </button>
          <div className='absolute right-12 p-6 mt-2 w-48 bg-white rounded-md hidden shadow-lg z-20'>
            <ul className=''>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </label>
        </nav>
      </div>
  )
}

export default Header