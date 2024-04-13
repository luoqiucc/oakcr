import type {ReactNode} from 'react'

import SettingsAside from '@/components/aside/settings-aside'

export default function SettingsLayout(
    {
        children,
    }: Readonly<{ children: ReactNode }>
) {
    return (
        <div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <SettingsAside/>
            <div className="grid gap-6">
                {children}
            </div>
        </div>
    )
}