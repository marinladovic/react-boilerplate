import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { AboutModule } from '@/features/About'
import AppLayout from '@/features/AppLayout'
import { HomeModule } from '@/features/Home'
import { GeneralErrorBoundary } from '@/features/error-boundary'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <GeneralErrorBoundary />,
        children: [
            {
                index: true,
                element: <HomeModule />,
            },
            {
                path: '/about',
                element: <AboutModule />,
                errorElement: <GeneralErrorBoundary />,
            },
        ],
    },
]

const router = createBrowserRouter(routes)
export default router
