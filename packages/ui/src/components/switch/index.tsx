import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '../../lib/utils'

export type SwitchProps = {
  className?: string
  value: string
  setValue: any
}

export const Switch = ({ className, value }: SwitchProps) => (
  <div className={cn('inline-flex shrink-0', className)}>
    <SwitchPrimitive.Root
      value={value}
      className={cn(
        'relative inline-flex w-12 h-6 cursor-pointer rounded-full border-2',
        'border-transparent transition-colors outline-none',
        'data-[state="checked"]:bg-color-2',
        'bg-n-3 dark:bg-n-5',
      )}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none inline-block w-5 h-5 rounded-full bg-n-1',
          ' transition-all dark:bg-n-7',
          'translate-x-0',
          'data-[state="checked"]:translate-x-6 data-[state="checked"]:dark:bg-n-6',
        )}
      />
    </SwitchPrimitive.Root>
  </div>
)
