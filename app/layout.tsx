import type {ReactNode} from 'react'
import type {Metadata} from 'next'
import UserSessionProvider from '@/components/auth/provider/user-session-provider'
import {ThemeProvider} from '@/components/theme/provider/theme-provider'
import './globals.css'

export const metadata: Metadata = {
    title: {
        template: '%s | OakCR',
        default: 'OakCR',
    },
    description: 'OakCR',
}

export default function RootLayout(
    {
        children,
    }: Readonly<{ children: ReactNode }>
) {
    return (
        <html lang="zh-CN">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <UserSessionProvider>
                {children}
            </UserSessionProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
