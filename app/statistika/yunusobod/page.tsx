"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Users, TrendingUp } from "lucide-react"
import MainHeader from "@/components/main-header"

export default function YunusobodStatisticsPage() {
  // Current date for display
  const currentDate = new Date()
  const formattedDate = new Intl.DateTimeFormat("uz-UZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(currentDate)

  // Week number calculation
  const startDate = new Date(currentDate.getFullYear(), 0, 1)
  const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000))
  const weekNumber = Math.ceil(days / 7)

  // Month name
  const monthName = new Intl.DateTimeFormat("uz-UZ", { month: "long" }).format(currentDate)

  // Yunusobod line stations
  const stations = [
    { name: "Turkiston", id: "turkiston", dailyPassengers: 22450, weeklyAvg: 21800, monthlyTotal: 652000 },
    { name: "Yunusobod", id: "yunusobod", dailyPassengers: 24580, weeklyAvg: 23900, monthlyTotal: 717000 },
    { name: "Shahriston", id: "shahriston", dailyPassengers: 19870, weeklyAvg: 18500, monthlyTotal: 555000 },
    { name: "Bodomzor", id: "bodomzor", dailyPassengers: 21340, weeklyAvg: 20700, monthlyTotal: 621000 },
    { name: "Minor", id: "minor", dailyPassengers: 23760, weeklyAvg: 22900, monthlyTotal: 687000 },
    { name: "Abdulla Qodiriy", id: "abdulla-qodiriy", dailyPassengers: 20150, weeklyAvg: 19600, monthlyTotal: 588000 },
    { name: "Ming O'rik", id: "ming-orik", dailyPassengers: 25980, weeklyAvg: 25100, monthlyTotal: 753000 },
  ]

  // Total line statistics
  const totalDailyPassengers = stations.reduce((sum, station) => sum + station.dailyPassengers, 0)
  const totalWeeklyAvg = stations.reduce((sum, station) => sum + station.weeklyAvg, 0)
  const totalMonthlyPassengers = stations.reduce((sum, station) => sum + station.monthlyTotal, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />

      {/* Page Header */}
      <div className="relative bg-green-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-green-500"></div>
            <div>
              <h1 className="text-3xl font-bold text-green-600">Yunusobod yo'li statistikasi</h1>
              <p className="mt-2 text-gray-500">Yo'lovchilar oqimi va bekatlar bo'yicha ma'lumotlar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Line Summary Statistics */}
      <section className="bg-white py-8">
        <div className="container px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-bold">Umumiy ko'rsatkichlar</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bugungi yo'lovchilar</p>
                    <h3 className="text-2xl font-bold">{totalDailyPassengers.toLocaleString()}</h3>
                    <p className="text-xs text-gray-500">{formattedDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Haftalik o'rtacha</p>
                    <h3 className="text-2xl font-bold">{totalWeeklyAvg.toLocaleString()}</h3>
                    <p className="text-xs text-gray-500">
                      {currentDate.getFullYear()}-yil, {weekNumber}-hafta
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-purple-100 p-3">
                    <BarChart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Oylik yo'lovchilar</p>
                    <h3 className="text-2xl font-bold">{totalMonthlyPassengers.toLocaleString()}</h3>
                    <p className="text-xs text-gray-500">
                      {currentDate.getFullYear()}-yil, {monthName}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Line Statistics Tabs */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-bold">Yo'nalish statistikasi</h2>
          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="daily">Kunlik</TabsTrigger>
              <TabsTrigger value="weekly">Haftalik</TabsTrigger>
              <TabsTrigger value="monthly">Oylik</TabsTrigger>
            </TabsList>

            <TabsContent value="daily" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-medium">Kunlik yo'lovchilar soni ({formattedDate})</h3>
                  <div className="relative h-80 w-full">
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                      {stations.map((station, index) => (
                        <div key={station.id} className="flex-1 px-1 flex flex-col items-center">
                          <div
                            className="w-full bg-green-500 rounded-t-sm"
                            style={{ height: `${(station.dailyPassengers / 30000) * 100}%` }}
                          ></div>
                          <p className="text-xs text-center mt-2 font-medium">{station.name}</p>
                          <p className="text-xs text-center text-gray-500">
                            {station.dailyPassengers.toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Eng band bekat</h4>
                        <p className="text-sm text-gray-500">Ming O'rik</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold">25,980</p>
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
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weekly" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-medium">
                    Haftalik yo'lovchilar soni ({currentDate.getFullYear()}-yil, {weekNumber}-hafta)
                  </h3>
                  <div className="relative h-80 w-full">
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                      {stations.map((station, index) => (
                        <div key={station.id} className="flex-1 px-1 flex flex-col items-center">
                          <div
                            className="w-full bg-blue-500 rounded-t-sm"
                            style={{ height: `${(station.weeklyAvg / 30000) * 100}%` }}
                          ></div>
                          <p className="text-xs text-center mt-2 font-medium">{station.name}</p>
                          <p className="text-xs text-center text-gray-500">{station.weeklyAvg.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Haftalik o'sish</h4>
                        <p className="text-sm text-gray-500">O'tgan haftaga nisbatan</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold text-green-600">+3.2%</p>
                        <p className="text-sm text-gray-500">yo'lovchi</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Eng band kun</h4>
                        <p className="text-sm text-gray-500">Juma</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold">28,760</p>
                        <p className="text-sm text-gray-500">yo'lovchi</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-medium">
                    Oylik yo'lovchilar soni ({currentDate.getFullYear()}-yil, {monthName})
                  </h3>
                  <div className="relative h-80 w-full">
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                      {stations.map((station, index) => (
                        <div key={station.id} className="flex-1 px-1 flex flex-col items-center">
                          <div
                            className="w-full bg-purple-500 rounded-t-sm"
                            style={{ height: `${(station.monthlyTotal / 800000) * 100}%` }}
                          ></div>
                          <p className="text-xs text-center mt-2 font-medium">{station.name}</p>
                          <p className="text-xs text-center text-gray-500">{station.monthlyTotal.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Oylik o'sish</h4>
                        <p className="text-sm text-gray-500">O'tgan oyga nisbatan</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold text-green-600">+5.8%</p>
                        <p className="text-sm text-gray-500">yo'lovchi</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">O'rtacha kunlik</h4>
                        <p className="text-sm text-gray-500">{monthName}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold">21,640</p>
                        <p className="text-sm text-gray-500">yo'lovchi/kun</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Individual Station Statistics */}
      <section className="bg-white py-8">
        <div className="container px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-bold">Bekatlar bo'yicha statistika</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stations.map((station) => (
              <Card key={station.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-6 w-6 rounded-full bg-green-500"></div>
                    <h3 className="text-lg font-medium">{station.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Bugungi yo'lovchilar:</span>
                      <span className="font-medium">{station.dailyPassengers.toLocaleString()}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{ width: `${(station.dailyPassengers / 30000) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Haftalik o'rtacha:</span>
                      <span className="font-medium">{station.weeklyAvg.toLocaleString()}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${(station.weeklyAvg / 30000) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Oylik jami:</span>
                      <span className="font-medium">{station.monthlyTotal.toLocaleString()}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div
                        className="h-2 bg-purple-500 rounded-full"
                        style={{ width: `${(station.monthlyTotal / 800000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => (window.location.href = `/metro/yunusobod/${station.id}`)}
                    >
                      Batafsil ma'lumot
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                <li>
                  <Link href="/statistika/yunusobod" className="hover:text-white">
                    Statistika
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
