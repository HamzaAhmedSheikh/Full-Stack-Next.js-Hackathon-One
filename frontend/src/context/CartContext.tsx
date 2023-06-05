"use client";
import { useReducer, createContext, useContext, useMemo, useState } from "react";
import { PortableTextBlock, Image as SanityImage } from "sanity";
import { CartReducer } from '@/store/reducer'
import toast from "react-hot-toast";
interface IProducts {
  slug: string;
  name: string;
  image: SanityImage;
  details: PortableTextBlock;
  care: string;
  price: number;
  _id: string;
  tags: string;
}

interface cartItem {
  product: IProducts;
  quantity: number;
}

interface IState {
  cart: cartItem[];
}

const intialState: IState = {
  cart: [],
};

interface IContext {
  state: IState;
  dispatch: React.Dispatch<any>;
}
const CartContext = createContext<IContext>({
  state: intialState,
  dispatch: () => null,
});


// context provider
const Provider = ({ children }: any) => {
 const [state, dispatch] = useReducer(CartReducer, intialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, Provider };
