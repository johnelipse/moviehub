import Nav2 from '@/components/front/navs/nav2'
import App from '@/components/front/slider'
import SwiperElement from '@/components/front/slider'
import React from 'react'

export default function page() {
  return (
    <div className='bg-white dark:bg-[#020817] px-4 py-4 w-screen h-screen overflow-x-hidden'>
     <Nav2/>
     <div className='mt-20'>
      <App/>
     </div>
   </div>
  )
}
