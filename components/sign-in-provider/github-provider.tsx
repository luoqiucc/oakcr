import {Github} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {signIn} from '@/auth'

export default function GithubProvider() {
    return (
        <form
            action={async () => {
                'use server'
                await signIn('github')
            }}>
            <Button variant="outline" className="w-full">
                <Github size={20} className="mr-4"/>
                使用Github登录
            </Button>
        </form>
    )
}