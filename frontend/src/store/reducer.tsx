import { PortableTextBlock, Image as SanityImage } from "sanity";

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
  

export function CartReducer(state: IState, action: any) {
    // console.log("state ==> ", state.cart)
    switch (action.type) {
      case "ADD_TO_CART":        
        state.cart = [...state.cart, action.payload];
        return { ...state };
  
      case "REMOVE_FROM_CART":
        let newCart = { ...state.cart };
        delete newCart[action.payload._id];
        return {
          ...state,
          cart: newCart,
        };
      default:
        return state;
    }
  }


