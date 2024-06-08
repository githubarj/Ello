import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const BookAssignment = lazy(() =>
  import('./views/bookAssignment/BookAssignment')
);

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
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
