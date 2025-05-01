"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TashkentMetroMap from "@/components/tashkent-metro-map"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Menu, Download, MapPin, Clock, Map, AlertTriangle, ChevronRight, ChevronDown } from "lucide-react"

export default function XaritalarPage() {
  const [selectedLine, setSelectedLine] = useState("all")

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
            <Link href="/xaritalar" className="text-sm font-medium text-emerald-600 underline">
              Xaritalar
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              Biz Haqimizda
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground">
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
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="sr-only">Qidirish</span>
            </Button>
            <div className="hidden md:flex">
              <Button variant="ghost" size="sm">
                O'zbek
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
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
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Menyuni ochish</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="relative bg-gray-100 py-8">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold">Xaritalar</h1>
          <p className="mt-2 text-gray-500">Interaktiv va yuklab olinadigan xaritalar bilan tarmoqni o'rganing.</p>
        </div>
      </div>

      {/* Interactive Map */}
      <section className="bg-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Map className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold">Interaktiv Xarita</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <MapPin className="mr-2 h-4 w-4" />
                Bekatni Topish
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Yuklab Olish
              </Button>
            </div>
          </div>
          <div className="mt-6 rounded-lg border bg-white p-1 shadow-sm">
            <Tabs
              defaultValue="full"
              className="w-full"
              onValueChange={(value) => {
                if (value === "full") setSelectedLine("all")
                else if (value === "metro") setSelectedLine("all")
                else if (value === "chilonzor") setSelectedLine("chilonzor")
                else if (value === "ozbekiston") setSelectedLine("ozbekiston")
                else if (value === "yunusobod") setSelectedLine("yunusobod")
                else if (value === "sergeli") setSelectedLine("sergeli")
              }}
            >
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="full">To'liq Tarmoq</TabsTrigger>
                <TabsTrigger value="metro">Barcha Metro</TabsTrigger>
                <TabsTrigger value="chilonzor">Chilonzor</TabsTrigger>
                <TabsTrigger value="ozbekiston">O'zbekiston</TabsTrigger>
                <TabsTrigger value="yunusobod">Yunusobod</TabsTrigger>
                <TabsTrigger value="sergeli">Sergeli</TabsTrigger>
              </TabsList>
              <TabsContent value="full" className="mt-2">
                <TashkentMetroMap selectedLine="all" />
              </TabsContent>
              <TabsContent value="metro" className="mt-2">
                <TashkentMetroMap selectedLine="all" />
              </TabsContent>
              <TabsContent value="chilonzor" className="mt-2">
                <TashkentMetroMap selectedLine="chilonzor" />
              </TabsContent>
              <TabsContent value="ozbekiston" className="mt-2">
                <TashkentMetroMap selectedLine="ozbekiston" />
              </TabsContent>
              <TabsContent value="yunusobod" className="mt-2">
                <TashkentMetroMap selectedLine="yunusobod" />
              </TabsContent>
              <TabsContent value="sergeli" className="mt-2">
                <TashkentMetroMap selectedLine="sergeli" />
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>
              Qo'shimcha ma'lumot olish uchun istalgan bekatni bosing: qulayliklar, bog'lanishlar va real vaqtdagi
              jo'nashlar.
            </p>
          </div>
        </div>
      </section>

      {/* Downloadable Maps */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-bold">Yuklab Olinadigan Xaritalar</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Metro Tarmog'i Xaritasi</CardTitle>
                <CardDescription>Barcha metro liniyalari va bekatlarining to'liq xaritasi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/map%20%281%29.jpg-4cHQqIJPJV1R8tKDIqD5A3KNuS6qBE.jpeg"
                    alt="Metro Tarmog'i Xaritasi"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-sm text-gray-500">PDF, 5.2 MB</div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Yuklab Olish
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Avtobus Yo'nalishlari Xaritasi</CardTitle>
                <CardDescription>Barcha avtobus yo'nalishlari va bekatlar bilan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avto%20x.jpg-4u4W3iDtS3Qk60jMrNbnrZHZMR16ta.jpeg"
                    alt="Avtobus Yo'nalishlari Xaritasi"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-sm text-gray-500">PDF, 6.8 MB</div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Yuklab Olish
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shahar Markazi Batafsil Xaritasi</CardTitle>
                <CardDescription>Markaziy bekatlar va bog'lanishlarning batafsil ko'rinishi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-29%20232119-JLMxF7JWUehQBmuRIJi06XdUzlFZfK.png"
                    alt="Shahar Markazi Batafsil Xaritasi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-sm text-gray-500">PDF, 4.1 MB</div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Yuklab Olish
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tungi Xizmat Xaritasi</CardTitle>
                <CardDescription>Tungi xizmatlar uchun yo'nalishlar va jadvallar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-29%20232732-688sdj6nX9vdBIlExUKZR03eNwACnE.png"
                    alt="Tungi Xizmat Xaritasi"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-sm text-gray-500">PDF, 3.5 MB</div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Yuklab Olish
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Qulayliklar Xaritasi</CardTitle>
                <CardDescription>Qulayliklar mavjud bo'lgan bekatlar ajratilgan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qulaylik-SVcM6eX4NVHmOM8dpg2S5KYmR2JjHs.png"
                    alt="Qulayliklar Xaritasi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-sm text-gray-500">PDF, 4.7 MB</div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Yuklab Olish
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sayyohlar Xaritasi</CardTitle>
                <CardDescription>Asosiy diqqatga sazovor joylar yaqinidagi transport imkoniyatlari</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-29%20232119-JLMxF7JWUehQBmuRIJi06XdUzlFZfK.png"
                    alt="Sayyohlar Xaritasi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-sm text-gray-500">PDF, 5.9 MB</div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Yuklab Olish
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Station Information */}
      <section className="bg-white py-8">
        <div className="container px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-bold">Bekat Ma'lumotlari</h2>
          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4">
              <label htmlFor="station-search" className="mb-2 block text-sm font-medium">
                Bekat qidirish
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="station-search"
                  placeholder="Bekat nomini kiriting"
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium">Mashhur Bekatlar</h3>
                <ul className="space-y-2">
                  <li>
                    <Button variant="link" className="h-auto p-0 text-emerald-600">
                      Paxtakor
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="h-auto p-0 text-emerald-600">
                      Alisher Navoiy
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="h-auto p-0 text-emerald-600">
                      Chorsu
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="h-auto p-0 text-emerald-600">
                      Mustaqillik Maydoni
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="h-auto p-0 text-emerald-600">
                      Bodomzor
                    </Button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">Bekat Qulayliklari</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-emerald-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    Nogironlar aravachasi qulayligi
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-emerald-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    Liftlar va eskalatorlar
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-emerald-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    Chipta avtomatlari
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-emerald-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    Hojatxonalar
                  </li>
                  <li className="flex items-center">
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
                      className="mr-2 h-4 w-4 text-emerald-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    Wi-Fi ulanishi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-auto">
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
