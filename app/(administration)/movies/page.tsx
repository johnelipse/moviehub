import List from '@/components/admin/list'
import { Plus, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className='flex justify-end'>
      <Link className='py-1 px-2 bg-black rounded-md text-white flex gap-1 items-center lg:w-[12%] 
      md:w-[20%] w-[35%] dark:text-black dark:bg-white justify-center' href="#">
      <span> <PlusCircle className="h-4 w-4" /></span>Add Movie
      </Link>
      </div>
      <div className='mt-5'>
        <List/>
      </div>
    </div>
  )
}
