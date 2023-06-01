import Navbar from '../../components/Navbar'
import '../globals.css'
import { Inter } from 'next/font/google'
import { StateContext } from '@/context/StateContext';
import { ShoppingCartContext } from '@/context/ShoppingCartContext';
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShoppingCartContext> 
         <Navbar />
         <Toaster />
         {children}          
        </ShoppingCartContext>       
      </body>
    </html>
  )
}
