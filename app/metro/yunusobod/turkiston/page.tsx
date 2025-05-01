"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Info, MapPin, AlertTriangle, Search, Menu } from "lucide-react"

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
            <span className="text-gray-900">Turkiston</span>
          </div>
        </div>
      </div>

      {/* Station Header */}
      <div className="relative bg-green-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-green-500"></div>
            <div>
              <h1 className="text-3xl font-bold text-green-600">Turkiston</h1>
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
                        <p className="text-sm text-gray-500">Turkiston ko'chasi, Toshkent</p>
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

              {/* Real-time Departures */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-bold">Chiqayotgan Poyezdlar</h2>
                  <div className="space-y-4">
                    {/* Train to Ming O'rik */}
                    <div className="bg-indigo-900 rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold">
                              S1
                            </div>
                            <div>
                              <h3 className="text-xl font-medium text-white">TURKISTON</h3>
                              <p className="text-white text-opacity-80">Turkiston-Ming o'rik yo'nalishi</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-5xl font-bold text-white">3</span>
                            <span className="ml-1 text-white text-2xl">min</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex px-4 pb-4">
                        <div className="flex-1 flex space-x-1">
                          <div className="h-10 w-12 rounded-l-lg bg-gray-400 flex items-center justify-center">
                            <div className="w-3 h-6 bg-gray-600 rounded-t-sm"></div>
                          </div>
                          <div className="h-10 w-10 rounded bg-gray-400"></div>
                          <div className="h-10 w-10 rounded bg-gray-400"></div>
                          <div className="h-10 w-10 rounded bg-gray-400"></div>
                          <div className="h-10 w-10 rounded bg-gray-400"></div>
                          <div className="h-10 w-10 rounded bg-gray-400"></div>
                          <div className="h-10 w-10 rounded bg-gray-400"></div>
                          <div className="h-10 w-10 rounded bg-gray-400"></div>
                          <div className="h-10 w-10 rounded bg-gray-400"></div>
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
                        <span className="text-sm font-medium">10 daqiqadan so'ng</span>
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
                      title="Turkiston metro bekati"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9291382400713!2d69.29380091542291!3d41.37747207926427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bba9cb5c5ad%3A0x61ba53823bb0f9a5!2sTurkiston%20metro%20station!5e0!3m2!1sen!2s!4v1681234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => window.open("https://maps.google.com/maps?q=41.377472,69.295989&z=15", "_blank")}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Xaritada ko'rish
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() =>
                        window.open("https://www.google.com/maps/dir/?api=1&destination=41.377472,69.295989", "_blank")
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
                        <p className="text-sm text-gray-500">33, 57, 71</p>
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
                      Bu bekat Yunusobod yo'lining boshlang'ich bekati. Poyezdlar bu yerdan Ming O'rik yo'nalishida
                      ketadi.
                    </p>
                  </div>
                </CardContent>
              </Card>
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
