'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { OuiButton } from '~/lib/components/oui/oui-button'
import { OuiForm } from '~/lib/components/oui/oui-form'
import { OuiTextField } from '~/lib/components/oui/oui-text-field'
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
import { Input } from '~/lib/components/ui/input'
import { toast } from '~/lib/hooks/use-toast'

function OuiInputForm() {
  return (
    <OuiForm className="w-2/3 border p-6">
      <OuiTextField
        name="username"
        type="text"
        label="Username"
        description="This is your public display name."
        placeholder="shadcn"
        isRequired
      />
      <OuiTextField name="email" type="email" label="Email" isRequired />
      <OuiButton type="submit">Submit</OuiButton>
    </OuiForm>
  )
}

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email(),
})

function ShadcnInputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 border p-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
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
      <OuiInputForm />
      <ShadcnInputForm />
    </div>
  )
}
