import type { ReactNode } from 'react'
import type {
  RadioGroupProps,
  RadioProps,
  ValidationResult,
} from 'react-aria-components'
import { Circle } from 'lucide-react'
import { Radio, RadioGroup } from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'
import { OuiDescription, OuiFieldError, ouiLabel, OuiLabel } from './oui-field'

export function OuiRadioGroup(props: RadioGroupProps) {
  return (
    <RadioGroup
      {...props}
      className={composeTailwindRenderProps(props.className, 'grid gap-2')}
    />
  )
}
OuiRadioGroup.displayName = 'OuiRadioGroup'

export interface OuiRadioGroupExProps
  extends Omit<RadioGroupProps, 'children'> {
  label?: string
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function OuiRadioGroupEx({
  label,
  description,
  errorMessage,
  children,
  ...props
}: OuiRadioGroupExProps) {
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

export interface OuiRadioProps extends Omit<RadioProps, 'children'> {
  children?: ReactNode
}

// shadcn: flex items-center space-x-2
// shadcn: aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50
// TODO: OuiRadio: is focus:outline-none typos and should be focus-visible:outline-none?
export function OuiRadio({ className, children, ...props }: OuiRadioProps) {
  return (
    <Radio
      {...props}
      className={composeTailwindRenderProps(
        className,
        `${ouiLabel} flex items-center space-x-2`
      )}>
      {({ isSelected, isFocusVisible }) => (
        <>
          <div className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50 group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-1 group-data-[focus-visible]:ring-ring">
            {isSelected && <Circle className="h-3.5 w-3.5 fill-primary" />}
          </div>
          {children}
        </>
      )}
    </Radio>
  )
}