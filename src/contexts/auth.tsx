import Google from '@auth/core/providers/google'
import axios from 'axios'
import NextAuth, { Account, NextAuthConfig, User } from 'next-auth'
import { Provider } from 'next-auth/providers'

const providers: Provider[] = [
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
]

export async function createUser(user: User, account: Account, apiUrl: string) {
  const { name, email, image: avatar } = user
  const { provider, providerAccountId: uid } = account

  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/web/auth/${provider}/callback`,
      {
        user: {
          name,
          email,
          avatar,
          auth_provider: {
            provider,
            uid,
          },
        },
      },
    )
    return response
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
}

export const config: NextAuthConfig = {
  theme: {
    logo: '/login.png',
  },
  providers: providers,
  // TODO: Fix Me
  // pages: {
  //   signIn: "/auth/signin",
  // },
  basePath: '/api/auth',
  callbacks: {
    async signIn({ user, account}) {
      try {
        if (!account) throw new Error('Account is null')
        if (!process.env.NEXT_PUBLIC_API_URL)
          throw new Error('API URL is not set')

        const response = await createUser(
          user,
          account,
          process.env.NEXT_PUBLIC_API_URL,
        )
        return response.status === 200
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error))
      }
    },
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl
        if (pathname === '/protected-page') return !!auth
      } catch (err) {
        console.error(err)
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === 'update') token.name = session.user.name
      return token
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
