import './globals.css';
import { Locale, i18n } from '../../i18n.config';
import { Open_Sans } from 'next/font/google';
import React from 'react';


const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={openSans.className} lang={params.lang}>{children}</body>
    </html>
  )
}
