import List from '@/components/admin/list'
import { RippleBg } from '@/components/ripple'
import { RippleBg2 } from '@/components/ripple12'
import { Plus, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='lg:flex md:flex block gap-4  px-4 x'>
   <div className='w-[20%] h-auto lg:block md:block hidden  '>
    <Image className='w-full h-full  object-cover' width={600} height={800} src="/men.jpg" alt="image" />
   </div>
   <div className='lg:w-[80%] md:w-[80%] w-[100%] pt-4 border-solid border-[1px] border-gray-200 p-3 mt-3 rounded-md dark:border-gray-900  '>
   <div className='flex justify-end'>
      <Link className='py-1 px-2 bg-black rounded-md text-white flex gap-1 items-center lg:w-[12%] 
      md:w-[20%] w-[35%] dark:text-black dark:bg-white justify-center' href="#">
      <span> <PlusCircle className="h-4 w-4 lg:block md:block hidden" /></span>Add Movie
      </Link>
      </div>
      <div className='mt-5 '>
        <List />
      </div>
   </div>
   <RippleBg2/>
    </div>
  )
}
