import React from 'react';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import ThemeLayout from '../components/layout';
import ErrorPage from './ErrorPage';
import Inventory from '../pages/process/inventory';
import Login from '../pages/auth/Login';
import AuthLayout from '../pages/auth/AuthLayout';
import ProtectedRoute from '../pages/auth/ProtectedRoute';
import Buy from '../pages/process/buy';
import Sales from '../pages/process/sales';
import Brand from '../pages/catalog/brand';
import { getBrandList } from '../api/catalog/brand';
import { getCategoryList } from '../api/catalog/category';
import Category from '../pages/catalog/category';
import { getUnitMeasurementList } from '../api/catalog/unitMeasurement';
import UnitMeasurement from '../pages/catalog/unitMeasurement';
import { getProductList } from '../api/catalog/product';
import Product from '../pages/catalog/product';

const getUserData = () =>
  new Promise((resolve) => {
    const user = window.localStorage.getItem('user');
    resolve(user);
  });

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    loader: () => defer({ userPromise: getUserData() }),
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute>
            <ThemeLayout />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'process/',
            children: [
              {
                path: 'inventory/',
                element: <Inventory />,
              },
              {
                path: 'sales/',
                element: <Sales />,
              },
              {
                path: 'buy/',
                element: <Buy />,
              }
            ],
          },
          {
            path: 'catalog/',
            children: [
              {
                path: 'brand/',
                element: <Brand />,
                loader: async () => getBrandList(),
              },
              {
                path: 'category/',
                element: <Category />,
                loader: async () => getCategoryList(),
              },
              {
                path: 'unit-measurement/',
                element: <UnitMeasurement />,
                loader: async () => getUnitMeasurementList(),
              },
              {
                path: 'product/',
                element: <Product />,
                loader: async () => getProductList(),
              }
            ],
          },
        ],
      },
      {
        path: 'login/',
        element: <Login />,
      },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
