import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'

export const {
    handlers,
    signIn,
    signOut,
    auth
} = NextAuth({
    providers: [
        GitHub,
        Credentials({
            authorize: async (credentials) => {
                console.log(credentials)
                return null
            },
        }),
    ],
    // callbacks: {
    //     jwt({ token, user }) {
    //         if (user) { // User is available during sign-in
    //             token.id = user.id
    //         }
    //         return token
    //     },
    //     session({ session, token }) {
    //         session.user.id = token.id
    //         return session
    //     },
    // },
})