import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'


function layout({children}: {children: React.ReactNode}) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default layout