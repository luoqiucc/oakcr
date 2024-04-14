'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {Package2} from 'lucide-react'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import {cn} from '@/lib/utils'
import {router} from '@/router'

export default function Aside() {
    const pathname = usePathname()

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110"/>
                    <span className="sr-only">OakCR</span>
                </Link>
                <TooltipProvider>
                    {router.map((item, index) => {
                        if (item.path !== '/settings') {
                            return (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={item.path}
                                            className={cn(
                                                'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                                                item.path === pathname && 'bg-accent text-accent-foreground'
                                            )}>
                                            <item.icon className="h-5 w-5"/>
                                            <span className="sr-only">{item.title}</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">{item.title}</TooltipContent>
                                </Tooltip>
                            )
                        }
                    })}
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    {router.map((item, index) => {
                        if (item.path === '/settings') {
                            return (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={item.path}
                                            className={cn(
                                                'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                                                pathname.startsWith(item.path) && 'bg-accent text-accent-foreground'
                                            )}>
                                            <item.icon className="h-5 w-5"/>
                                            <span className="sr-only">{item.title}</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">{item.title}</TooltipContent>
                                </Tooltip>
                            )
                        }
                    })}
                </TooltipProvider>
            </nav>
        </aside>
    )
}