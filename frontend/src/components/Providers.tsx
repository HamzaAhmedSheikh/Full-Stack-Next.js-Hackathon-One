"use client";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from 'react-hot-toast';

interface Props {
  children: React.ReactNode;  
}

export function Providers({ children }: Props) {
 
  return (
    <CartProvider
        cartMode="checkout-session"
        stripe=""
        currency="USD"        
        shouldPersist>
        <Toaster />
      {children}
    </CartProvider>
  );
}