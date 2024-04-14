'use client'

import {Button} from '@/components/ui/button'
import {githubAuthenticate} from '@/action/auth'

export default function SignInGithubForm() {
    return (
        <form action={githubAuthenticate}>
            <Button variant="outline" className="w-full">
                使用Github登录
            </Button>
        </form>
    )
}