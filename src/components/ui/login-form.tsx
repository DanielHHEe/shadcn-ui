"use client"
import { zodResolver } from "@hookform/resolvers/zod"

import { Form, useForm } from "react-hook-form"


import { z } from 'zod';

import {
  Card,
  CardContent,
  CardDescription,
 
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "./input";
import { Button } from "./button";

const formSchema = z.object({
    Email: z.string().email('[ERRO] Email inválido!'),
    Senha: z.string().min(8, 'Precisa ter mais de 8 caracters!')
})

export const LoginForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Email: '', Senha: ''
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <Card className='mt-10'>
      <CardHeader>
        <CardTitle className="text-2xl">Faça seu login</CardTitle>
        <CardDescription className="text-1xl">Digite seus dados de login</CardDescription>
      </CardHeader>
      <CardContent>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu E-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

{/* <FormField
          control={form.control}
          name="Senha"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input placeholder="Digite sua senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Login</Button>
      </form>
    </Form>
  

      </CardContent>
    </Card>
  );
};
