"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import TashkentMetroMap from "@/components/tashkent-metro-map"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Menu, MapPin, Clock, Map, AlertTriangle, ChevronRight, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function NetworkPage() {
  const [selectedLine, setSelectedLine] = useState("all")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/metro-logo.png" alt="Toshkent Metro" width={70} height={70} />
              <span className="text-xl font-bold">AQLLI METRO</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:gap-6">
            <Link href="/network" className="text-sm font-medium text-emerald-600 underline">
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
            <Link href="/xaritalar" className="text-sm font-medium hover:underline">
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
          <h1 className="text-3xl font-bold">Transport Tarmog'i</h1>
          <p className="mt-2 text-gray-500">
            Metro liniyalari, avtobus yo'nalishlari va boshqa transport turlarini o'rganing.
          </p>
        </div>
      </div>

      {/* Journey Planner */}
      <section className="bg-white py-8">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="journey" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="journey">Yo'nalish Rejalashtirish</TabsTrigger>
              <TabsTrigger value="nearby">Yaqin Atrofda Qidirish</TabsTrigger>
              <TabsTrigger value="metro">Metro</TabsTrigger>
              <TabsTrigger value="bus">Avtobus</TabsTrigger>
            </TabsList>
            <TabsContent value="journey" className="mt-4">
              <Card>
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="nearby" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Joylashuvingizni kiriting"
                        className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background"
                      />
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Yaqin Atrofdagi Bekatlarni Topish</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="metro" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                      <Link href="/metro/chilonzor">
                        <Button variant="outline" className="justify-start w-full border-red-500 text-red-500">
                          <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                          Chilonzor yo'li
                        </Button>
                      </Link>
                      <Link href="/metro/ozbekiston">
                        <Button variant="outline" className="justify-start w-full border-blue-500 text-blue-500">
                          <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
                          O'zbekiston yo'li
                        </Button>
                      </Link>
                      <Link href="/metro/yunusobod">
                        <Button variant="outline" className="justify-start w-full border-green-500 text-green-500">
                          <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                          Yunusobod yo'li
                        </Button>
                      </Link>
                      <Link href="/metro/sergeli">
                        <Button variant="outline" className="justify-start w-full border-purple-500 text-purple-500">
                          <div className="mr-2 h-3 w-3 rounded-full bg-purple-500"></div>
                          Sergeli yo'li
                        </Button>
                      </Link>
                      <Link href="/metro/xalqa">
                        <Button variant="outline" className="justify-start w-full border-yellow-500 text-yellow-500">
                          <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
                          Xalqa yo'li
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="bus" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Avtobus yo'nalishlarini qidirish"
                      className="w-full rounded-md border border-input bg-background py-2 px-4 text-sm ring-offset-background"
                    />
                    <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
                      <Button variant="outline">51</Button>
                      <Button variant="outline">52</Button>
                      <Button variant="outline">93</Button>
                      <Button variant="outline">95</Button>
                      <Button variant="outline">98</Button>
                      <Button variant="outline">100</Button>
                      <Button variant="outline">103</Button>
                      <Button variant="outline">110</Button>
                      <Button variant="outline">115</Button>
                      <Button variant="outline">125</Button>
                      <Button variant="outline">140</Button>
                      <Button variant="outline">155</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Network Map */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Tarmoq Xaritasi</h2>
            <Button variant="outline">PDF Yuklab Olish</Button>
          </div>

          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={(value) => {
              if (value === "all") setSelectedLine("all")
              else if (value === "chilonzor") setSelectedLine("chilonzor")
              else if (value === "ozbekiston") setSelectedLine("ozbekiston")
              else if (value === "yunusobod") setSelectedLine("yunusobod")
              else if (value === "sergeli") setSelectedLine("sergeli")
            }}
          >
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">Barcha Liniyalar</TabsTrigger>
              <TabsTrigger value="chilonzor">Chilonzor</TabsTrigger>
              <TabsTrigger value="ozbekiston">O'zbekiston</TabsTrigger>
              <TabsTrigger value="yunusobod">Yunusobod</TabsTrigger>
              <TabsTrigger value="sergeli">Sergeli</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <TashkentMetroMap selectedLine="all" />
              </div>
            </TabsContent>
            <TabsContent value="chilonzor" className="mt-4">
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <TashkentMetroMap selectedLine="chilonzor" />
              </div>
            </TabsContent>
            <TabsContent value="ozbekiston" className="mt-4">
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <TashkentMetroMap selectedLine="ozbekiston" />
              </div>
            </TabsContent>
            <TabsContent value="yunusobod" className="mt-4">
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <TashkentMetroMap selectedLine="yunusobod" />
              </div>
            </TabsContent>
            <TabsContent value="sergeli" className="mt-4">
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <TashkentMetroMap selectedLine="sergeli" />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-4 p-4 bg-white rounded-lg border">
            <p className="text-sm text-gray-500">
              Barcha metro liniyalari, avtobus yo'nalishlari va ulanish nuqtalarini ko'rsatuvchi interaktiv xarita.
              Batafsil ma'lumot uchun istalgan bekatni bosing.
            </p>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="bg-white py-8">
        <div className="container px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-bold">Xizmat Holati</h2>
          <div className="grid gap-4">
            <div className="rounded-lg border p-4 shadow-sm">
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
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Metro</h3>
                    <span className="text-sm text-green-600">Yaxshi Xizmat</span>
                  </div>
                  <p className="text-sm text-gray-500">Barcha metro liniyalari normal ishlayapti</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow-100 p-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Avtobus</h3>
                    <span className="text-sm text-yellow-600">Kichik Kechikishlar</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    51, 93 yo'nalishlarida qurilish ishlari tufayli kichik kechikishlar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Clock className="h-6 w-6 text-emerald-600" />
            <h2 className="text-2xl font-bold">Ish Vaqti</h2>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium">Metro</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Dushanba - Payshanba</span>
                  <span className="text-sm font-medium">6:00 - 00:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Juma</span>
                  <span className="text-sm font-medium">6:00 - 00:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Shanba</span>
                  <span className="text-sm font-medium">6:00 - 00:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Yakshanba & Bayramlar</span>
                  <span className="text-sm font-medium">6:00 - 00:00</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium">Avtobus</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Dushanba - Juma</span>
                  <span className="text-sm font-medium">5:30 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Shanba</span>
                  <span className="text-sm font-medium">6:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Yakshanba & Bayramlar</span>
                  <span className="text-sm font-medium">6:00 - 22:00</span>
                </div>
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
