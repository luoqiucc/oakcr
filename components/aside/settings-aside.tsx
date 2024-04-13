'use client'

import {usePathname} from 'next/navigation'
import {settingRouter} from '@/router'
import Link from 'next/link'
import {cn} from '@/lib/utils'

export default function SettingsAside() {
    const pathname = usePathname()

    return (
        <nav className="grid gap-2 text-sm text-muted-foreground">
            {settingRouter.map((item, index) => (
                <Link
                    key={index}
                    href={item.path}
                    className={cn(
                        'px-4 py-2',
                        item.path === pathname && 'bg-accent text-accent-foreground'
                    )}>
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}