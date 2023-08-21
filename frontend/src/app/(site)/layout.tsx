import '../globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer';
import FooterTwo from '@/components/FooterTwo';
import toast, { Toaster } from 'react-hot-toast';

import Context from '@/components/Context';
import Navbar from '@/components/Navbar';
import Navbar2 from '@/components/Navbar2';

import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({children} : { children: React.ReactNode,  }) {  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Context>
         {/* <Navbar />      */}
           <Navbar />   
           <main className="">
            {children}
           </main>                     
         <Toaster />   
         <FooterTwo />  
        </Context>
        </ClerkProvider>
      </body>
    </html>
  )
}
