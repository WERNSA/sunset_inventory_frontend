import React, { Suspense } from 'react';
import { useLoaderData, useOutlet, Await } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';

const AuthLayout = () => {
  const outlet = useOutlet();

  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <Await
        resolve={userPromise}
        errorElement={<h1>Something went wrong!</h1>}
        // eslint-disable-next-line react/no-children-prop
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};

export default AuthLayout;
