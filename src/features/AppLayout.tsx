import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { ThemeProvider } from '@/shared/ui/theme-provider'

import NavMenu from './NavMenu'

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
