import type { FormProps, LabelProps, TextProps } from 'react-aria-components'
import { Form, Label, Text } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

// shadcn: w-2/3 space-y-6 (https://ui.shadcn.com/docs/components/form: Usage step 4: new york style )
export function OuiForm(props: FormProps) {
  return <Form {...props} className={(twMerge('space-y-6'), props.className)} />
}
OuiForm.displayName = 'OuiForm'

// shadcn: text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
// group helps compose with rac components that structure with a <label>. Eg. checkbox and switch.
// TODO: ouiLabel need group-data-[disabled] or peer-data-[disabled]?
export const ouiLabel =
  'group text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70'

// TODO: OuiLabel handle form error: shadcn: className={cn(error && "text-destructive", className)}
export function OuiLabel(props: LabelProps) {
  return <Label {...props} className={twMerge(ouiLabel, props.className)} />
}
OuiLabel.displayName = 'OuiLabel'

// shadcn FormDescription: text-[0.8rem] text-muted-foreground
export const ouiDescription = 'text-[0.8rem] text-muted-foreground'

export function OuiDescription(props: TextProps) {
  return (
    <Text
      {...props}
      slot="description"
      className={twMerge('ouiDescription', props.className)}
    />
  )
}
