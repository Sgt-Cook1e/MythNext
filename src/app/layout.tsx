import "./styles/main.css";
import "./styles/bootstrap.min.css";
import "./styles/modesta.css";

import { Inter } from 'next/font/google'

import FooterComponent from '@/components/footer';
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Home Of MythicXGN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main lang="en">
      <Navbar></Navbar>
        <meta name="language" content="English"/>
        <link href="https://fonts.cdnfonts.com/css/road-rage" rel="stylesheet"/>
        <body className={inter.className}>{children}</body>
      <FooterComponent></FooterComponent>
    </main>
  )
}