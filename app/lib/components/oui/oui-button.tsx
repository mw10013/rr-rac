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
  // base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground shadow',
      destructive: 'bg-destructive text-destructive-foreground shadow-sm',
      outline: 'border border-input bg-background shadow-sm',
      secondary: 'bg-secondary text-secondary-foreground shadow-sm',
      ghost: '',
      link: 'text-primary underline-offset-4',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
    isDisabled: {
      true: 'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      isHovered: true,
      class: 'data-[hovered]:bg-primary/90',
    },
    {
      variant: 'destructive',
      isHovered: true,
      class: 'data-[hovered]:bg-destructive/90',
    },
    {
      variant: ['outline', 'ghost'],
      isHovered: true,
      class: 'data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
    },
    {
      variant: 'secondary',
      isHovered: true,
      class: 'bg-secondary/80 data-[hovered]:bg-secondary/80',
    },
    {
      variant: 'link',
      isHovered: true,
      class: 'data-[hovered]:underline',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface OuiButtonProps
  extends ButtonProps,
    VariantProps<typeof ouiButton> {}

export function OuiButton({
  className,
  variant,
  size,
  ...props
}: OuiButtonProps) {
  return (
    <Button
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        ouiButton({
          ...renderProps,
          variant,
          size,
          className,
        })
      )}
    />
  )
}
OuiButton.displayName = 'OuiButton'
