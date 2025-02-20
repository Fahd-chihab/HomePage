import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"

const cairo = Cairo({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "منصة التعلم الإلكتروني",
  description: "تمكين مستقبلك من خلال التعلم",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}


