import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@repo/ui'

const meta = {
  title: 'Elements/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>
export default meta

export const Default: Story = {
  args: {},
}
