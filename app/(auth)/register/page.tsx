import Image from 'next/image'
import Link from 'next/link'

import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {TypographyH2, TypographySmall} from '@/components/ui/typography'
import GithubProvider from '@/components/sign-in-provider/github-provider'

export default function Register() {
    return (
        <div className="w-[100vw] h-[100vh] flex">
            <div className="w-full md:w-[50vw] h-full flex items-center justify-center">
                <div>
                    <TypographyH2>注册</TypographyH2>
                    <form className="grid gap-4 w-[350px] mt-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">邮箱</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                required/>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">密码</Label>
                            <Input id="password" type="password" required/>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">确认密码</Label>
                            <Input id="password" type="password" required/>
                        </div>
                        <Button type="submit" className="w-full">
                            注册
                        </Button>
                    </form>
                    <hr className="my-4"/>
                    <GithubProvider/>
                    <div className="mt-4">
                        <TypographySmall>
                            已经注册过?{' '}
                            <Link
                                href={'/sign-in'}
                                className="text-primary">
                                登录
                            </Link>
                        </TypographySmall>
                    </div>
                </div>
            </div>
            <div className="hidden md:block w-[50vw] h-full bg-muted">
                <Image
                    src="/images/auth/register_cover.jpg"
                    alt="sign in"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover"/>
            </div>
        </div>
    )
}
