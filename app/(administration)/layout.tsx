
import MainHeader from '@/components/admin/MainHeader'
import Sidebar from '@/components/admin/Sidebar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
   
   <div>
 <MainHeader />
 {children}
   </div>
     
 )
}