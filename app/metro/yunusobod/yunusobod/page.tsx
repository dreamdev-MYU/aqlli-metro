"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Info, MapPin, AlertTriangle, Search, Menu, BarChart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StationPage() {
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

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-2">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Bosh sahifa
            </Link>
            <span>/</span>
            <Link href="/network" className="hover:text-gray-900">
              Transport Tarmog'i
            </Link>
            <span>/</span>
            <Link href="/metro/yunusobod" className="hover:text-gray-900">
              Yunusobod yo'li
            </Link>
            <span>/</span>
            <span className="text-gray-900">Yunusobod</span>
          </div>
        </div>
      </div>

      {/* Station Header */}
      <div className="relative bg-green-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-green-500"></div>
            <div>
              <h1 className="text-3xl font-bold text-green-600">Yunusobod</h1>
              <p className="mt-2 text-gray-500">Yunusobod yo'li</p>
            </div>
          </div>
        </div>
      </div>

      {/* Station Info */}
      <section className="bg-white py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Column - Station Details */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-bold">Bekat Ma'lumotlari</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="font-medium">Manzil</h3>
                        <p className="text-sm text-gray-500">Yunusobod ko'chasi, Toshkent</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="font-medium">Ish vaqti</h3>
                        <p className="text-sm text-gray-500">6:00 - 00:00 (har kuni)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="mt-0.5 h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="font-medium">Qulayliklar</h3>
                        <ul className="mt-1 space-y-1 text-sm text-gray-500">
                          <li className="flex items-center gap-2">
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
                              className="h-4 w-4 text-green-500"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            Lift
                          </li>
                          <li className="flex items-center gap-2">
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
                              className="h-4 w-4 text-green-500"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            Wi-Fi
                          </li>
                          <li className="flex items-center gap-2">
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
                              className="h-4 w-4 text-green-500"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                            Xavfsizlik kameralari
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Real-time Arrivals */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-bold">Kelayotgan Poyezdlar</h2>
                  <div className="space-y-4">
                    {/* Train from Turkiston */}
                    <div className="bg-indigo-900 rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold">
                              S2
                            </div>
                            <div>
                              <h3 className="text-xl font-medium text-white">YUNUSOBOD</h3>
                              <p className="text-white text-opacity-80">Turkiston-Ming o'rik yo'nalishi</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-5xl font-bold text-white">2</span>
                            <span className="ml-1 text-white text-2xl">min</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex px-4 pb-4">
                        <div className="flex-1 flex space-x-1">
                          <div className="h-10 w-12 rounded-l-lg bg-red-500 flex items-center justify-center">
                            <div className="w-3 h-6 bg-red-700 rounded-t-sm"></div>
                          </div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Next train info */}
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-gray-500" />
                          <span className="text-sm font-medium">Keyingi poyezd</span>
                        </div>
                        <span className="text-sm font-medium">7 daqiqadan so'ng</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Vagon sig'imi:</p>
                    <div className="mt-1 flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span>Bo'sh</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                        <span>O'rtacha</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <span>To'la</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Map and Connections */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-bold">Bekat Joylashuvi</h2>
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg border">
                    <iframe
                      title="Yunusobod metro bekati"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.803246118798!2d69.28276131542231!3d41.35358027926453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c24733dc24b%3A0x8fdd1ff8f7a8ed10!2sYunusobod%20metro%20stansiyasi!5e0!3m2!1sen!2s!4v1681234567890"
                      width="100%"
                      height="100%"
                      allowFullScreen=""
                      loading="lazy"
                      className="absolute top-0 left-0 w-full h-full border-0"
                    ></iframe>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => window.open("https://maps.google.com/maps?q=41.353580,69.284950&z=15", "_blank")}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Xaritada ko'rish
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() =>
                        window.open("https://www.google.com/maps/dir/?api=1&destination=41.353580,69.284950", "_blank")
                      }
                    >
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
                      Yo'nalish olish
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-bold">Ulanishlar</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
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
                          <path d="M8 6v6" />
                          <path d="M15 6v6" />
                          <path d="M2 12h19.6" />
                          <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
                          <circle cx="7" cy="18" r="2" />
                          <path d="M9 18h5" />
                          <circle cx="16" cy="18" r="2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Avtobus</h3>
                        <p className="text-sm text-gray-500">38, 51, 93</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 flex items-center text-xl font-bold">
                    <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                    Muhim Ma'lumot
                  </h2>
                  <div className="rounded-lg bg-yellow-50 p-4 text-sm">
                    <p>
                      Turkistondan kelayotgan poyezdlar odatda o'rtacha band bo'ladi. Iloji bo'lsa, kamroq band bo'lgan
                      vagonlarni tanlang.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4 mb-6">
            <BarChart className="h-6 w-6 text-emerald-600" />
            <h2 className="text-2xl font-bold">Bekat Statistikasi</h2>
          </div>

          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="daily">Kunlik</TabsTrigger>
              <TabsTrigger value="weekly">Haftalik</TabsTrigger>
              <TabsTrigger value="monthly">Oylik</TabsTrigger>
            </TabsList>

            <TabsContent value="daily" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-gray-500">Bugungi yo'lovchilar</h3>
                    <div className="mt-2 flex items-baseline">
                      <p className="text-3xl font-semibold">24,580</p>
                      <p className="ml-2 text-sm text-green-600">+5.2%</p>
                    </div>
                    <div className="mt-4 h-16 w-full bg-gray-100 rounded-md overflow-hidden relative">
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                        <div className="h-[30%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[40%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[35%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[45%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[60%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[80%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[90%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[95%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[100%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[90%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[85%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[80%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[75%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[70%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[65%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[60%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[55%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[50%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[45%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[40%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[35%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[30%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[25%] w-[4.16%] bg-emerald-500"></div>
                        <div className="h-[20%] w-[4.16%] bg-emerald-500"></div>
                      </div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
                      <span>6:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>00:00</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-gray-500">Bekat yuklama darajasi</h3>
                    <div className="mt-2 flex items-baseline">
                      <p className="text-3xl font-semibold">68%</p>
                      <p className="ml-2 text-sm text-orange-600">O'rtacha</p>
                    </div>
                    <div className="mt-4 h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: "68%" }}></div>
                    </div>
                    <div className="mt-4 flex justify-between text-xs">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                        <span>Ertalab: 85%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-orange-500 mr-1"></div>
                        <span>Tushlik: 60%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                        <span>Kechki: 90%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-gray-500">Vagonlar sig'imi</h3>
                    <div className="mt-2 flex items-baseline">
                      <p className="text-3xl font-semibold">72%</p>
                      <p className="ml-2 text-sm text-orange-600">O'rtacha</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <span className="w-8 text-xs">1-v</span>
                        <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{ width: "90%" }}></div>
                        </div>
                        <span className="ml-2 text-xs">90%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 text-xs">2-v</span>
                        <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500" style={{ width: "75%" }}></div>
                        </div>
                        <span className="ml-2 text-xs">75%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 text-xs">3-v</span>
                        <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500" style={{ width: "65%" }}></div>
                        </div>
                        <span className="ml-2 text-xs">65%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 text-xs">4-v</span>
                        <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: "55%" }}></div>
                        </div>
                        <span className="ml-2 text-xs">55%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-gray-500">Eng band vaqtlar</h3>
                    <div className="mt-2">
                      <p className="text-lg font-semibold">8:00 - 9:30</p>
                      <p className="text-sm text-gray-500">Eng yuqori ko'rsatkich</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs">8:00 - 9:00</span>
                        <div className="w-24 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{ width: "95%" }}></div>
                        </div>
                        <span className="text-xs">95%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">17:30 - 19:00</span>
                        <div className="w-24 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{ width: "90%" }}></div>
                        </div>
                        <span className="text-xs">90%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">12:00 - 13:30</span>
                        <div className="w-24 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500" style={{ width: "65%" }}></div>
                        </div>
                        <span className="text-xs">65%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="weekly" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Haftalik yo'lovchilar soni</h3>
                    <div className="h-64 w-full bg-white rounded-md overflow-hidden relative">
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                        <div className="w-[14.28%] px-1">
                          <div className="h-[60%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">Du</p>
                          <p className="text-xs text-center text-gray-500">22,450</p>
                        </div>
                        <div className="w-[14.28%] px-1">
                          <div className="h-[65%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">Se</p>
                          <p className="text-xs text-center text-gray-500">23,120</p>
                        </div>
                        <div className="w-[14.28%] px-1">
                          <div className="h-[70%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">Ch</p>
                          <p className="text-xs text-center text-gray-500">24,580</p>
                        </div>
                        <div className="w-[14.28%] px-1">
                          <div className="h-[75%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">Pa</p>
                          <p className="text-xs text-center text-gray-500">25,340</p>
                        </div>
                        <div className="w-[14.28%] px-1">
                          <div className="h-[90%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">Ju</p>
                          <p className="text-xs text-center text-gray-500">28,760</p>
                        </div>
                        <div className="w-[14.28%] px-1">
                          <div className="h-[50%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">Sh</p>
                          <p className="text-xs text-center text-gray-500">18,920</p>
                        </div>
                        <div className="w-[14.28%] px-1">
                          <div className="h-[40%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">Ya</p>
                          <p className="text-xs text-center text-gray-500">15,670</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>
                        Jami haftalik: <span className="font-semibold">158,840</span> yo'lovchi
                      </p>
                      <p>
                        O'tgan haftaga nisbatan: <span className="text-green-600">+3.2%</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Haftalik bekat yuklama darajasi</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Yunusobod</span>
                          <span className="text-sm font-medium">78%</span>
                        </div>
                        <div className="h-2.5 w-full bg-gray-200 rounded-full">
                          <div className="h-2.5 bg-orange-500 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Shahriston</span>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                        <div className="h-2.5 w-full bg-gray-200 rounded-full">
                          <div className="h-2.5 bg-orange-500 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Ming O'rik</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="h-2.5 w-full bg-gray-200 rounded-full">
                          <div className="h-2.5 bg-red-500 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Bodomzor</span>
                          <span className="text-sm font-medium">72%</span>
                        </div>
                        <div className="h-2.5 w-full bg-gray-200 rounded-full">
                          <div className="h-2.5 bg-orange-500 rounded-full" style={{ width: "72%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Turkiston</span>
                          <span className="text-sm font-medium">58%</span>
                        </div>
                        <div className="h-2.5 w-full bg-gray-200 rounded-full">
                          <div className="h-2.5 bg-green-500 rounded-full" style={{ width: "58%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Oylik yo'lovchilar dinamikasi</h3>
                    <div className="h-64 w-full bg-white rounded-md overflow-hidden relative">
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                        <div className="w-1/4 px-2">
                          <div className="h-[60%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">1-hafta</p>
                          <p className="text-xs text-center text-gray-500">152,450</p>
                        </div>
                        <div className="w-1/4 px-2">
                          <div className="h-[65%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">2-hafta</p>
                          <p className="text-xs text-center text-gray-500">158,840</p>
                        </div>
                        <div className="w-1/4 px-2">
                          <div className="h-[70%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">3-hafta</p>
                          <p className="text-xs text-center text-gray-500">165,230</p>
                        </div>
                        <div className="w-1/4 px-2">
                          <div className="h-[75%] bg-emerald-500 rounded-t-sm"></div>
                          <p className="text-xs text-center mt-2">4-hafta</p>
                          <p className="text-xs text-center text-gray-500">172,680</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>
                        Jami oylik: <span className="font-semibold">649,200</span> yo'lovchi
                      </p>
                      <p>
                        O'tgan oyga nisbatan: <span className="text-green-600">+5.8%</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Oylik statistika</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">Eng band kun</h4>
                          <p className="text-sm text-gray-500">Juma, 15-aprel</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-semibold">29,450</p>
                          <p className="text-sm text-gray-500">yo'lovchi</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">Eng band soat</h4>
                          <p className="text-sm text-gray-500">8:00 - 9:00</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-semibold">3,280</p>
                          <p className="text-sm text-gray-500">yo'lovchi/soat</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">O'rtacha kunlik</h4>
                          <p className="text-sm text-gray-500">Aprel oyi</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-semibold">21,640</p>
                          <p className="text-sm text-gray-500">yo'lovchi/kun</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">Yillik o'sish</h4>
                          <p className="text-sm text-gray-500">2024-2025</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-semibold text-green-600">+12.4%</p>
                          <p className="text-sm text-gray-500">yo'lovchi</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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
