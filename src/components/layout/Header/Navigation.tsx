import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div className='flex items-center justify-center'>
        <nav className="hidden xl:flex items-center space-x-5 transition-colors duration-700">
            <Link href="/features" className="hover:text-[#27AE60]  duration-700">Features</Link>
            <Link href="/trainers" className="hover:text-[#27AE60]  duration-700">Trainers</Link>
            <Link href="/pricing" className="hover:text-[#27AE60]  duration-700">Pricing</Link>
            <Link href="/login" className="hover:text-[#27AE60]  duration-700">Login</Link>
            <Link href="/signup" className="bg-white text-black px-6 py-2.5 rounded-full font-semibold tracking-tight hover:bg-[#27AE60] hover:text-white transition-colors duration-700">
                Start Free Trial
            </Link>
        </nav>
    </div>


  )
}

export default Navigation