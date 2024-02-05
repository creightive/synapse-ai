import type { Config } from 'tailwindcss'
import tailwindPreset from '@repo/theme'

export default {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}'],
  presets: [tailwindPreset],
  theme: {
    extend: {},
  },
} satisfies Config
