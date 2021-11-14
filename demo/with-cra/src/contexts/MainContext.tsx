import {Dispatch, createContext, useContext, useReducer} from 'react';

import {ProductItem} from '../../types/common';

interface User {
  id: string;
  name: string;
}

type MainAction =
  | {type: 'SET_USER'; user: User}
  | {type: 'ADD_CART_ITEM'; cartItem: ProductItem}
  | {type: 'DELETE_CART_ITEM'; cartItem: ProductItem}
  | {type: 'ADD_PURCHASE_ITEMS'; purchaseItems: ProductItem[]};

type MainDispatch = Dispatch<MainAction>;

export interface MainState {
  user: User;
  setUser(user: User): void;
  cartItems: ProductItem[];
  setCartItem(cartItem: ProductItem[]): void;
  purchaseItems: ProductItem[];
  setPurchaseItems(purchaseItems: ProductItem[]): void;
}

export const initialState: MainState = {
  user: {id: '', name: ''},
  setUser: () => null,
  cartItems: [],
  setCartItem: () => null,
  purchaseItems: [],
  setPurchaseItems: () => null,
};

const reducer = (state: MainState, action: MainAction): MainState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cartItems: [...state.cartItems, action.cartItem],
      };
    case 'DELETE_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.cartItem.id),
      };
    case 'ADD_PURCHASE_ITEMS':
      return {
        ...state,
        purchaseItems: action.purchaseItems,
      };
    default:
      throw new Error('Unhandled action');
  }
};

const MainStateContext = createContext<MainState>(null as any);
const MainDispatchContext = createContext<MainDispatch>(null as any);

const MainProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainStateContext.Provider value={state}>
      <MainDispatchContext.Provider value={dispatch}>{children}</MainDispatchContext.Provider>
    </MainStateContext.Provider>
  );
};

export const useMainState = () => {
  const state = useContext(MainStateContext);

  if (!state) throw new Error('Cannot find MainProvider');
  return state;
};

export const useMainDispatch = () => {
  const dispatch = useContext(MainDispatchContext);

  if (!dispatch) throw new Error('Cannot find MainProvider');
  return dispatch;
};

export default MainProvider;
