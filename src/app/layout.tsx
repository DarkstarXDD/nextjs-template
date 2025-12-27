import { Inter } from "next/font/google"
import { type Metadata } from "next"

import "@/styles/globals.css"

export const metadata: Metadata = {
  openGraph: {
    images: {
      url: "https://challenge-name-darkstarxdd.vercel.app/og-img.jpeg",
      type: "image/jpeg",
      width: 1440,
      height: 756,
    },
    description:
      "Check out Darkstar's solution for the {challenge name} challenge on Frontend Mentor",
    url: "https://challenge-name-darkstarxdd.vercel.app/",

    title: "devfinder",

    type: "website",
  },
  description:
    "Check out Darkstar's solution for the {challenge name} challenge on Frontend Mentor",

  authors: {
    url: "https://github.com/DarkstarXDD",
    name: "Darkstar",
  },

  title: "[Title]",
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter bg-zinc-800 text-white`}>
        {children}
      </body>
    </html>
  )
}
