import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Bell, BellDot, CircleUser, Home, LineChart, Menu, Package, Package2, Search, Settings, ShoppingCart, Users } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Togglebtn } from '../togglebtn'


export default function MainHeader() {
  return (
    <header className="bg-white/30 backdrop-blur-sm dark:bg-transparent/30 sticky z-[9999] top-0 flex h-16 items-center gap-4 border-b  px-4 md:px-6 overflow-x-hidden overflow-y-hidden">
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
        href="/dashboard"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Dashboard
      </Link>
     
      <Link
        href="/movies"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
      Movies
      </Link>
     
      <Link
        href="/settings"
        className="text-foreground transition-colors hover:text-foreground"
      >
        Settings
      </Link>
    </nav>
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/dashboard"
            className="text-muted-foreground hover:text-foreground"
          >
            Dashboard
          </Link>
            <Link
            href="/movies"
            className="text-muted-foreground hover:text-foreground"
          >
            Movies
          </Link>
          <Link href="/settings" className="hover:text-foreground">
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <form className="ml-auto flex-1 sm:flex-initial">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          />
        </div>
      </form>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <Togglebtn/>
  </header>
  )
}
