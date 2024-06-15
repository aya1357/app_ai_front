import { auth } from '@/contexts/auth'

export default async function Home() {
  const session = await auth()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre className="py-6 px-4 whitespace-pre-wrap break-all">
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  )
}
