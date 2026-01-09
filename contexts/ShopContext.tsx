'use client';

import { products } from '@/data/products';
import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
  ReactNode,
} from 'react';

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'jeans' | 't-shirts';
  color: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

interface StoreState {
  products: Product[];
  cart: {
    items: CartItem[];
    total: number;
  };
  wishlist: Product[];
  filters: {
    category: 'all' | 'jeans' | 't-shirts';
    searchQuery: string;
  };
}

/* -------------------------------------------------------------------------- */
/*                           CONTEXT TYPE (YOUR API)                           */
/* -------------------------------------------------------------------------- */

interface StoreContextType {
  state: StoreState;

  // Cart actions
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, selectedSize: string) => void;
  updateQuantity: (id: string, selectedSize: string, quantity: number) => void;
  clearCart: () => void;

  // Wishlist actions
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;

  // Filter actions
  setCategoryFilter: (category: 'all' | 'jeans' | 't-shirts') => void;
  setSearchQuery: (query: string) => void;

  // Selectors
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: 'jeans' | 't-shirts') => Product[];
  getFeaturedProducts: () => Product[];
  getFilteredProducts: () => Product[];

  cartItemCount: number;
  wishlistCount: number;
}

/* -------------------------------------------------------------------------- */
/*                              INITIAL DATA                                  */
/* -------------------------------------------------------------------------- */

const initialProducts: Product[] = products;

/* -------------------------------------------------------------------------- */
/*                              INITIAL STATE                                 */
/* -------------------------------------------------------------------------- */

const initialState: StoreState = {
  products: initialProducts,
  cart: {
    items: [],
    total: 0,
  },
  wishlist: [],
  filters: {
    category: 'all',
    searchQuery: '',
  },
};

/* -------------------------------------------------------------------------- */
/*                          LOCAL STORAGE HELPERS                              */
/* -------------------------------------------------------------------------- */

const CART_KEY = 'shop-cart';

const loadCart = () => {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || 'null');
  } catch {
    return null;
  }
};

const saveCart = (cart: StoreState['cart']) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
};

/* -------------------------------------------------------------------------- */
/*                               ACTION TYPES                                 */
/* -------------------------------------------------------------------------- */

type Action =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | {
      type: 'REMOVE_FROM_CART';
      payload: { id: string; selectedSize: string };
    }
  | {
      type: 'UPDATE_QUANTITY';
      payload: { id: string; selectedSize: string; quantity: number };
    }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'SET_CATEGORY_FILTER'; payload: 'all' | 'jeans' | 't-shirts' }
  | { type: 'SET_SEARCH_QUERY'; payload: string };

/* -------------------------------------------------------------------------- */
/*                                 HELPERS                                    */
/* -------------------------------------------------------------------------- */

const calculateTotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

/* -------------------------------------------------------------------------- */
/*                                 REDUCER                                    */
/* -------------------------------------------------------------------------- */

const reducer = (state: StoreState, action: Action): StoreState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.items.find(
        (i) =>
          i.id === action.payload.id &&
          i.selectedSize === action.payload.selectedSize
      );

      const items = existing
        ? state.cart.items.map((i) =>
            i.id === existing.id && i.selectedSize === existing.selectedSize
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          )
        : [...state.cart.items, action.payload];

      return {
        ...state,
        cart: { items, total: calculateTotal(items) },
      };
    }

    case 'REMOVE_FROM_CART': {
      const items = state.cart.items.filter(
        (i) =>
          !(
            i.id === action.payload.id &&
            i.selectedSize === action.payload.selectedSize
          )
      );
      return { ...state, cart: { items, total: calculateTotal(items) } };
    }

    case 'UPDATE_QUANTITY': {
      const items = state.cart.items.map((i) =>
        i.id === action.payload.id &&
        i.selectedSize === action.payload.selectedSize
          ? { ...i, quantity: action.payload.quantity }
          : i
      );
      return { ...state, cart: { items, total: calculateTotal(items) } };
    }

    case 'CLEAR_CART':
      return { ...state, cart: { items: [], total: 0 } };

    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter((p) => p.id !== action.payload),
      };

    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };

    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        filters: { ...state.filters, searchQuery: action.payload },
      };

    default:
      return state;
  }
};

/* -------------------------------------------------------------------------- */
/*                              INITIALIZER                                   */
/* -------------------------------------------------------------------------- */

const initializer = (state: StoreState): StoreState => {
  const cart = loadCart();
  return cart ? { ...state, cart } : state;
};

/* -------------------------------------------------------------------------- */
/*                                  CONTEXT                                   */
/* -------------------------------------------------------------------------- */

const StoreContext = createContext<StoreContextType | null>(null);

/* -------------------------------------------------------------------------- */
/*                                  PROVIDER                                  */
/* -------------------------------------------------------------------------- */

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    saveCart(state.cart);
  }, [state.cart]);

  /* ------------------------------- Actions -------------------------------- */

  const addToCart = (item: CartItem) =>
    dispatch({ type: 'ADD_TO_CART', payload: item });

  const removeFromCart = (id: string, selectedSize: string) =>
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, selectedSize } });

  const updateQuantity = (id: string, selectedSize: string, quantity: number) =>
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, selectedSize, quantity },
    });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const addToWishlist = (product: Product) =>
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });

  const removeFromWishlist = (id: string) =>
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });

  /* ------------------------------- Selectors ------------------------------ */

  const isInWishlist = (id: string) => state.wishlist.some((p) => p.id === id);

  const getProductById = (id: string) =>
    state.products.find((p) => p.id === id);

  const getProductsByCategory = (category: 'jeans' | 't-shirts') =>
    state.products.filter((p) => p.category === category);

  const getFeaturedProducts = () => state.products.slice(0, 4);

  const getFilteredProducts = () =>
    state.products.filter((p) => {
      const categoryMatch =
        state.filters.category === 'all' ||
        p.category === state.filters.category;

      const searchMatch = p.name
        .toLowerCase()
        .includes(state.filters.searchQuery.toLowerCase());

      return categoryMatch && searchMatch;
    });

  const cartItemCount = useMemo(
    () => state.cart.items.reduce((s, i) => s + i.quantity, 0),
    [state.cart.items]
  );

  const wishlistCount = state.wishlist.length;

  const value: StoreContextType = {
    state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    setCategoryFilter: (c) =>
      dispatch({ type: 'SET_CATEGORY_FILTER', payload: c }),
    setSearchQuery: (q) => dispatch({ type: 'SET_SEARCH_QUERY', payload: q }),
    getProductById,
    getProductsByCategory,
    getFeaturedProducts,
    getFilteredProducts,
    cartItemCount,
    wishlistCount,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   HOOK                                     */
/* -------------------------------------------------------------------------- */

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
};