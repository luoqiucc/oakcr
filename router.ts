import type {LucideIcon} from 'lucide-react'
import {Home, Package, Settings} from 'lucide-react'

const router: {
    path: string
    title: string
    icon: LucideIcon
}[] = [
    {
        path: '/',
        title: '首页',
        icon: Home,
    },
    {
        path: '/library',
        title: '库',
        icon: Package,
    },
    {
        path: '/settings',
        title: '设置',
        icon: Settings,
    },
]

const SETTING_URL_PREFIX = '/settings'
const settingRouter: {
    path: string
    title: string
}[] = [
    {
        path: `${SETTING_URL_PREFIX}`,
        title: '通用设置',
    },
    {
        path: `${SETTING_URL_PREFIX}/upload`,
        title: '上传设置',
    },
    {
        path: `${SETTING_URL_PREFIX}/user`,
        title: '用户管理',
    },
    {
        path: `${SETTING_URL_PREFIX}/profile`,
        title: '个人中心',
    },
]

export {
    router,
    settingRouter
}