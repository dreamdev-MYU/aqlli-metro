"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Menu, MapPin, Clock, Map, AlertTriangle, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-50 to-teal-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Shahar bo'ylab <span className="text-emerald-600">aqlli</span> harakatlanish
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real vaqt rejimidagi yangilanishlar, shaxsiylashtirilgan yo'nalishlar bilan shahar bo'ylab oson
                  harakatlanish.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Yo'nalishni Rejalashtirish
                </Button>
                <Button size="lg" variant="outline">
                  Ilovani Yuklab Olish
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/metro-passenger.png"
                width={550}
                height={550}
                alt="Toshkent Metro Yo'lovchisi"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Planner */}
      <section className="bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Yo'nalish Rejalashtirish</h2>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-sm">
                    Real vaqt
                  </Button>
                  <Button variant="ghost" size="sm" className="text-sm">
                    Jadval
                  </Button>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Qayerdan: Joylashuv yoki bekatni kiriting"
                      className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background"
                    />
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                  </Button>
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Qayerga: Manzilingizni kiriting"
                      className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">Yo'nalishlarni Qidirish</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold">Transport Turlari</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <Link
              href="/metro"
              className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-red-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-red-600"
                  >
                    <rect width="16" height="16" x="4" y="3" rx="2" />
                    <path d="M4 11h16" />
                    <path d="M12 3v8" />
                    <path d="M8 19l4 3 4-3" />
                  </svg>
                </div>
                <h3 className="font-medium">Metro Liniyalari</h3>
                <p className="mt-1 text-xs text-gray-500">5 ta liniya, 59 ta bekat</p>
              </div>
            </Link>
            <Link href="/bus" className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-blue-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M8 6v6" />
                    <path d="M15 6v6" />
                    <path d="M2 12h19.6" />
                    <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
                    <circle cx="7" cy="18" r="2" />
                    <path d="M9 18h5" />
                    <circle cx="16" cy="18" r="2" />
                  </svg>
                </div>
                <h3 className="font-medium">Avtobus Yo'nalishlari</h3>
                <p className="mt-1 text-xs text-gray-500">150+ yo'nalish, 2000+ bekat</p>
              </div>
            </Link>
            <Link
              href="/tram"
              className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-green-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-600"
                  >
                    <rect width="16" height="16" x="4" y="3" rx="2" />
                    <path d="M4 11h16" />
                    <path d="M12 3v16" />
                    <path d="m8 19-2 3" />
                    <path d="m18 22-2-3" />
                  </svg>
                </div>
                <h3 className="font-medium">Tramvay</h3>
                <p className="mt-1 text-xs text-gray-500">Yangi yo'nalishlar</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Aqlli Sayohat Uchun Aqlli Xususiyatlar</h2>
            <p className="mt-4 text-gray-500">
              Bizning intellektual tizimimiz uzluksiz sayohat tajribasi uchun zarur bo'lgan barcha narsalarni taqdim
              etadi.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-emerald-100 p-3">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium">Real Vaqt Yangilanishlari</h3>
              <p className="mt-2 text-sm text-gray-500">
                Kelish, jo'nash va xizmat uzilishlari haqida jonli yangilanishlarni oling.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-emerald-100 p-3">
                <Map className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium">Interaktiv Xaritalar</h3>
              <p className="mt-2 text-sm text-gray-500">
                Batafsil interaktiv xaritalar va bekat ma'lumotlari bilan butun tarmoqni o'rganing.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-emerald-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-emerald-600"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Yo'lovchi Ma'lumoti</h3>
              <p className="mt-2 text-sm text-gray-500">Poyezdlar sig'imi va kelish vaqti haqida aniq ma'lumotlar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Xizmat Holati</h2>
            <Button variant="link" className="text-emerald-600">
              Hammasini ko'rish
            </Button>
          </div>
          <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-green-100 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Barcha metro liniyalari normal ishlayapti</h3>
                <p className="text-sm text-gray-500">5 daqiqa oldin yangilangan</p>
              </div>
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow-100 p-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium">Avtobus 51-yo'nalishida kichik kechikishlar</h3>
                  <p className="text-sm text-gray-500">Markaziy bekat yaqinida qurilish ishlari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Yangiliklar</h2>
            <Button variant="link" className="text-emerald-600">
              Hammasini ko'rish
            </Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <Image
  src="/images/metro-station.png"
  height={200}
  width={400}
  alt="Yangi metro liniyasi ochilishi"
  className="object-cover"
/>

              </div>
              <div className="p-4">
                <div className="mb-2 text-sm text-gray-500">20 Aprel, 2025</div>
                <h3 className="mb-2 text-lg font-medium">Yangi Metro Liniyasi Kelasi Oyda Ochiladi</h3>
                <p className="mb-4 text-sm text-gray-500">
                  Yangi Yunusobod liniyasi kengaytmasi shaharning sharqiy tumanlarini markaz bilan bog'laydi.
                </p>
                <Button variant="link" className="p-0 text-emerald-600">
                  Batafsil <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/mobile-app.png"
                  height={200}
                  width={400}
                  alt="Mobil ilova yangilanishi"
                 
                />
              </div>
              <div className="p-4">
                <div className="mb-2 text-sm text-gray-500">15 Aprel, 2025</div>
                <h3 className="mb-2 text-lg font-medium">Toshkent Metro Ilovasi Katta Yangilanishni Oldi</h3>
                <p className="mb-4 text-sm text-gray-500">
                  Yangi xususiyatlarga shaxsiy bildirishnomalar va yaxshilangan yo'nalish rejalashtirish kiradi.
                </p>
                <Button variant="link" className="p-0 text-emerald-600">
                  Batafsil <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/bus-stop.png"
                  height={200}
                  width={400}
                  alt="Yozgi jadval"
                  
                />
              </div>
              <div className="p-4">
                <div className="mb-2 text-sm text-gray-500">10 Aprel, 2025</div>
                <h3 className="mb-2 text-lg font-medium">Yozgi Jadval O'zgarishlari</h3>
                <p className="mb-4 text-sm text-gray-500">
                  Barcha metro va avtobus yo'nalishlari uchun yangilangan yozgi jadvallarni tekshiring.
                </p>
                <Button variant="link" className="p-0 text-emerald-600">
                  Batafsil <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}
