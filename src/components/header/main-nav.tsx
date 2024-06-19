'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { CustomLink } from '../common/custom-link'
import { Button } from '../ui/button'
import { NavigationMenuLink } from '../ui/navigation-menu'

export function MainNav() {
  return (
    <div className="flex items-center">
      <Image src="/home/logo.png" height={40} width={40} alt="logo" />
      <CustomLink href="/">
        <Button variant="link" className="font-hannari -ml-3 text-xl">
          校閲ちゃん
        </Button>
      </CustomLink>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
