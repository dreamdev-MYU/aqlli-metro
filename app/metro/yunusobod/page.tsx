"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Menu } from "lucide-react"

export default function YunusobodLinePage() {
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
            <Link href="/network" className="text-sm font-medium text-emerald-600 underline">
              Transport Tarmog'i
            </Link>
            <Link href="/schedules" className="text-sm font-medium hover:underline">
              Jadvallar
            </Link>
            <Link href="/xaritalar" className="text-sm font-medium hover:underline">
              Xaritalar
            </Link>
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menyuni ochish</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="relative bg-green-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-green-500"></div>
            <div>
              <h1 className="text-3xl font-bold text-green-600">Yunusobod yo'li</h1>
              <p className="mt-2 text-gray-500">Metropoliten tizimining zamonaviy liniyasi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Line Info */}
      <section className="bg-white py-8">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="stations" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="stations">Bekatlar</TabsTrigger>
              <TabsTrigger value="map">Xarita</TabsTrigger>
            </TabsList>
            <TabsContent value="stations" className="mt-6">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-6">
                  {/* Station List */}
                  <div className="relative">
                    <div className="absolute bottom-0 left-4 top-8 w-0.5 bg-green-500"></div>
                    <div className="space-y-8">
                      {/* Station 1 - Turkiston */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-green-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Turkiston</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/yunusobod/turkiston")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 2 - Yunusobod */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-green-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Yunusobod</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/yunusobod/yunusobod")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 3 - Shahriston */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-green-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Shahriston</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/yunusobod/shahriston")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 4 - Bodomzor */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-green-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Bodomzor</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/yunusobod/bodomzor")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 5 - Minor */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-green-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Minor</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/yunusobod/minor")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 6 - Abdulla Qodiriy */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-green-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Abdulla Qodiriy</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/yunusobod/abdulla-qodiriy")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 7 - Ming O'rik */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-green-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Ming O'rik</h3>
                            <div className="mt-1 flex items-center gap-2 text-sm text-red-500">
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
                                <path d="M17 3v10" />
                                <path d="m12 13 5-5" />
                                <path d="M7 8h5" />
                                <path d="M7 3v10" />
                                <path d="M17 8h-5" />
                                <path d="M12 18a5 5 0 1 0 0-10" />
                              </svg>
                              Chilonzor yo'liga o'tish bekati
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/yunusobod/ming-orik")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="map" className="mt-6">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                  <Image src="/images/tashkent-map.png" alt="Toshkent Metro Xaritasi" fill className="object-contain" />
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">
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
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Xaritani yuklab olish
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
