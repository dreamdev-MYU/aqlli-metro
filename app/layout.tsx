import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aqlli Metro Tizimi - Toshkent Metropoliteni",
  description: "Toshkent shahri bo'ylab aqlli harakatlanish uchun metro tizimi",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz" suppressHydrationWarning>

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/metro-logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
