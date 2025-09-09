'use client';

import { Toaster } from "@/components/ui/sonner";

export function ToasterProvider() {
  return (
    <Toaster 
      position="top-center" 
      duration={2000}
      closeButton
      toastOptions={{
        style: {
          border: 'none',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      }}
    />
  );
}