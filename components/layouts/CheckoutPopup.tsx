'use client';

import { Dispatch, SetStateAction } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { useStore } from '@/contexts/ShopContext';

interface CheckoutButtonProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  description?: string;
}

export default function CheckoutPopup({
  open,
  setOpen,
  title,
  description,
}: CheckoutButtonProps) {
  const router = useRouter();
  const { clearCart } = useStore();

  function handleContinueShopping() {
    clearCart();
    // setCartOpen(false);
    setOpen(false);
    router.push('/products');
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-2xl shadow-xl">
        <DialogHeader className="text-center">
          <CheckCircle2 className="size-12 text-green-600 mx-auto mb-3" />
          <DialogTitle className="text-2xl font-bold text-foreground">
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="text-muted-foreground mt-2">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <DialogFooter>
          <Button
            onClick={handleContinueShopping}
            className="gradient-primary text-primary-foreground shadow-md"
          >
            Continue Shopping
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}