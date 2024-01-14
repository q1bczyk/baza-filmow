import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Loader from './shared/ui/loader/Loader';

const Navbar = lazy(() => import('./components/navbar/Navbar'));
const HomePage = lazy(() => import('./pages/home/HomePage'));
const LoginPage = lazy(() => import('./pages/login/LoginPage'));
const RegisterPage = lazy(() => import('./pages/register/RegisterPage'));
const FilmDetailsPage = lazy(() => import('./pages/film-details/FilmDetailsPage'));
const AddFilmPage = lazy(() => import('./pages/add-film/AddFilmPage'));

const Routing = () => 
{
    const router = createBrowserRouter([
        {
          path: '/',
          element: (
            <Suspense fallback={<Loader/>}>
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
              element: (
                <Suspense fallback={<Loader/>}>
                  <FilmDetailsPage/>
                </Suspense>
              )
            },
            {
              path: 'add',
              element: (
                <Suspense fallback={<Loader/>}>
                  <AddFilmPage/>
                </Suspense>
              )
            }
          ]
        },
        {
          path: 'signin',
          element: (
            <Suspense fallback={<Loader/>}>
              <LoginPage/>
            </Suspense>
          )
        },
        {
          path: 'signup',
          element: (
            <Suspense fallback={<Loader/>}>
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