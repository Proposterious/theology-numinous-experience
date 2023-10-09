// Default imports
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Custom imports
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Numinous Experience',
  description: "Webpage using Nextjs, tailwind, and typescript for a Senior's theology project",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
