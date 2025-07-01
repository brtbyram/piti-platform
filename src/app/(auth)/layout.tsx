import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
            {children}
    </div>

  )
}

export default layout