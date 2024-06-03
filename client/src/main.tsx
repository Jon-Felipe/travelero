import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { store } from './store.ts';
import { Provider } from 'react-redux';

// pages
import Home from './pages/Home.tsx';
import Tours from './pages/Tours.tsx';
import ProfileLayout from './pages/profile/ProfileLayout.tsx';
import PersonalData from './pages/profile/PersonalData.tsx';
import MyTours from './pages/profile/MyTours.tsx';
import Favourites from './pages/profile/Favourites.tsx';
import ChangePassword from './pages/profile/ChangePassword.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import SingleTour from './pages/SingleTour.tsx';
import Cart from './pages/Cart.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/tours',
        element: <Tours />,
      },
      {
        path: '/tours/:id',
        element: <SingleTour />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/profile',
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            path: '/profile',
            element: <PersonalData />,
          },
          {
            path: 'my-tours',
            element: <MyTours />,
          },
          {
            path: 'favourites',
            element: <Favourites />,
          },
          {
            path: 'change-password',
            element: <ChangePassword />,
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
