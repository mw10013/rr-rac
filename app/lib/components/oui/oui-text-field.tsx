import type { TextFieldProps, ValidationResult } from 'react-aria-components'
import { TextField } from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'
import { OuiDescription, OuiFieldError, OuiInput, OuiLabel } from './oui-field'

export function OuiTextField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      className={composeTailwindRenderProps(props.className, 'group space-y-2')}
    />
  )
}
OuiTextField.displayName = 'OuiTextField'

export interface OuiTextFieldExProps extends TextFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
}

export function OuiTextFieldEx({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: OuiTextFieldExProps) {
  return (
    <OuiTextField {...props}>
      {label && <OuiLabel>{label}</OuiLabel>}
      <OuiInput placeholder={placeholder} />
      {description && <OuiDescription>{description}</OuiDescription>}
      <OuiFieldError>{errorMessage}</OuiFieldError>
    </OuiTextField>
  )
}
OuiTextFieldEx.displayName = 'OuiTextFieldEx'
