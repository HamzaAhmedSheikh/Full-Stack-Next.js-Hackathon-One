// "use client";
// import React, { useState, createContext, useContext, Dispatch, SetStateAction, useEffect, ReactNode } from "react";
// import { toast } from 'react-hot-toast';
// import { useLocalStorage } from "../hooks/useLocalStorage";
// // interface Product {
// //   slug: string;
// //   name: string;
// //   image: string;
// //   details: any[],
// //   care: any[],
// //   price: number;
// //   _id: string;
// //   tags: string;
// // }


// // interface cartItem {
// //  product: Product;
// //  quantity: number;
// // }

// // interface CartContextValue {
// //   cartItems: cartItem[];
// //   addToCart: (product: Product, quantity: number) => void;
// //   removeFromCart: (productId: number) => void;
// //   // updateCartItemQuantity: (productId: number, quantity: number) => void;
// //   // cartTotal: number;
// //   cartCount: number;
// // }

// type ShoppingCartProviderProps = {
//   children: ReactNode
// }

// type CartItem = {
//   _id: string;
//   slug: string;
//   name: string;
//   image: string;
//   details: any[],
//   care: any[],
//   price: number;  
//   tags: string;
//   quantity: number
// }

// type ShoppingCartContext = {
//   // openCart: () => void
//   // closeCart: () => void
//   getItemQuantity: (_id: string) => number
//   increaseCartQuantity: (_id: string) => void
//   decreaseCartQuantity: (_id: string) => void
//   removeFromCart: (_id: string) => void
//   cartQuantity: number
//   cartItems: CartItem[]
// }

// const ShoppingCartContext = createContext({} as ShoppingCartContext)

// export function useShoppingCart() {
//   return useContext(ShoppingCartContext)
// }
// export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
//   const [isOpen, setIsOpen] = useState(false)
//   const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
//     "shopping-cart",
//     []
//   )

//   const cartQuantity = cartItems.reduce(
//     (quantity, item) => item.quantity + quantity,
//     0
//   )

//   // const openCart = () => setIsOpen(true)
//   // const closeCart = () => setIsOpen(false)
//   function getItemQuantity(_id: string) {
//     return cartItems.find(item => item._id === _id)?.quantity || 0
//   }
//   function increaseCartQuantity(_id: string) {
//     setCartItems((currItems: any) => {
//       if (currItems.find((item: any) => item._id === _id) == null) {
//         return [...currItems, { _id, quantity: 1 }]
//       } else {
//         return currItems.map((item: any) => {
//           if (item._id === _id) {
//             return { ...item, quantity: item.quantity + 1 }
//           } else {
//             return item
//           }
//         })
//       }
//     })
//   }
//   function decreaseCartQuantity(_id: string) {
//     setCartItems(currItems => {
//       if (currItems.find(item => item._id === _id)?.quantity === 1) {
//         return currItems.filter(item => item._id !== _id)
//       } else {
//         return currItems.map(item => {
//           if (item._id === _id) {
//             return { ...item, quantity: item.quantity - 1 }
//           } else {
//             return item
//           }
//         })
//       }
//     })
//   }
//   function removeFromCart(_id: string) {
//     setCartItems(currItems => {
//       return currItems.filter(item => item._id !== _id)
//     })
//   }

//   return (
//     <ShoppingCartContext.Provider
//       value={{
//         getItemQuantity,
//         increaseCartQuantity,
//         decreaseCartQuantity,
//         removeFromCart,
//         // openCart,
//         // closeCart,
//         cartItems,
//         cartQuantity,
//       }}
//     >
//       {children}      
//     </ShoppingCartContext.Provider>
//   )
// }