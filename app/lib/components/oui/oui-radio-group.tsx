import type { RadioGroupProps, ValidationResult } from 'react-aria-components'
import { RadioGroup } from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'
import { OuiDescription, OuiFieldError, OuiLabel } from './oui-field'

export function OuiRadioGroup(props: RadioGroupProps) {
  return (
    <RadioGroup
      {...props}
      className={composeTailwindRenderProps(props.className, 'grid gap-2')}
    />
  )
}
OuiRadioGroup.displayName = 'OuiRadioGroup'

export interface OuiRadieGroupExProps extends RadioGroupProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function OuiRadioGroupEx({
  label,
  description,
  errorMessage,
  children,
  ...props
}: OuiRadieGroupExProps) {
  return (
    <OuiRadioGroup {...props}>
      {label && <OuiLabel>{label}</OuiLabel>}
      {children}
      {description && <OuiDescription>{description}</OuiDescription>}
      <OuiFieldError>{errorMessage}</OuiFieldError>
    </OuiRadioGroup>
  )
}
OuiRadioGroupEx.displayName = 'OuiRadioGroupEx'
