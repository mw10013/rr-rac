'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { OuiButton } from '~/lib/components/oui/oui-button'
import { OuiForm } from '~/lib/components/oui/oui-form'
import { OuiRadio, OuiRadioGroupEx } from '~/lib/components/oui/oui-radio-group'
import { OuiTextFieldEx } from '~/lib/components/oui/oui-text-field'
import { Button } from '~/lib/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/lib/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/lib/components/ui/select'
import { toast } from '~/lib/hooks/use-toast'

function OuiInputForm() {
  return (
    <OuiForm className="w-2/3 border p-6">
      <OuiTextFieldEx
        name="username"
        type="text"
        label="Username"
        description="This is your public display name."
        placeholder="shadcn"
        isRequired
      />
      <OuiTextFieldEx name="email" type="email" label="Email" isRequired />
      <OuiTextFieldEx
        name="reserved"
        type="text"
        label="Reserved"
        isDisabled
        placeholder="This field is reserved."
      />
      <OuiRadioGroupEx label="Notify me about..." name="type">
        <OuiRadio value="all">All new messages</OuiRadio>
        <OuiRadio value="mentions">Direct messages and mentions</OuiRadio>
        <OuiRadio value="none">Nothing</OuiRadio>
      </OuiRadioGroupEx>
      <OuiButton type="submit">Submit</OuiButton>
    </OuiForm>
  )
}

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
})

export function ShadcnExampleForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{' '}
                {/* <Link href="/examples/forms">email settings</Link>. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      {/* <OuiInputForm /> */}
      <ShadcnExampleForm />
    </div>
  )
}
