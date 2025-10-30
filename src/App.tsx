import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import type { FC } from 'react'
import LoginPage from './components/pages/LoginPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App: FC = () => {
	const router = createBrowserRouter(
		[
			{
				path: '/',
				element: <LoginPage />,
				errorElement: <>404</>,
			},
		],
		{
			future: {
				/* v7_startTransition: true, */
				/* v7_relativeSplatPath: true, */
			},
		}
	)
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}></RouterProvider>
		</QueryClientProvider>
	)
}

export default App
