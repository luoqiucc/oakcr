'use server'

import {signOut} from '@/auth'

export async function userSignOut() {
    await signOut()
}