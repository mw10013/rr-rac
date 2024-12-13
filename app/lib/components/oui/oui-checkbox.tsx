import type { ReactNode } from 'react'
import type {
  CheckboxGroupProps,
  CheckboxProps,
  ValidationResult,
} from 'react-aria-components'
import { Check, Minus } from 'lucide-react'
import {
  Checkbox,
  CheckboxGroup,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { OuiDescription, OuiFieldError, OuiLabel } from '././oui-field'
import { composeTailwindRenderProps, focusRing } from './oui-base'

export interface OuiCheckboxGroupProps
  extends Omit<CheckboxGroupProps, 'children'> {
  label?: string
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function OuiCheckboxGroup(props: OuiCheckboxGroupProps) {
  return (
    <CheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-2'
      )}>
      <OuiLabel>{props.label}</OuiLabel>
      {props.children}
      {props.description && (
        <OuiDescription>{props.description}</OuiDescription>
      )}
      <OuiFieldError>{props.errorMessage}</OuiFieldError>
    </CheckboxGroup>
  )
}

export const ouiCheckbox = tv({
  base: 'group flex items-center gap-2 text-sm transition',
  variants: {
    isDisabled: {
      false: 'text-gray-800 dark:text-zinc-200',
      true: 'text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]',
    },
  },
})

export const ouiCheckboxBox = tv({
  extend: focusRing,
  base: 'flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition',
  variants: {
    isSelected: {
      false:
        'dark:[--color:colors.zinc-400)] border-[--color] bg-white [--color:theme(colors.gray.400)] group-pressed:[--color:theme(colors.gray.500)] dark:bg-zinc-900 dark:group-pressed:[--color:theme(colors.zinc.300)]',
      true: 'border-[--color] bg-[--color] [--color:theme(colors.gray.700)] group-pressed:[--color:theme(colors.gray.800)] dark:[--color:theme(colors.slate.300)] dark:group-pressed:[--color:theme(colors.slate.200)] forced-colors:![--color:Highlight]',
    },
    isInvalid: {
      true: '[--color:theme(colors.red.700)] group-pressed:[--color:theme(colors.red.800)] dark:[--color:theme(colors.red.600)] dark:group-pressed:[--color:theme(colors.red.700)] forced-colors:![--color:Mark]',
    },
    isDisabled: {
      true: '[--color:theme(colors.gray.200)] dark:[--color:theme(colors.zinc.700)] forced-colors:![--color:GrayText]',
    },
  },
})

const iconStyles =
  'w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]'

// Pattern for Reusable Button Wrapper: https://github.com/adobe/react-spectrum/discussions/7511
// https://github.com/adobe/react-spectrum/blob/326f48154e301edab425c8198c5c3af72422462b/packages/%40react-spectrum/s2/src/Checkbox.tsx#L39
export interface OuiCheckboxProps extends Omit<CheckboxProps, 'children'> {
  /** The label for the element. */
  children?: ReactNode
}

export function OuiCheckbox(props: OuiCheckboxProps) {
  return (
    <Checkbox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        ouiCheckbox({ ...renderProps, className })
      )}>
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            className={ouiCheckboxBox({
              isSelected: isSelected || isIndeterminate,
              ...renderProps,
            })}>
            {isIndeterminate ? (
              <Minus aria-hidden className={iconStyles} />
            ) : isSelected ? (
              <Check aria-hidden className={iconStyles} />
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </Checkbox>
  )
}
