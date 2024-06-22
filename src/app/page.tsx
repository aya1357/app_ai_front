import Image from 'next/image'
import { Cards } from '../components/home/card'
import { Reviews } from '../components/home/reviews'
import { Button } from '../components/ui/button'

export default async function Home() {
  return (
    <div className="bg-yellow-50 px-4 sm:px-0">
      <div className="flex flex-col justify-center items-center">
        <Image src="/home/hero.png" alt="hero" width={1000} height={1000} />
      </div>

      <div className="mt-12" />

      <Reviews />

      <Cards />

      <div className="mt-20" />

      <div className="text-sm flex sm:space-x-1 items-center justify-center">
        <Button variant="link">利用規約</Button>
        <Button variant="link">プライバシーポリシー</Button>
        <Button variant="link">お問い合わせ</Button>
      </div>

      <div className="pt-6" />
    </div>
  )
}
