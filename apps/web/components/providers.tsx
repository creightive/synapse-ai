'use client'

import { Toaster, resolveValue } from 'react-hot-toast'
import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <Toaster
        containerStyle={{
          bottom: 40,
          left: 20,
          right: 20,
        }}
        position="bottom-center"
        gutter={10}
        toastOptions={{
          duration: 3000,
        }}
      >
        {t => (
          <div
            style={{
              opacity: t.visible ? 1 : 0,
              transform: t.visible ? 'translatey(0)' : 'translatey(0.75rem)',
              transition: 'all .2s',
            }}
          >
            {resolveValue(t.message, t)}
          </div>
        )}
      </Toaster>
    </NextThemesProvider>
  )
}
