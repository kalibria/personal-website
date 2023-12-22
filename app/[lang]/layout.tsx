import './globals.css';
import { Locale, i18n } from '../../i18n.config';
import { Inter } from 'next/font/google';
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mary Kushlianskaya',
  description: 'Frontend developer',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

interface Props {
  children: React.ReactNode
  params: {lang: Locale}
}

export default function Layout({
  children,
  params
}: Props) {
  return (
    <html lang={params.lang}>
      <body className={inter.className} lang={params.lang}>{children}</body>
    </html>
  )
}
