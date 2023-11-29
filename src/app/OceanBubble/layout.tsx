import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OceanBubble',
  description: 'OceanBubble Panel',
}

export default function OceanBubbleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main lang="en">
        <meta name="language" content="English"/>
        <link href="https://fonts.cdnfonts.com/css/road-rage" rel="stylesheet"/>
        <body className={inter.className}>{children}</body>
    </main>
  )
}