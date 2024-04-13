'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {Sheet, SheetContent, SheetTrigger, SheetClose} from '@/components/ui/sheet'
import {Button} from '@/components/ui/button'
import {PanelLeft, Package2, User, UserX} from 'lucide-react'
import {cn} from '@/lib/utils'

import {router} from '@/router'
import MainSearch from '@/components/main-search'
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {TypographySmall} from '@/components/ui/typography'
import {userSignOut} from '@/action/auth'
import type {Session} from '@auth/core/types'

interface HeaderProps {
    session: Session | null
}

export default function Header({session}: HeaderProps) {
    const pathname = usePathname()

    const SignInAvatar = () => (
        <>
            {session ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="overflow-hidden rounded-full">
                            <Avatar>
                                <AvatarImage src={session?.user?.image || ''}/>
                                <AvatarFallback>
                                    <User/>
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>
                            {session?.user?.name}
                            <br/>
                            <TypographySmall>{session?.user?.email}</TypographySmall>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <Link href={'/settings/profile'}>
                            <DropdownMenuItem>个人中心</DropdownMenuItem>
                        </Link>
                        <Link href={'/settings'}>
                            <DropdownMenuItem>设置</DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            <form action={userSignOut} className="w-full">
                                <Button
                                    type="submit"
                                    variant="ghost"
                                    className="text-right p-0 h-auto w-full justify-start">
                                    退出登录
                                </Button>
                            </form>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Link href={'/sign-in'}>
                            <Button
                                variant="outline"
                                size="icon"
                                className="overflow-hidden rounded-full">
                                <UserX/>
                            </Button>
                        </Link>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            )}
        </>
    )

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
                                        pathname.startsWith(item.path) && 'text-foreground'
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
            <SignInAvatar/>
        </header>
    )
}