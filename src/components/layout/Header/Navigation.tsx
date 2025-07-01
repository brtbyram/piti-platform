import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

function Navigation() {
  return (
    <div>
        <nav className="hidden md:flex items-center space-x-8 font-semibold">
            <Link href="/features" className="hover:text-[#1F2937]">Features</Link>
            <Link href="/trainers" className="hover:text-[#1F2937]">Trainers</Link>
            <Link href="/pricing" className="hover:text-[#1F2937]">Pricing</Link>
            <Link href="/login" className="hover:text-[#1F2937]">Login</Link>
            <Link href="/signup" className="bg-[#27AE60] text-white px-6 py-3 rounded-full hover:bg-[#0891B2] transition-colors duration-300">
                Start Free Trial
            </Link>
        </nav>
        <div className="md:hidden">
            <button className="text-[#1F2937] hover:text-[#1F2937] focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <span className="sr-only">Open menu</span>
            </button>
            <MobileMenu />
        </div>
    </div>


  )
}

export default Navigation