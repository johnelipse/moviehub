"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SunMediumIcon, SunMoonIcon } from "lucide-react"

export function Togglebtn() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <SunMediumIcon className="lg:h-[1.2rem] lg:w-[1.2rem] md:h-[1.2rem] md:w-[1.2rem] h-[1rem]
           w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <SunMoonIcon className="absolute lg:h-[1.2rem] lg:w-[1.2rem] md:h-[1.2rem] md:w-[1.2rem] h-[1rem]
           w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
