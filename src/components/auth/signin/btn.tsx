import { signIn } from '@/contexts/auth'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '../../ui/button'

export function SigninBtn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider)
      }}
    >
      <Button
        {...props}
        variant="outline"
        className="hover:bg-green-100 border-green-500"
      >
        <FcGoogle />
        <div className="ml-2" />
        <span>Googleでログイン</span>
      </Button>
    </form>
  )
}
