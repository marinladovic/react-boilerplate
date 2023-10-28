import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import NavMenu from '@/features/nav-menu'
import { ThemeProvider } from '@/shared/ui/theme-provider'

const AppLayout = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
            <NavMenu />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </ThemeProvider>
    )
}

export default AppLayout
