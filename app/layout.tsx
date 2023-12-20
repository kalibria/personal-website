import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mary Kushlianskaya',
  description: 'Frontend developer',
}

interface Props {
  children: React.ReactNode
}

export default function Layout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
