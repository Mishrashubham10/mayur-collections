'use client';

import { StoreProvider } from '@/contexts/ShopContext';
import { ReactNode } from 'react';

export default function GlobalContext({ children }: { children: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}