import Navbar from '../../components/Navbar'
import '../globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer';
import FooterTwo from '@/components/FooterTwo';
import toast, { Toaster } from 'react-hot-toast';

import Context from '@/components/Context';
import Navbar2 from '@/components/Navbar2';

export default function RootLayout({children} : { children: React.ReactNode,  }) {  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>
         {/* <Navbar />      */}
         <Navbar2 />    
          <main className="max-w-screen-xl mx-auto"> {children} </main>
         <Toaster />   
         <FooterTwo />  
        </Context>
      </body>
    </html>
  )
}
