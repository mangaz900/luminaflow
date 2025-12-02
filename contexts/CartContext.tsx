import React, { createContext, useContext, useState, ReactNode } from 'react';
import { trackAddToCart } from '../services/analytics';
import { trackTikTokAddToCart } from '../services/tiktokPixel';
import { trackEvent } from '../services/pixel';

export interface CartItem {
  id: number;
  quantity: number;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
}

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setItems([item]);
    setIsCartOpen(true);
    // Track add to cart event
    const pricePerUnit = item.price / item.quantity;
    trackAddToCart({
      id: item.id,
      name: item.title,
      category: 'Hårvård',
      price: pricePerUnit,
      quantity: item.quantity,
    });

    // Track TikTok AddToCart
    trackTikTokAddToCart({
      id: item.id,
      name: item.title,
      price: pricePerUnit,
      quantity: item.quantity,
    });
    // Track Facebook AddToCart
    trackEvent('AddToCart', {
      content_ids: [item.id],
      content_name: item.title,
      content_type: 'product',
      value: pricePerUnit * item.quantity,
      currency: 'SEK',
    });
  };

  const removeFromCart = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);

    // Track InitiateCheckout
    trackEvent('InitiateCheckout', {
      content_ids: items.map(item => item.id),
      content_type: 'product',
      value: getTotalPrice(),
      currency: 'SEK',
      num_items: getTotalItems(),
    });
  };
  const closeCheckout = () => setIsCheckoutOpen(false);
  const clearCart = () => setItems([]);

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      isCartOpen,
      isCheckoutOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart,
      closeCart,
      openCheckout,
      closeCheckout,
      clearCart,
      getTotalPrice,
      getTotalItems,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

