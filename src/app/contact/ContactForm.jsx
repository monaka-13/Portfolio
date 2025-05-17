'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z
    .string({
      message: 'input characters',
    })
    .min(2, {
      message: 'at least 2 characters',
    })
    .max(50, {
      message: 'up to 50 characters',
    }),
  question: z.string().min(10, {
    message: 'at least 10 characters',
  }),
})

export function ContactForm() {
  // フォームを定義
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  // 2. submit handlerを定義
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Input your name' {...field} />
              </FormControl>
              <FormDescription>Here is area where input your name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='question'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Textarea placeholder='Feel free to ask me!' {...field} />
              </FormControl>
              <FormDescription>Input your Email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Render to console</Button>
      </form>
    </Form>
  )
}