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
    setOpen(false);
    router.push('/products');
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="
          sm:max-w-md
          rounded-xl
          bg-card
          text-card-foreground
          shadow-strong
          border
        "
      >
        <DialogHeader className="text-center space-y-3">
          {/* Success Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent shadow-accent">
            <CheckCircle2 className="h-7 w-7 text-accent-foreground" />
          </div>

          {/* Title */}
          <DialogTitle className="font-display text-2xl">{title}</DialogTitle>

          {/* Description */}
          {description && (
            <DialogDescription className="text-muted-foreground max-w-sm mx-auto">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <DialogFooter className="mt-6">
          <Button
            onClick={handleContinueShopping}
            size="lg"
            className="
              w-full
              bg-gradient-hero
              text-primary-foreground
              shadow-medium
              hover:opacity-90
              transition
            "
          >
            Continue Shopping
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}