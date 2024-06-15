import { signIn, signOut } from '@/contexts/auth'
import React from 'react'
import { Button } from '../ui/button'

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  console.log('provider', provider)
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider)
      }}
    >
      <Button {...props}>
        <span>サインイン</span>
      </Button>
    </form>
  )
}

export function SignOut({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        'use server'
        await signOut({ redirectTo: provider })
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        ログアウト
      </Button>
    </form>
  )
}
