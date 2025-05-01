"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Menu, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/metro-logo.png" alt="Toshkent Metro" width={40} height={40} />
            <span className="text-xl font-bold">AQLLI METRO</span>
          </Link>
        </div>
        <nav className="hidden md:flex md:gap-6">
          <Link href="/network" className="text-sm font-medium hover:underline">
            Transport Tarmog'i
          </Link>
          <Link href="/xaritalar" className="text-sm font-medium hover:underline">
            Xaritalar
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium hover:underline">
                Statistika
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/statistika/chilonzor" className="cursor-pointer">
                  Chilonzor yo'li
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/statistika/ozbekiston" className="cursor-pointer">
                  O'zbekiston yo'li
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/statistika/yunusobod" className="cursor-pointer">
                  Yunusobod yo'li
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/statistika/sergeli" className="cursor-pointer">
                  Sergeli yo'li
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/statistika/xalqa" className="cursor-pointer">
                  Xalqa yo'li
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/about" className="text-sm font-medium hover:underline">
            Biz Haqimizda
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Search className="h-5 w-5" />
            <span className="sr-only">Qidirish</span>
          </Button>
          <div className="hidden md:flex">
            <Button variant="ghost" size="sm">
              O'zbek
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menyuni ochish</span>
            </Button>
            {isMenuOpen && (
              <div className="absolute right-0 top-16 w-full bg-white p-4 shadow-md">
                <div className="flex flex-col space-y-3">
                  <Link href="/network" className="text-sm font-medium">
                    Transport Tarmog'i
                  </Link>
                  <Link href="/xaritalar" className="text-sm font-medium">
                    Xaritalar
                  </Link>
                  <div className="space-y-2 pl-2">
                    <p className="text-sm font-medium">Statistika</p>
                    <Link href="/statistika/chilonzor" className="block text-sm">
                      Chilonzor yo'li
                    </Link>
                    <Link href="/statistika/ozbekiston" className="block text-sm">
                      O'zbekiston yo'li
                    </Link>
                    <Link href="/statistika/yunusobod" className="block text-sm">
                      Yunusobod yo'li
                    </Link>
                    <Link href="/statistika/sergeli" className="block text-sm">
                      Sergeli yo'li
                    </Link>
                    <Link href="/statistika/xalqa" className="block text-sm">
                      Xalqa yo'li
                    </Link>
                  </div>
                  <Link href="/about" className="text-sm font-medium">
                    Biz Haqimizda
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
