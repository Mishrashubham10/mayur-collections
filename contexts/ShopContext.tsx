"use client";

import { products } from '@/data/products';
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useMemo,
} from 'react';

// Types
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'jeans' | 't-shirts';
  color: string;
  size?: string;
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
  filters: {
    category: 'all' | 'jeans' | 't-shirts';
    searchQuery: string;
  };
}

// Initial Products Data
const initialProducts: Product[] = products;

const initialState: StoreState = {
  products: initialProducts,
  cart: {
    items: [],
    total: 0,
  },
  filters: {
    category: 'all',
    searchQuery: '',
  },
};

// Action Types
type StoreAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string; selectedSize: string } }
  | {
      type: 'UPDATE_QUANTITY';
      payload: { id: string; selectedSize: string; quantity: number };
    }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CATEGORY_FILTER'; payload: 'all' | 'jeans' | 't-shirts' }
  | { type: 'SET_SEARCH_QUERY'; payload: string };

// Helper function to calculate cart total
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

// Reducer
const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.cart.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
      );

      let newItems: CartItem[];
      if (existingIndex > -1) {
        newItems = state.cart.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.cart.items, action.payload];
      }

      return {
        ...state,
        cart: {
          items: newItems,
          total: calculateTotal(newItems),
        },
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.cart.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize
          )
      );
      return {
        ...state,
        cart: {
          items: newItems,
          total: calculateTotal(newItems),
        },
      };
    }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        const newItems = state.cart.items.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.selectedSize === action.payload.selectedSize
            )
        );
        return {
          ...state,
          cart: {
            items: newItems,
            total: calculateTotal(newItems),
          },
        };
      }

      const newItems = state.cart.items.map((item) =>
        item.id === action.payload.id &&
        item.selectedSize === action.payload.selectedSize
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        cart: {
          items: newItems,
          total: calculateTotal(newItems),
        },
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: { items: [], total: 0 },
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

// Context Types
interface StoreContextType {
  state: StoreState;
  // Cart actions
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, selectedSize: string) => void;
  updateQuantity: (id: string, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  // Filter actions
  setCategoryFilter: (category: 'all' | 'jeans' | 't-shirts') => void;
  setSearchQuery: (query: string) => void;
  // Selectors
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: 'jeans' | 't-shirts') => Product[];
  getFeaturedProducts: () => Product[];
  getFilteredProducts: () => Product[];
  cartItemCount: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Provider Component
export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Cart Actions
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

  // Filter Actions
  const setCategoryFilter = (category: 'all' | 'jeans' | 't-shirts') =>
    dispatch({ type: 'SET_CATEGORY_FILTER', payload: category });

  const setSearchQuery = (query: string) =>
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });

  // Memoized Selectors
  const getProductById = (id: string) =>
    state.products.find((p) => p.id === id);

  const getProductsByCategory = (category: 'jeans' | 't-shirts') =>
    state.products.filter((p) => p.category === category);

  const getFeaturedProducts = () => state.products.slice(0, 4);

  const getFilteredProducts = () => {
    let filtered = state.products;

    if (state.filters.category !== 'all') {
      filtered = filtered.filter((p) => p.category === state.filters.category);
    }

    if (state.filters.searchQuery) {
      const query = state.filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.color.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const cartItemCount = useMemo(
    () => state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.cart.items]
  );

  const contextValue: StoreContextType = {
    state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    setCategoryFilter,
    setSearchQuery,
    getProductById,
    getProductsByCategory,
    getFeaturedProducts,
    getFilteredProducts,
    cartItemCount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

// ========== CUSTOM HOOK =========
export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

// Legacy exports for backward compatibility
export const useCart = () => {
  const store = useStore();
  return {
    state: { items: store.state.cart.items, total: store.state.cart.total },
    addItem: store.addToCart,
    removeItem: (id: string) => {
      const item = store.state.cart.items.find((i) => i.id === id);
      if (item) store.removeFromCart(id, item.selectedSize);
    },
    updateQuantity: (id: string, quantity: number) => {
      const item = store.state.cart.items.find((i) => i.id === id);
      if (item) store.updateQuantity(id, item.selectedSize, quantity);
    },
    clearCart: store.clearCart,
    itemCount: store.cartItemCount,
  };
};

export const CartProvider = StoreProvider;