'use client'

import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

export function Cards() {
  return (
    <>
      <div className="mt-20" />
      <div className="flex justify-center items-center font-bold text-2xl">
        出来ること
      </div>
      <div className="mt-6" />
      <div className="container grid grid-cols-1 gap-10 xl:grid-cols-3">
        <Card>
          <CardHeader className="flex justify-center items-center">
            <Image
              src="/home/card_character.png"
              alt="校閲ちゃん"
              width={150}
              height={150}
            />
          </CardHeader>
          <CardFooter className="flex justify-center items-center text-3xl">
            <p>就活メール</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex justify-center items-center">
            <Image
              src="/home/card_character.png"
              alt="校閲ちゃん"
              width={150}
              height={150}
            />
          </CardHeader>
          <CardFooter className="flex justify-center items-center text-3xl">
            <p>社内のメール</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex justify-center items-center">
            <Image
              src="/home/card_character.png"
              alt="校閲ちゃん"
              width={150}
              height={150}
            />
          </CardHeader>
          <CardFooter className="flex justify-center items-center text-3xl">
            <p>社外メール</p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
