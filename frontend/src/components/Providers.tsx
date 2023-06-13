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
        stripe="pk_test_51NEAWFAbedfhBaKkXrvOtAOadiZIxa1A2aoeGFc6xaZs2Mxv5eOgkZK5A1Tac7GsV7fQJPvfgktoh6CtsidwqXTu00uEyI9K5q"
        currency="USD"        
        shouldPersist>
        <Toaster />
      {children}
    </CartProvider>
  );
}