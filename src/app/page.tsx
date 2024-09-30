"use client"


import { Theme } from "@/components/Theme"
import { LoginForm } from "@/components/ui/login-form"
import { FormProvider } from "react-hook-form"


const Page = () => {
  return (
    
      <div className=" w-full max-w-2xl min-h-screen mx-auto flex flex-col "> 
         <Theme />

         <LoginForm/>
      </div>

  )
}

export default Page

