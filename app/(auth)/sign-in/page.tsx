'use client'

import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {TypographyH2, TypographySmall} from '@/components/ui/typography'
import SignInGithubForm from '@/components/auth/sign-in/sign-in-github-form'
import {redirect} from 'next/navigation'
import {credentialsAuthenticate} from '@/action/auth'
import {useSession} from 'next-auth/react'
import {useFormState, useFormStatus} from 'react-dom'
import CoverImage from '@/components/auth/cover-image'

export default function SignInPage() {
    const {data: session} = useSession()
    if (session) {
        redirect('/')
    }

    const [errorMessage, dispatch] = useFormState(
        credentialsAuthenticate,
        undefined
    )

    return (
        <div className="w-[100vw] h-[100vh] flex">
            <div className="w-full md:w-[50vw] h-full flex items-center justify-center">
                <div>
                    <TypographyH2>登录</TypographyH2>
                    <form
                        action={dispatch}
                        className="grid gap-4 w-[350px] mt-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">邮箱</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                required/>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">密码</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                required/>
                        </div>
                        <Button type="submit" className="w-full">
                            登录
                        </Button>
                    </form>
                    <hr className="my-4"/>
                    <SignInGithubForm/>
                    <div className="mt-4">
                        <TypographySmall>
                            还没有账户?{' '}
                            <Link
                                href={'/register'}
                                className="text-primary underline">
                                注册
                            </Link>
                        </TypographySmall>
                    </div>
                </div>
            </div>
            <div className="hidden md:block w-[50vw] h-full bg-muted">
                <CoverImage src={'/images/auth/sign_in_cover.jpg'}/>
            </div>
        </div>
    )
}
