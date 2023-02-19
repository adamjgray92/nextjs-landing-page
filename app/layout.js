import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Inter } from '@next/font/google';
import './globals.css';

const inter = Inter({ variable: '--display-font' });

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
