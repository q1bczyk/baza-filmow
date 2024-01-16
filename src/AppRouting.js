import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NotFound from './pages/not-found/NotFound';
import Loader from './shared/ui/loader/Loader';

const Navbar = lazy(() => import('./components/navbar/Navbar'));
const HomePage = lazy(() => import('./pages/home/HomePage'));
const LoginPage = lazy(() => import('./pages/login/LoginPage'));
const RegisterPage = lazy(() => import('./pages/register/RegisterPage'));
const FilmDetailsPage = lazy(() => import('./pages/film-details/FilmDetailsPage'));
const AddFilmPage = lazy(() => import('./pages/add-film/AddFilmPage'));
const FilmPage = lazy(() => import('./pages/films/FilmPage'));
const Footer = lazy(() => import('./components/footer/Footer'));

const Routing = () => 
{
    const router = createBrowserRouter([
        {
          path: '/',
          element: (
            <Suspense fallback={<Loader/>}>
              <Navbar/>
              <Outlet/>
              <Footer/>
            </Suspense>
          ),
          errorElement: <NotFound/>,
          children: 
          [
            {
                path: '',
                element: (
                  <Suspense fallback={<Loader/>}>
                    <HomePage/>
                  </Suspense>
                ),
                loader: () => import('./api/loaders/MoviesLoader').then(module => module.moviesLoader())
            },
            {
              path: 'details/:movieId',
              element: (
                <Suspense fallback={<Loader/>}>
                  <FilmDetailsPage/>
                </Suspense>
              ),
              loader: (meta) => import('./api/loaders/MoviesLoader').then(module => module.movieLoader(meta)),
            },
            {
              path: 'add',
              element: (
                <Suspense fallback={<Loader/>}>
                  <AddFilmPage/>
                </Suspense>
              )
            },
            {
              path: 'movies',
              element: (
                <Suspense fallback={<Loader/>}>
                  <FilmPage/>
                </Suspense>
              ),
              loader: () => import('./api/loaders/MoviesLoader').then((module) => module.moviesLoader())
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