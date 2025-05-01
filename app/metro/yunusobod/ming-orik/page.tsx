import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Info, MapPin, Search, Menu } from "lucide-react"

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
            <span className="text-gray-900">Ming O'rik</span>
          </div>
        </div>
      </div>

      {/* Station Header */}
      <div className="relative bg-green-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-green-500"></div>
            <div>
              <h1 className="text-3xl font-bold text-green-600">Ming O'rik</h1>
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
                        <p className="text-sm text-gray-500">Ming O'rik ko'chasi, Toshkent</p>
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
                    {/* Train from Bodomzor */}
                    <div className="rounded-lg bg-indigo-900 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white text-xl font-bold">
                            S5
                          </div>
                          <div>
                            <h3 className="font-medium">TURKISTON-MING O'RIK</h3>
                            <p className="text-sm text-gray-200">yo'nalishi</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-bold">1</span>
                          <span className="ml-1">min</span>
                        </div>
                      </div>
                      <div className="mt-4 flex">
                        <div className="flex-1 flex space-x-1">
                          <div className="h-10 w-12 rounded-l-lg bg-red-500 flex items-center justify-center">
                            <div className="w-3 h-6 bg-red-700 rounded-t-sm"></div>
                          </div>
                          <div className="h-10 w-10 rounded bg-red-500"></div>
                          <div className="h-10 w-10 rounded bg-red-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Train to Chilonzor */}
                    <div className="rounded-lg bg-indigo-900 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white text-xl font-bold">
                            C1
                          </div>
                          <div>
                            <h3 className="font-medium">CHILONZOR</h3>
                            <p className="text-sm text-gray-200">yo'nalishi</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-bold">2</span>
                          <span className="ml-1">min</span>
                        </div>
                      </div>
                      <div className="mt-4 flex">
                        <div className="flex-1 flex space-x-1">
                          <div className="h-10 w-12 rounded-l-lg bg-red-500 flex items-center justify-center">
                            <div className="w-3 h-6 bg-red-700 rounded-t-sm"></div>
                          </div>
                          <div className="h-10 w-10 rounded bg-red-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-orange-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                          <div className="h-10 w-10 rounded bg-green-500"></div>
                        </div>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3!3d41.3425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIwJzMzLjAiTiA2OcKwMTYnMDMuMCJF!5e0!3m2!1sen!2s!4v1619705000000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
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
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
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
                        <p className="text-sm text-gray-500">45, 67, 82, 95</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
\
