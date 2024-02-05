import type { Decorator } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'

/* snipped for brevity */

export const withTailwindDarkMode = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
})
