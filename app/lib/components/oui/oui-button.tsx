import {
  composeRenderProps,
  Button as RacButton,
  type ButtonProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
// import { focusRing } from './utils'

// https://github.com/irsyadadl/justd/blob/main/components/ui/primitive.tsx
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/compose.ts
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/styles.ts
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/classes.ts

// shadcn button base: inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
// ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:pointer-events-none disabled:opacity-50

// shadcn switch: peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent
// transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
// disabled:cursor-not-allowed disabled:opacity-50
// data-[state=checked]:bg-primary data-[state=unchecked]:bg-input

// ring-offset-background discrepency between shadcn button and switch.
// shadcn input has ring-offset-background

export const focusRing = tv({
    base: 'ring-offset-background transition-colors',
    variants: {
      isFocusVisible: {
        true: 'outline-none ring-2 ring-ring ring-offset-2',
      },
    },
  })
  
  export function composeTailwindRenderProps<T>(
    className: string | ((v: T) => string) | undefined,
    tw: string
  ): string | ((v: T) => string) {
    return composeRenderProps(className, (className) => twMerge(tw, className))
  }

// https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/Button.tsx
// https://github.com/mehdibha/dotUI/blob/main/src/lib/components/core/default/button.tsx
// https://github.com/irsyadadl/justd/blob/main/components/ui/button.tsx

// https://github.com/nextui-org/tailwind-variants/issues/209 : compoundVariants does not recognize falsy boolean variant
// https://github.com/nextui-org/tailwind-variants/pull/210 : fix: treat undefined value for compoundVariants as false

export interface OuiButtonProps extends ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const ouiButton = tv({
  extend: focusRing,
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
    isDisabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      isHovered: true,
      class: 'bg-primary/90',
    },
    {
      variant: 'destructive',
      isHovered: true,
      class: 'bg-destructive/90',
    },
    {
      variant: ['outline', 'ghost'],
      isHovered: true,
      class: 'bg-accent text-accent-foreground',
    },
    {
      variant: 'secondary',
      isHovered: true,
      class: 'bg-secondary/80',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export function OuiButton(props: OuiButtonProps) {
  return (
    <RacButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        ouiButton({
          ...renderProps,
          variant: props.variant,
          size: props.size,
          className,
        })
      )}
    />
  )
}
