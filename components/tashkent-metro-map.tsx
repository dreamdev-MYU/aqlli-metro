"use client"

import { MapContainer, TileLayer, Marker, Popup, LayerGroup, Polyline } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"
import L from "leaflet"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Fix for default marker icons in Leaflet with Next.js
const fixLeafletIcon = () => {
  // Only run on client side
  if (typeof window !== "undefined") {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    })
  }
}

// Metro station data with coordinates
const metroStations = {
  chilonzor: [
    { name: "Buyuk Ipak Yo'li", position: [41.2851, 69.2041], url: "/metro/chilonzor/buyuk-ipak-yoli" },
    { name: "Pushkin", position: [41.2911, 69.2159], url: "/metro/chilonzor/pushkin" },
    { name: "Hamid Olimjon", position: [41.2967, 69.2287], url: "/metro/chilonzor/hamid-olimjon" },
    { name: "Amir Temur Xiyoboni", position: [41.3111, 69.2401], url: "/metro/chilonzor/amir-temur" },
    { name: "Mustaqillik Maydoni", position: [41.3197, 69.2541], url: "/metro/chilonzor/mustaqillik-maydoni" },
    { name: "Paxtakor", position: [41.3275, 69.2687], url: "/metro/chilonzor/paxtakor" },
  ],
  ozbekiston: [
    { name: "Alisher Navoiy", position: [41.3111, 69.2401], url: "/metro/ozbekiston/alisher-navoiy" },
    { name: "O'zbekiston", position: [41.3011, 69.2501], url: "/metro/ozbekiston/ozbekiston" },
    { name: "Kosmonavtlar", position: [41.2911, 69.2601], url: "/metro/ozbekiston/kosmonavtlar" },
    { name: "Oybek", position: [41.2811, 69.2701], url: "/metro/ozbekiston/oybek" },
    { name: "Toshkent", position: [41.2711, 69.2801], url: "/metro/ozbekiston/toshkent" },
  ],
  yunusobod: [
    { name: "Turkiston", position: [41.3275, 69.2817], url: "/metro/yunusobod/turkiston" },
    { name: "Yunusobod", position: [41.3111, 69.2797], url: "/metro/yunusobod/yunusobod" },
    { name: "Shahriston", position: [41.3011, 69.2777], url: "/metro/yunusobod/shahriston" },
    { name: "Bodomzor", position: [41.2911, 69.2757], url: "/metro/yunusobod/bodomzor" },
    { name: "Minor", position: [41.2811, 69.2737], url: "/metro/yunusobod/minor" },
    { name: "Abdulla Qodiriy", position: [41.2711, 69.2717], url: "/metro/yunusobod/abdulla-qodiriy" },
    { name: "Ming O'rik", position: [41.2611, 69.2697], url: "/metro/yunusobod/ming-orik" },
  ],
  sergeli: [
    { name: "Toshkent Halqa Yo'li", position: [41.2511, 69.2597], url: "/metro/sergeli/toshkent-halqa-yoli" },
    { name: "Sergeli", position: [41.2411, 69.2497], url: "/metro/sergeli/sergeli" },
    { name: "Afrosiyob", position: [41.2311, 69.2397], url: "/metro/sergeli/afrosiyob" },
    { name: "Qipchoq", position: [41.2211, 69.2297], url: "/metro/sergeli/qipchoq" },
    { name: "Toshkent Janubiy", position: [41.2111, 69.2197], url: "/metro/sergeli/toshkent-janubiy" },
  ],
}

// Line colors
const lineColors = {
  chilonzor: "#E53935", // Red
  ozbekiston: "#1E88E5", // Blue
  yunusobod: "#43A047", // Green
  sergeli: "#8E24AA", // Purple
}

// Custom marker icons for each line
const createLineIcon = (color: string) => {
  return L.divIcon({
    className: "custom-metro-marker",
    html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  })
}

export default function TashkentMetroMap({ selectedLine = "all" }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    fixLeafletIcon()
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[500px] w-full bg-gray-100 flex items-center justify-center">Xarita yuklanmoqda...</div>
  }

  // Draw metro lines between stations
  const renderMetroLines = () => {
    return Object.entries(metroStations).map(([line, stations]) => {
      if (selectedLine !== "all" && selectedLine !== line) return null

      const lineColor = lineColors[line as keyof typeof lineColors]
      const positions = stations.map((station) => station.position)

      if (positions.length < 2) return null

      return (
        <LayerGroup key={line}>
          <Polyline positions={positions} pathOptions={{ color: lineColor, weight: 5 }} />
        </LayerGroup>
      )
    })
  }

  // Render markers for stations
  const renderStationMarkers = () => {
    return Object.entries(metroStations).map(([line, stations]) => {
      if (selectedLine !== "all" && selectedLine !== line) return null

      const lineColor = lineColors[line as keyof typeof lineColors]
      const icon = createLineIcon(lineColor)

      return stations.map((station, index) => (
        <Marker key={`${line}-${index}`} position={station.position} icon={icon}>
          <Popup>
            <div className="p-2">
              <h3 className="font-medium">{station.name}</h3>
              <p className="text-sm text-gray-500">{line.charAt(0).toUpperCase() + line.slice(1)} yo'li</p>
              <Button variant="outline" size="sm" className="mt-2 w-full" asChild>
                <Link href={station.url}>Batafsil</Link>
              </Button>
            </div>
          </Popup>
        </Marker>
      ))
    })
  }

  return (
    <div className="relative h-[500px] w-full rounded-lg overflow-hidden border shadow-sm">
      <MapContainer center={[41.2995, 69.2401]} zoom={13} className="h-full w-full" scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {renderMetroLines()}
        {renderStationMarkers()}
      </MapContainer>
    </div>
  )
}
