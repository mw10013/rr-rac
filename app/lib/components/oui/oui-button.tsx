import type { ButtonProps } from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { Button, composeRenderProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { focusRing } from './oui-base'

// https://github.com/jolbol1/jolly-ui/blob/main/src/registry/new-york/ui/button.tsx
// https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/Button.tsx
// https://github.com/mehdibha/dotUI/blob/main/src/lib/components/core/default/button.tsx
// https://github.com/irsyadadl/justd/blob/main/components/ui/button.tsx

// https://github.com/nextui-org/tailwind-variants/issues/209 : compoundVariants does not recognize falsy boolean variant
// https://github.com/nextui-org/tailwind-variants/pull/210 : fix: treat undefined value for compoundVariants as false

export const ouiButton = tv({
  extend: focusRing,
  // shadcn: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  // focus-visible:* is in focusRing
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    variant: {
      default:
        'bg-primary text-primary-foreground shadow data-[hovered]:bg-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground shadow-sm data-[hovered]:bg-destructive/90',
      outline:
        'border border-input bg-background shadow-sm data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
      secondary:
        'bg-secondary text-secondary-foreground shadow-sm data-[hovered]:bg-secondary/80',
      ghost: 'data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
      link: 'text-primary underline-offset-4 data-[hovered]:underline',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface OuiButtonProps
  extends ButtonProps,
    VariantProps<typeof ouiButton> {}

export function OuiButton(props: OuiButtonProps) {
  return (
    <Button
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        ouiButton({
          ...renderProps,
          className,
        })
      )}
    />
  )
}
OuiButton.displayName = 'OuiButton'
