/**
 * @file    layout.tsx
 * @brief   Root layout for the application.
 * @author  morgan bergen
 * @returns JSX.Element
 */


'use client';  //  render this layout on the client side
// import { useEffect} from 'react';  //  useEffect is a react hook that allows you to perform side effects in function components
// import { useState } from 'react';  //  useState is a react hook that allows you to add state to function components
import { Analytics } from "@vercel/analytics/next";  //  analytics import from vercel view on dashboard at vercel.com


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: '#FFFFFF' }}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

















// FFFFFF
// F5F5F5
// EBEBEB
// E0E0E0
// D6D6D6
// CCCCCC
// C2C2C2
// B8B8B8
// ADADAD
// A3A3A3
// 999999
// 8F8F8F
// 858585
// 7A7A7A
// 707070
// 666666
// 5C5C5C
// 525252
// 474747
// 3D3D3D
// 333333
// 292929
// 1F1F1F
// 141414
// 0A0A0A