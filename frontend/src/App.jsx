import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PageNotFound from './views/404/PageNotFound';
import { Backdrop, CircularProgress } from '@mui/material';

const Layout = lazy(() => import('./views/Layout/index'));
const BookAssignment = lazy(() => import('./views/bookAssignment/index'));

const fallback = (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open
  >
    <CircularProgress color='inherit' />
  </Backdrop>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        loader: async () => redirect('/book-assignment'),
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
      {
        path: 'book-assignment',
        element: (
          <Suspense fallback={fallback}>
            <BookAssignment />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
