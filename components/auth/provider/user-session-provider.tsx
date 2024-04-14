'use client'

import {SessionProvider} from 'next-auth/react'
import type {ReactNode} from 'react'

export default function UserSessionProvider(
    {
        children,
    }: Readonly<{ children: ReactNode }>
) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}