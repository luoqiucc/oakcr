'use client'

import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {Button} from '@/components/ui/button'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {User, UserX} from 'lucide-react'
import {TypographySmall} from '@/components/ui/typography'
import Link from 'next/link'
import {useSession} from 'next-auth/react'
import SignOutForm from '@/components/auth/sign-out/sign-out-form'

export default function UserAvatar() {
    const {data: session} = useSession()

    return (
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
                            <SignOutForm/>
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
}