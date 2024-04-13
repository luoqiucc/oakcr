import type {ReactNode} from 'react'
import type {Metadata} from 'next'

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
        <body>{children}</body>
        </html>
    )
}
