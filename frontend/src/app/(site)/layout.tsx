import Navbar from '../../components/Navbar'
import '../globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer';
import FooterTwo from '@/components/FooterTwo';

import Context from '@/components/Context';

export default function RootLayout({children} : { children: React.ReactNode,  }) {  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>
         <Navbar />         
         {children}        
         <FooterTwo />  
        </Context>
      </body>
    </html>
  )
}
