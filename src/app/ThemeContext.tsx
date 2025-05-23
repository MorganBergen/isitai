'use client';

import { createContext } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
}

//  the default value here is light, but will be overridden by the provider
export const ThemeContext =  createContext<ThemeContextType>({ theme: 'light' });

