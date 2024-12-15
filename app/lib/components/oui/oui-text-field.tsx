import type { TextFieldProps } from 'react-aria-components'
import { TextField } from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'
import { OuiDescription, OuiFieldError, OuiInput, OuiLabel } from './oui-field'

export function OuiTextField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      className={composeTailwindRenderProps(props.className, 'space-y-2')}
    />
  )
}
OuiTextField.displayName = 'OuiTextField'

export interface OuiTextFieldExProps extends TextFieldProps {
  label?: string
  description?: string
  placeholder?: string
}

export function OuiTextFieldEx({
  label,
  description,
  placeholder,
  ...props
}: OuiTextFieldExProps) {
  return (
    <OuiTextField {...props}>
      {({ isInvalid }) => (
        <>
          {label && (
            <OuiLabel className={isInvalid ? 'text-destructive' : ''}>
              {label}
            </OuiLabel>
          )}
          <OuiInput placeholder={placeholder} />
          {description && <OuiDescription>{description}</OuiDescription>}
          <OuiFieldError />
        </>
      )}
    </OuiTextField>
  )
}
OuiTextFieldEx.displayName = 'OuiTextFieldEx'
