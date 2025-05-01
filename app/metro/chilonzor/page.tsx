"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainHeader } from "@/components/main-header"

export default function ChilonzorLinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <MainHeader />

      {/* Page Header */}
      <div className="relative bg-red-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-red-500"></div>
            <div>
              <h1 className="text-3xl font-bold text-red-600">Chilonzor yo'li</h1>
              <p className="mt-2 text-gray-500">AQLLI METROning birinchi va eng uzun liniyasi</p>
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
                    <div className="absolute bottom-0 left-4 top-8 w-0.5 bg-red-500"></div>
                    <div className="space-y-8">
                      {/* Station 1 */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-red-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Buyuk Ipak Yo'li</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/chilonzor/buyuk-ipak-yoli")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 2 */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-red-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Pushkin</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/chilonzor/pushkin")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 3 */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-red-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Hamid Olimjon</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/chilonzor/hamid-olimjon")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 4 - Transfer Station */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-red-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Amir Temur Xiyoboni</h3>
                            <div className="mt-1 flex items-center gap-2 text-sm text-blue-500">
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
                              Yunusobod yo'liga o'tish bekati
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/chilonzor/amir-temur")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 5 */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-red-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Mustaqillik Maydoni</h3>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/chilonzor/mustaqillik-maydoni")}
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>

                      {/* Station 6 - Transfer Station */}
                      <div className="relative pl-10">
                        <div className="absolute left-3 top-1 z-10 h-5 w-5 rounded-full bg-red-500"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">Paxtakor</h3>
                            <div className="mt-1 flex items-center gap-2 text-sm text-blue-500">
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
                              O'zbekiston yo'liga o'tish bekati
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => (window.location.href = "/metro/chilonzor/paxtakor")}
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
      <footer className="mt-auto bg-gray-100 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/images/metro-logo.png" alt="Toshkent Metro" width={30} height={30} />
              <span className="text-sm font-semibold">AQLLI METRO</span>
            </div>
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Toshkent Metropoliteni. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
