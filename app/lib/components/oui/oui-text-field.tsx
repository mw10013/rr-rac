import type { TextFieldProps, ValidationResult } from 'react-aria-components'
import { TextField } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps, focusRing } from './oui-base'
import { OuiDescription, OuiFieldError, OuiInput, OuiLabel } from './oui-field'

// shadcn input: flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
// file:border-0 file:bg-transparent file:text-sm file:font-medium
// placeholder:text-muted-foreground
// focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:cursor-not-allowed disabled:opacity-50
const inputStyles = tv({
  extend: focusRing,
  base: '', // Input in Field.tsx has the base styles
  variants: {
    isDisabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
})

export interface OuiTextFieldProps extends TextFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
}

export function OuiTextField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: OuiTextFieldProps) {
  return (
    <TextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-1'
      )}>
      {label && <OuiLabel>{label}</OuiLabel>}
      <OuiInput className={inputStyles} placeholder={placeholder} />
      {description && <OuiDescription>{description}</OuiDescription>}
      <OuiFieldError>{errorMessage}</OuiFieldError>
    </TextField>
  )
}
