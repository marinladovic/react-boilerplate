import { RouteObject, createBrowserRouter } from 'react-router-dom'

import AppLayout from '@/features/AppLayout'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <div>Home</div>,
            },
            {
                path: '/about',
                element: <div>About</div>,
            },
        ],
    },
]

const router = createBrowserRouter(routes)
export default router
