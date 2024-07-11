import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { IPageProps } from '@/interface/IPageProps'

export default function Layout({children}: IPageProps) {
  return (
    <div className='container-3xl bg-red-500'>
        <Header />
            <main>{children}</main>
        <Footer />
    </div>
  )
}
