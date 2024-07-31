import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { MoreHorizontal } from 'lucide-react'


export default function List() {
  return (
    <div className='flex justify-between items-center mt'>
    <div className='flex items-center gap-3'>
    <div className='lg:w-[3.5rem] lg:h-[3.5rem] md:w-[3.5rem] md:h-[3.5rem] w-[
    2.5rem] h-[2.5rem] rounded-md'>
    <Image width={508} height={501} 
     src="/tech.png" alt=""
     className='w-[100%] h-[100%] rounded-md' 
     />
    </div>
     <h3>Created due east</h3>   
    </div>
    <div className='lg:block md:block hidden'>
    <h3>2023-07-12 10:42 AM</h3>
    </div>
    <div>
    <DropdownMenu>
   <DropdownMenuTrigger asChild>
              <Button
               aria-haspopup="true"
                size="icon"
               variant="ghost"
                      >
    <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">Toggle menu</span>
     </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
     <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Delete</DropdownMenuItem>
 </DropdownMenuContent>
 </DropdownMenu> 
    </div>
    </div>
     )
}
