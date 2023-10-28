import { RouteObject, createBrowserRouter } from 'react-router-dom'

import AppLayout from '@/features/app-layout'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
    },
]

const router = createBrowserRouter(routes)
export default router
