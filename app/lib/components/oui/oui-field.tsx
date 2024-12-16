import type {
  FieldErrorProps,
  FieldErrorRenderProps,
  GroupProps,
  InputProps,
  LabelProps,
  TextProps,
  ValidationResult,
} from 'react-aria-components'
import { useContext } from 'react'
import {
  composeRenderProps,
  FieldError,
  FieldErrorContext,
  Group,
  Input,
  Label,
  Text,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps, focusRing } from './oui-base'

// shadcn: text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
// group helps compose with rac components that structure with a <label>. Eg. checkbox and switch.
// TODO: ouiLabel need group-data-[disabled] or peer-data-[disabled]?
export const ouiLabel =
  'group text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 group-data-[invalid]:text-destructive'

export function OuiLabel(props: LabelProps) {
  return <Label {...props} className={twMerge(ouiLabel, props.className)} />
}

// shadcn FormDescription: text-[0.8rem] text-muted-foreground
export function OuiDescription(props: TextProps) {
  return (
    <Text
      elementType="p"
      slot="description"
      {...props}
      className={twMerge(
        'text-[0.8rem] text-muted-foreground',
        props.className
      )}
    />
  )
}
OuiDescription.displayName = 'OuiDescription'

// shadcn FormMessage: text-[0.8rem] font-medium text-destructive
export function OuiFieldError({ className, ...props }: FieldErrorProps) {
  // FieldError seems to structure with a <span> and does not have elementType like Text.
  // Wrap with <p> to get closer to shadcn.
  // Guard with validation check to prevent empty <p>'s.
  // Reference: https://github.com/adobe/react-spectrum/issues/7525
  const validation = useContext(FieldErrorContext)
  if (!validation?.isInvalid) {
    return null
  }
  return (
    <p>
      <FieldError
        {...props}
        className={composeTailwindRenderProps(
          className,
          'text-[0.8rem] font-medium text-destructive'
        )}
      />
    </p>
  )
}
OuiFieldError.displayName = 'OuiFieldError'

/*
export function OuiFieldError({className, ...props}: FieldErrorProps) {
  return (
      <FieldError
        elementType="p"
        {...props}
        className={composeTailwindRenderProps(
          className,
          'text-[0.8rem] font-medium text-destructive'
        )}
      />
  )
}
*/

// shadcn input: flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
// file:border-0 file:bg-transparent file:text-sm file:font-medium
// placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:cursor-not-allowed disabled:opacity-50
export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false:
        'border-gray-300 dark:border-zinc-500 forced-colors:border-[ButtonBorder]',
      true: 'border-gray-600 dark:border-zinc-300 forced-colors:border-[Highlight]',
    },
    isInvalid: {
      true: 'border-red-600 dark:border-red-600 forced-colors:border-[Mark]',
    },
    isDisabled: {
      true: 'border-gray-200 dark:border-zinc-700 forced-colors:border-[GrayText]',
    },
  },
})

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: 'group flex h-9 items-center overflow-hidden rounded-lg border-2 bg-white dark:bg-zinc-900 forced-colors:bg-[Field]',
  variants: fieldBorderStyles.variants,
})

export function OuiFieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className })
      )}
    />
  )
}

// shadcn input: flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
// TODO: ouiInput: handle file: styles
export const ouiInput = tv({
  extend: focusRing,
  base: 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground md:text-sm',
  variants: {
    isDisabled: {
      true: 'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
    },
  },
})

export function OuiInput({ className, ...props }: InputProps) {
  return (
    <Input
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        ouiInput({
          ...renderProps,
          className,
        })
      )}
    />
  )
}
OuiInput.displayName = 'OuiInput'
