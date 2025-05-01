"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- Navbar --- */}
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
                <DropdownMenuItem asChild><Link href="/statistika/chilonzor">Chilonzor yo'li</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/statistika/ozbekiston">O'zbekiston yo'li</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/statistika/yunusobod">Yunusobod yo'li</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/statistika/sergeli">Sergeli yo'li</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/statistika/xalqa">Xalqa yo'li</Link></DropdownMenuItem>
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
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menyuni ochish</span>
            </Button>
            {isMenuOpen && (
              <div className="absolute right-0 top-16 w-full bg-white p-4 shadow-md">
                <div className="flex flex-col space-y-3">
                  <Link href="/network">Transport Tarmog'i</Link>
                  <Link href="/xaritalar">Xaritalar</Link>
                  <div className="space-y-2 pl-2">
                    <p className="text-sm font-medium">Statistika</p>
                    <Link href="/statistika/chilonzor">Chilonzor yo'li</Link>
                    <Link href="/statistika/ozbekiston">O'zbekiston yo'li</Link>
                    <Link href="/statistika/yunusobod">Yunusobod yo'li</Link>
                    <Link href="/statistika/sergeli">Sergeli yo'li</Link>
                    <Link href="/statistika/xalqa">Xalqa yo'li</Link>
                  </div>
                  <Link href="/about">Biz Haqimizda</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* --- Hero image (Poyezd rasmi) --- */}
      <div className="relative w-full h-64">
        <img
          src="https://media.istockphoto.com/id/497709661/photo/train-in-stockholm.jpg?s=2048x2048&w=is&k=20&c=nFekH9fETHl410fJFvs_Q3XYo1D2v0n2S6RZzpSq1jU="
          alt="Poyezd rasmi"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Biz haqimizda</h1>
        </div>
      </div>

      {/* --- About Section --- */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto max-w-3xl text-center px-4">
          <p className="text-gray-700 text-lg mb-8">
            "Aqlli Metro" loyihasi zamonaviy transport infratuzilmasini raqamlashtirish, metro harakatini optimallashtirish va foydalanuvchilar uchun qulay xizmatlar yaratishni maqsad qilgan. Loyiha orqali yo‘lovchilar metro va avtobus harakati haqida aniq va tezkor ma’lumotlarga ega bo‘ladilar.
          </p>

          {/* --- Testimonial (Author) --- */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg">
              <img
                src="https://i.imgur.com/ByzWxfQ.jpeg"
                alt="Yahyobek Mehmonaliyev"
                className="object-cover w-full h-full"
              />
            </div>

            <h2 className="text-2xl font-semibold">Yahyobek Mehmonaliyev</h2>
            <p className="text-gray-600">Loyiha muallifi va ishlab chiquvchi</p>
          </div>

        </div>
      </section>

      {/* --- Contact Info --- */}
      <section className="container mx-auto p-6">
        <Card>
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-center">Aloqa ma’lumotlari</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-600" />
                <span>+998 97 502 09 06</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-600" />
                <span>yahyobekmehmonaliyev@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <span>Toshkent shahar, O‘zbekiston</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
            <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">AQLLI METRO</h3>
              <p className="text-sm">Shaharda aqlli harakatlanish uchun sizning kalitingiz.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">Tezkor Havolalar</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/network" className="hover:text-white">
                    Transport Tarmog'i
                  </Link>
                </li>
                <li>
                  <Link href="/schedules" className="hover:text-white">
                    Jadvallar
                  </Link>
                </li>
                <li>
                  <Link href="/xaritalar" className="hover:text-white">
                    Xaritalar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">Yordam & Qo'llab-quvvatlash</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/faq" className="hover:text-white">
                    Ko'p So'raladigan Savollar
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Biz Bilan Bog'lanish
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="hover:text-white">
                    Qo'shimcha Ma'lumotlar
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Foydalanish Shartlari
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">Ilovamizni Yuklab Oling</h3>
              <div className="flex flex-col gap-2">
                <Link href="#" className="inline-block">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    width={120}
                    height={40}
                    alt="App Store'dan yuklab olish"
                  />
                </Link>
                <Link href="#" className="inline-block">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    width={120}
                    height={40}
                    alt="Google Play'dan yuklab olish"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 AQLLI METRO. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
