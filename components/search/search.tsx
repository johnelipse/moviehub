"use client"
import { Search } from 'lucide-react';
import React, { useState } from 'react'

export default function SearchFn() {
   
        const [query, setQuery] = useState('');
  
    function handleSearch(e:any){
        e.preventDefault();
      
    }
    return (
        <form onSubmit={handleSearch} className='flex items-center'>
          <input 
          className='border-solid border-[1px] rounded-r-none px-3 py-[0.2rem] outline-none border-gray-950 border-r-0 dark:bg-transparent dark:border-gray-200 rounded-md w-[100%]'
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search..." 
          />
          <button className='border-solid dark:border-gray-200 border-[1px] px-3 py-[0.2rem] rounded-l-none border-gray-950 border-l-0 rounded-md' type="submit">
            <Search className='dark:text-white'/>
          </button>
        </form>
      );
}
