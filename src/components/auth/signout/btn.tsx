import { signOut } from '@/contexts/auth'
import React from 'react'
import { Button } from '../../ui/button'

export function SignoutBtn({
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
