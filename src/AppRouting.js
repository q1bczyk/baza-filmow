import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AddFilmPage from './pages/add-film/AddFilmPage';
import FilmDetailsPage from './pages/film-details/FilmDetailsPage';
import RegisterPage from './pages/register/RegisterPage';

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
            {
              path: 'details',
              element: <FilmDetailsPage/>
            },
            {
              path: 'add',
              element: <AddFilmPage/>
            }
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
        {
          path: 'signup',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <RegisterPage/>
            </Suspense>
          )
        },
      ]);

    return(
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Routing;