import Header from '@/components/header/header'
import {auth} from '@/auth'

export default async function HeaderWrapper() {
    const session = await auth()

    return <Header session={session}/>
}