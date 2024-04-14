'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {Sheet, SheetContent, SheetTrigger, SheetClose} from '@/components/ui/sheet'
import {Button} from '@/components/ui/button'
import {PanelLeft, Package2, User, UserX} from 'lucide-react'
import {cn} from '@/lib/utils'
import MainSearch from '@/components/header/main-search'
import UserAvatar from '@/components/header/user-avatar'
import {ModeToggle} from '@/components/theme/mode-toggle'
import {router} from '@/router'

export default function Header() {
    const pathname = usePathname()

    return (
        <header
            className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5"/>
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <SheetClose asChild>
                            <Link
                                href={'/'}
                                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
                                <Package2 className="h-5 w-5 transition-all group-hover:scale-110"/>
                                <span className="sr-only">OakCR</span>
                            </Link>
                        </SheetClose>
                        {router.map((item, index) => (
                            <SheetClose asChild key={index}>
                                <Link
                                    href={item.path}
                                    className={cn(
                                        'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground',
                                        item.path === pathname && 'text-foreground'
                                    )}>

                                    <item.icon className="h-5 w-5"/>
                                    {item.title}
                                </Link>
                            </SheetClose>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
            <MainSearch/>
            <UserAvatar/>
            <ModeToggle/>
        </header>
    )
}