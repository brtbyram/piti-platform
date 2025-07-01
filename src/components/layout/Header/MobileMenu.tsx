import Link from 'next/link'
import React from 'react'

function MobileMenu() {
  return (
    <div>
        <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
            <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </nav>
        <button className="mt-4 text-white hover:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <span className="sr-only">Open menu</span>
        </button>
    </div>  
  )
}

export default MobileMenu