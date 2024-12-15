import type { FormProps, LabelProps, TextProps } from 'react-aria-components'
import { Form, Label, Text } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

// shadcn: w-2/3 space-y-6 (https://ui.shadcn.com/docs/components/form: Usage step 4: new york style )
export function OuiForm(props: FormProps) {
  return <Form {...props} className={twMerge('space-y-6', props.className)} />
}
OuiForm.displayName = 'OuiForm'
