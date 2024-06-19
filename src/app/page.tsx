import Image from 'next/image'
import { TextReviews } from '../components/home/textReviews'

export default async function Home() {
  return (
    <div className="bg-yellow-50 px-4 sm:px-0">
      <div className="flex flex-col justify-center items-center">
        <Image src="/home/hero.png" alt="hero" width={1000} height={1000} />
      </div>

      <div className="mt-12" />
      <TextReviews />
    </div>
  )
}
