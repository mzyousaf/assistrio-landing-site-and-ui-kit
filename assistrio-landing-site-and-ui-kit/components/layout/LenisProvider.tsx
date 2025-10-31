'use client';

import { useLenis } from '@/lib/useLenis';
import { ReactNode } from 'react';

interface LenisProviderProps {
    children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
    // Initialize Lenis for smooth scrolling
    useLenis();

    return <>{children}</>;
}

