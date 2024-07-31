
import MainHeader from '@/components/admin/MainHeader'
import Sidebar from '@/components/admin/Sidebar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
    <Sidebar />
    <div className="flex flex-col">
      <MainHeader />
      <div className="rounded-md overflow-hidden p-3">{children}</div>
    </div>
  </div>
  )
}