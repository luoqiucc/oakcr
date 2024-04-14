import {userSignOut} from '@/action/auth'
import {Button} from '@/components/ui/button'

export default function SignOutForm() {
    return (
        <form action={userSignOut} className="w-full">
            <Button
                type="submit"
                variant="ghost"
                className="text-right p-0 h-auto w-full justify-start">
                退出登录
            </Button>
        </form>
    )
}