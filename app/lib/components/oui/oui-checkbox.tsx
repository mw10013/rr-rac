import type { ReactNode } from 'react'
import type {
  CheckboxGroupProps,
  CheckboxProps,
  ValidationResult,
} from 'react-aria-components'
import { Check, Minus } from 'lucide-react'
import { Checkbox, CheckboxGroup } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import {
  OuiDescription,
  OuiFieldError,
  OuiLabel,
  ouiLabel,
} from '././oui-field'
import { composeTailwindRenderProps, focusRing } from './oui-base'

export interface OuiCheckboxGroupProps
  extends Omit<CheckboxGroupProps, 'children'> {
  label?: string
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function OuiCheckboxGroup({
  label,
  children,
  description,
  errorMessage,
  ...props
}: OuiCheckboxGroupProps) {
  return (
    <CheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-2'
      )}>
      <OuiLabel>{label}</OuiLabel>
      {children}
      {description && <OuiDescription>{description}</OuiDescription>}
      <OuiFieldError>{errorMessage}</OuiFieldError>
    </CheckboxGroup>
  )
}

// shadcn: "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
export const ouiCheckboxBox = tv({
  extend: focusRing,
  base: 'size-4 shrink-0 rounded-sm border border-primary shadow flex items-center justify-center',
  variants: {
    // isInvalid: {
    //   true: '[--color:theme(colors.red.700)] group-pressed:[--color:theme(colors.red.800)] dark:[--color:theme(colors.red.600)] dark:group-pressed:[--color:theme(colors.red.700)] forced-colors:![--color:Mark]',
    // },
    isSelected: {
      true: 'group-data-[selected]:bg-primary group-data-[selected]:text-primary-foreground',
    },
    isDisabled: {
      // shadcn uses disabled:opacity-50. Use opacity-[0.714] since parent (ouiLabel) uses opacity-70
      true: 'group-data-[disabled]:opacity-[0.714]',
    },
  },
})

export const ouiCheckboxIcon = 'size-4'

// Pattern for Reusable Button Wrapper: https://github.com/adobe/react-spectrum/discussions/7511
export interface OuiCheckboxProps extends Omit<CheckboxProps, 'children'> {
  /** The label for the element. */
  children?: ReactNode
}

// rac structures a checkbox with <label>
// shadcn structures a checkbox with <button> and its label is outside of the checkbox (button).
// spectrum2: https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/s2/src/Checkbox.tsx
export function OuiCheckbox(props: OuiCheckboxProps) {
  return (
    <Checkbox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        `${ouiLabel} flex items-center gap-2`
      )}>
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            data-focus-visible={renderProps.isFocusVisible}
            className={ouiCheckboxBox({
              isSelected: isSelected || isIndeterminate,
              ...renderProps,
            })}>
            {isIndeterminate ? (
              <Minus aria-hidden className={ouiCheckboxIcon} />
            ) : isSelected ? (
              <Check aria-hidden className={ouiCheckboxIcon} />
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </Checkbox>
  )
}
