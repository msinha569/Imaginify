import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
    console.log("het");
    
  return (
   <SignIn  forceRedirectUrl='/'/>
  )
}

export default SignInPage
