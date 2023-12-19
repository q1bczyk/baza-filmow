import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Navbar = lazy(() => import('./components/navbar/Navbar'));
const HomePage = lazy(() => import('./pages/home/HomePage'));
const LoginPage = lazy(() => import('./pages/login/LoginPage'));

const Routing = () => 
{
    const router = createBrowserRouter([
        {
          path: '/',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar/>
              <Outlet/>
            </Suspense>
          ),
          children: 
          [
            {
                path: '',
                element: <HomePage/>  
            },
          ]
        },
        {
          path: 'signin',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage/>
            </Suspense>
          )
        },
      ]);

    return(
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Routing;