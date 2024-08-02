import React from 'react'
 
import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
   Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { RippleBg2 } from '../ripple12'

export default function Main() {
  return (
    <main className="flex flex-1 flex-col gap-0 p-4 lg:gap-8 md:p-8 w-[100%]">
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 overflow-x-hidden ">
      <Card x-chunk="dashboard-01-chunk-0 bg-white/30 backdrop-blur-sm dark:bg-transparent/30">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Revenue
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Subscriptions
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">
            +19% from last month
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">
            +201 since last hour
          </p>
        </CardContent>
      </Card>
    </div>
    <div className="">
      <Card
        className="xl:col-span-2 w-[100%]" x-chunk="dashboard-01-chunk-4"
      >
        <CardHeader className="flex flex-row items-center ">
          <div className="grid gap-2">
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your store.
            </CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="#">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table className='bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
            <TableHeader className='bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden xl:table-column">
                  Type
                </TableHead>
                <TableHead className="hidden xl:table-column">
                  Status
                </TableHead>
                <TableHead className="hidden xl:table-column">
                  Date
                </TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
              <TableRow className='bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
                <TableCell className='bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
                  <div className="font-medium">Liam Johnson</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden xl:table-column bg-white/30 backdrop-blur-sm dark:bg-transparent/30">
                  Sale
                </TableCell>
                <TableCell className="hidden xl:table-column">
                  <Badge className="text-xs bg-white/30 backdrop-blur-sm dark:bg-transparent/30" variant="outline">
                    Approved
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                  2023-06-23
                </TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow className='bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
                <TableCell>
                  <div className="font-medium">Olivia Smith</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    olivia@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden xl:table-column">
                  Refund
                </TableCell>
                <TableCell className="hidden xl:table-column">
                  <Badge className="text-xs" variant="outline">
                    Declined
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                  2023-06-24
                </TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow className='bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
                <TableCell>
                  <div className="font-medium">Noah Williams</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    noah@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden xl:table-column">
                  Subscription
                </TableCell>
                <TableCell className="hidden xl:table-column">
                  <Badge className="text-xs" variant="outline">
                    Approved
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                  2023-06-25
                </TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
              <TableRow className='bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
                <TableCell>
                  <div className="font-medium">Emma Brown</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    emma@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden xl:table-column">
                  Sale
                </TableCell>
                <TableCell className="hidden xl:table-column">
                  <Badge className="text-xs" variant="outline">
                    Approved
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                  2023-06-26
                </TableCell>
                <TableCell className="text-right">$450.00</TableCell>
              </TableRow>
              <TableRow className='bg-white/30 backdrop-blur-sm dark:bg-transparent/30'>
                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden xl:table-column bg-white/30 backdrop-blur-sm dark:bg-transparent/30">
                  Sale
                </TableCell>
                <TableCell className="hidden xl:table-column bg-white/30 backdrop-blur-sm dark:bg-transparent/30">
                  <Badge className="text-xs" variant="outline">
                    Approved
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell lg:hidden xl:table-column bg-white/30 backdrop-blur-sm dark:bg-transparent/30">
                  2023-06-27
                </TableCell>
                <TableCell className="text-right bg-white/30 backdrop-blur-sm dark:bg-transparent/30">$550.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
    <RippleBg2/>
  </main>
    
  )
}
