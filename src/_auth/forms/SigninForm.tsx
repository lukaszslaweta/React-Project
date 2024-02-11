import { Button } from "@/components/ui/button"

import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from 'react-router-dom'
//import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import { useForm } from "react-hook-form"
import { SignipValidation, SignupValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/shared/Loader"

 


const SigninForm = () => {
  const isLoading = false;

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignipValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
        <Form {...form}>
          <div className="sm: w-420 flex-center flex-col">
            <img src="/assets/images/logo.svg" alt="logo"/>

            <h2 className="h3-bold md:h2-bold pt-5 sm:pt 12">Log in to your account</h2>

            <p className="text-light-3 small-medium md:base-regular mt-2">Welcome back! Enter your details</p>
          
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input"{...field} />
              </FormControl>


              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input"{...field} />
              </FormControl>
                

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">
          { isLoading ? (
            <div className="flex-center gap-2">
              <Loader />Loading...
              <Link to="./Home" className="text-primary-500 text-small-semibold ml-1"> Sing up</Link>

            </div>
          ): "Sing-in"}
          
        </Button>

        <p className="text-small-regular text-light-2 text-center mt-2">
            Don't have an account?
            <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1"> Sing up</Link>
        </p>
      </form>
      </div>
    </Form>
  )
}

export default SigninForm