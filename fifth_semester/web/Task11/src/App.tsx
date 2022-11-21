import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Info = lazy(() => import('./tasks/0_info/App'));
const First = lazy(() => import('./tasks/1_first/App'));
const Variables = lazy(() => import('./tasks/2_variables/App'));
const Styles = lazy(() => import('./tasks/3_styles/App'));
const Components = lazy(() => import ('./tasks/4_components/App'));
const Modules = lazy(() => import('./tasks/5_modules/App'));
const Greeting = lazy(() => import ('./tasks/6_greeting/App'));
const Props = lazy(() => import('./tasks/7_props/App'));
const Hooks = lazy(() => import ('./tasks/8_hooks/App'));
const Time = lazy(() => import ( './tasks/9_time/App'));
const Hello = lazy(() => import('./tasks/10_hello/App'));

const router = createBrowserRouter([
  {
    errorElement: <Info />,
    children: [
      {
        path: '/',
        element: <Info />,
      },
      {
        path: '/first',
        element: <First />,
      },
      {
        path: '/variables',
        element: <Variables />,
      },
      {
        path: '/styles',
        element: <Styles />,
      },
      {
        path: '/components',
        element: <Components />,
      },
      {
        path: '/modules',
        element: <Modules />,
      },
      {
        path: '/greeting',
        element: <Greeting />,
      },
      {
        path: '/props',
        element: <Props />,
      },
      {
        path: '/hooks',
        element: <Hooks />,
      },
      {
        path: '/time',
        element: <Time />,
      },
      {
        path: '/hello',
        element: <Hello />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
