import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'Breda Mwelu Portfolio',
 description: 'Student @ Drew University | Computer Science and French',
};

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
 return (
  <html lang="en" data-theme="retro">
   <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="./favicon.ico" />
   </Head>
   <body className={inter.className}>{children}</body>
  </html>
 );
}
