import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@repo/ui'

const meta = {
  title: 'Elements/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>

type Story = StoryObj<typeof Icon>
export default meta

export const Default: Story = {
  args: {
    name: 'check',
  },
}
