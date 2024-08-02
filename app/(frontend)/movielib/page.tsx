import { AnimatedGridPatternDemo } from '@/components/front/grid'
import Nav2 from '@/components/front/navs/nav2'
import App from '@/components/front/slider'
import SwiperElement from '@/components/front/slider'
import React from 'react'

export default function page() {
  return (
    <div className='bg-white dark:bg-[#020817] px-4 py-4 w-screen h-screen overflow-x-hidden relative'>
     <Nav2/>
     <div className='lg:mt-20 md:mt-20 mt-[6.5rem] flex gap-4'>
      <div className='lg:w-[78%] md:w-[100%] w-[100%]'>
      <App />
      </div>
      <div className='w-[20%] lg:block md:hidden hidden'>
      <App/>
      </div>
     </div>
     <AnimatedGridPatternDemo/>
   </div>
  )
}
