import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('./views/Layout/index'));
const BookAssignment = lazy(() => import('./views/bookAssignment/index'));

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
        path: 'book-assignment',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
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
