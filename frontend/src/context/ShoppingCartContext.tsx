"use client";
import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { toast } from 'react-hot-toast';

interface Product {
  slug: string;
  name: string;
  image: string;
  details: any[],
  care: any[],
  price: number;
  _id: string;
}


interface cartItem {
 product: Product;
 quantity: number;
}

interface CartContextValue {
  cartItems: cartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  cartTotal: 0,
  cartCount: 0,
});

// type ShoppingCartContext = {
//   addToCart: (product: any) => void;
//   onAdd: (product: any, quantity: any) => void;  
//   count: number;
//   increment: () => void;
//   decQty: () => void;
//   totalQty: number; 
//   totalPrice: number;  
//   setTotalPrice: Dispatch<SetStateAction<number>>;
//   cartItems: cartItem[];
//   cartTotal: number;
//   cartCount: number;
//   removeFromCart: (productId: any) => void;
//   updateCartItemQuantity: (productId: any, quantity: number) => void;
// };

// const Context = createContext({} as ShoppingCartContext);

interface Props {
  children: React.ReactNode;
}


export const ShoppingCartContext = ({ children }: Props) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQty, setTotalQty] = useState<number>(0); 
  const [cartItems, setCartItems] = useState<any[]>([]); 

  const addToCart = (product: any) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product._id === product._id
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }

    console.log("cartItem ==> ", cartItems)

    toast.success(`${count} ${product.name} added to the cart.`);
  };

  const removeFromCart = (productId: any) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product._id !== productId
    );
    setCartItems(updatedCartItems);
  };

  const updateCartItemQuantity = (productId: any, quantity: number) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product._id === productId
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
 
  const onAdd = (product: any, quantity: any) => {
    console.log("product ==> ", product, "quantity", quantity); 

    const checkProductInCart = cartItems.find(
      (item: any) => item._id === product._id
    );


    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQty((prevTotalQty) => prevTotalQty + quantity);

    if(checkProductInCart) {
      const updatedCartItems: any = cartItems.map((cartProduct: any) => {    
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })
      setCartItems(updatedCartItems);  
    } else {
      product.quantity = quantity;      
      setCartItems([...cartItems, { ...product }]);
    }

    console.log("cartItem ==> ", cartItems)

    toast.success(`${count} ${product.name} added to the cart.`);
  }
 

  const decQty = () => {
    setCount((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  }; 
  
  
  return (
    <CartContext.Provider
       value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useShoppingCartContext = () => useContext(CartContext);