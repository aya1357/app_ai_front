import Image from 'next/image'

export default async function Home() {
  return (
    <div className="bg-yellow-50 px-4 sm:px-0">
      <div className="flex justify-center items-center">
        <Image src="/home/hero.png" alt="hero" width={1000} height={1000} />
      </div>
    </div>
  )
}
