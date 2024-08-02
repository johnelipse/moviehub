"use client"
import {
  Bell,
  Home,
  LineChart,
  Monitor,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";


export default function Sidebar() {


  return (
    <div className="hidden bg-white dark:bg-[#020817] md:block fixed   border-solid border-x border-gray-200 border-[1px] dark:border-gray-900">
     <div className="flex-1 mt-8">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all dark:text-white hover:text-primary mb-12"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex dark:text-white items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
              </Link>
             <div className="flex justify-between items-center">
             <Link
                href="/movies"
                className="flex items-center dark:text-white gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Monitor className="h-4 w-4" />
             Movies
              </Link>
              <p>116</p>
             </div>
                <Link
                href="/trial"
                className={"flex items-center gap-3 rounded-lg px-3 dark:text-white py-2 text-muted-foreground transition-all hover:text-primary"} 
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex dark:text-white items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
   
  );
}
