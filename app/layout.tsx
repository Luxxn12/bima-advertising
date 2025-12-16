import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://bima-advertising.vercel.app/"),
  title: "Bima Advertising - Jasa Advertising Profesional Denpasar Bali",
  description:
    "Solusi lengkap advertising outdoor & indoor: Neon Box, Letter Timbul, Billboard, Running Text. Pengerjaan rapi, tepat waktu, harga kompetitif. Melayani Denpasar & seluruh Bali.",
  keywords:
    "bima advertising, jasa advertising bali, neon box denpasar, letter timbul bali, billboard bali, signage bali, reklame denpasar",
  authors: [{ name: "Bima Advertising" }],
  verification: {
    google: "PaJMZjsyAEyMQZt8iBRh7ueP9NMJuCOFe4dliJCdiPs",
  },
  applicationName: "Bima Advertising",
  category: "Business",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Bima Advertising - Jasa Advertising Profesional Bali",
    description: "Solusi lengkap signage & reklame untuk bisnis Anda di Bali",
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Bima Advertising",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Bima Advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bima Advertising - Jasa Advertising Profesional Bali",
    description: "Solusi lengkap signage & reklame untuk bisnis Anda di Bali",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      {
        url: "logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
