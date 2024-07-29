import { ThemeProvider } from '@/components/theme-provider'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='dark:bg-black bg-white'>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
       {children}
      </ThemeProvider>
        </div>
  )
}