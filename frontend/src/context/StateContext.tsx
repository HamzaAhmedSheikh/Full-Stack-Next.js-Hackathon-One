"use client";
import {createContext, useContext, useState, useEffect, ReactNode, SetStateAction, Dispatch  } from 'react';
import { toast } from 'react-hot-toast';

type ShoppingCartContext = {
  onAdd: (product: any, quantity: number) => void;  
  toggleCartItemQuantity: (id: number, value: SetStateAction<number>) => void;
  incQty: () => void;
  decQty: () => void;
  qty: number;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>
  onRemove: (product: any) => void;
  totalQty: number;
  cartItems: any[];
  totalPrice: number;  
}

const Context = createContext({} as ShoppingCartContext);

export const StateContext = ({ children }: any) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any[]>([]); 
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQty, setTotalQty] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);

  let foundProduct: any;
  let index: any;

  const onAdd = (product: any, quantity: number) => {
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
    toast.success(`${qty} ${product.name} added to the cart.`);
  }

  const onRemove = (product: any) => {
    foundProduct = cartItems.findIndex((item: any) => item._id === product._id);
    const newCartItems = cartItems.filter((item: any) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQty(prevTotalQty => prevTotalQty - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuantity = (id: any, value: any) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQty(prevTotalQty => prevTotalQty + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQty(prevTotalQty => prevTotalQty - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };


  return (
    <Context.Provider
      value={{ 
        onAdd,
        toggleCartItemQuantity,        
        incQty,
        decQty,
        qty,
        showCart,
        setShowCart,
        totalQty,
        cartItems,
        totalPrice,
        onRemove,              
      }}

      
    >
      {children}
    </Context.Provider>
  )

}

export const useStateContext = () => useContext(Context);