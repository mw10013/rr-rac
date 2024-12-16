'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { OuiButton } from '~/lib/components/oui/oui-button'
import { OuiForm } from '~/lib/components/oui/oui-form'
import {
  OuiRadio,
  OuiRadioGroupEx,
} from '~/lib/components/oui/oui-radio-group1'
import { Button } from '~/lib/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/lib/components/ui/form'
import { RadioGroup, RadioGroupItem } from '~/lib/components/ui/radio-group'
import { toast } from '~/lib/hooks/use-toast'

function OuiInputForm() {
  return (
    <OuiForm className="w-2/3 border p-6">
      <OuiRadioGroupEx
        label="Notify me about..."
        name="type"
        className="border">
        <OuiRadio value="all">All new messages</OuiRadio>
        <OuiRadio value="mentions">Direct messages and mentions</OuiRadio>
        {/* <OuiRadio value="none">Nothing</OuiRadio> */}
      </OuiRadioGroupEx>
      <OuiButton type="submit">Submit</OuiButton>
    </OuiForm>
  )
}

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email(),
  reserved: z.string().default('Reserved'),
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
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
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3 border">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  {/* <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem> */}
                </RadioGroup>
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
